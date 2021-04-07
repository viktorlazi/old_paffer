const { assert } = require('chai')
const { unstable_concurrentAct } = require('react-dom/cjs/react-dom-test-utils.production.min')
const { default: Web3 } = require('web3')

const Paffer = artifacts.require('../contracts/Paffer.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Paffer', ([deployer, author, tipper])=>{
  let paffer

  before(async()=>{
    paffer=await Paffer.deployed()
  })

  describe('deployment', async()=>{
    it('deploys succesfully', async()=>{
      const address = await paffer.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
    it('has a name', async () => {
      const name = await paffer.name()
      assert.equal(name, 'Paffer')
    })
  })
  
  describe('paffs', async()=>{
    let result, paffCount
    const hash = 'abc123'

    before(async()=>{
      result = await paffer.uploadPaff(hash, 'Paff description', {from:author})
      paffCount = await paffer.paffCount()
    })

    it('creates paffs', async()=>{
      assert.equal(paffCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), paffCount.toNumber(), 'id is correct')

      await paffer.uploadPaff('', 'paff desc', {from:author}).should.be.rejected;
      await paffer.uploadPaff('paff hash', '', {from:author}).should.be.rejected;

    })
    
    it('lists paffs', async() =>{
      const paff = await paffer.paffs(paffCount)
      assert.equal(paff.id.toNumber(), paffCount.toNumber(), 'id is correct')
    })

    it('allows users to tip paffs', async ()=>{
      // track the author balance before purchase
      let oldAuthorBalance
      oldAuthorBalance = await web3.eth.getBalance(author)
      oldAuthorBalance = new web3.utils.BN(oldAuthorBalance)
      
      result = await paffer.tipPaffOwner(paffCount, {from: tipper, value: web3.utils.toWei('1', 'Ether')})

      //success
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), paffCount.toNumber(), 'id is correct')
      assert.equal(event.tipAmount, '1000000000000000000', 'tip amount is correct')
      assert.equal(event.author, author, 'author is correct')

      // Check that author received funds
      let newAuthorBalance
      newAuthorBalance = await web3.eth.getBalance(author)
      newAuthorBalance = new web3.utils.BN(newAuthorBalance)

      let tipPaffOwner
      tipPaffOwner = web3.utils.toWei('1', 'Ether')
      tipPaffOwner = new web3.utils.BN(tipPaffOwner)

      const expectedBalance = oldAuthorBalance.add(tipPaffOwner)

      assert.equal(newAuthorBalance.toString(), expectedBalance.toString())

      // FAILURE: Tries to tip a paff that does not exist
      await paffer.tipPaffOwner(999, { from: tipper, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
    })

  })
})