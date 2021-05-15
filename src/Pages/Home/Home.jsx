import Navbar from './components/Navbar'
import Feed from './components/Feed'
import PublishPaff from './components/PublishPaff'
import './styles/home.css'

function Home() {
  return (
    <div className="home">
      <Navbar account={'account'} />
      <section>
        <PublishPaff account={'account'} />
        <Feed> 
          {[]}
        </Feed>
      </section>
    </div>
  )
}

export default Home
