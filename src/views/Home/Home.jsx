import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import { siteDetails } from '../../data'

function Home() {
  return (
    <>
        <Navbar name={siteDetails.title}/>
        <div>{siteDetails.title}</div>
    </>
  )
}

export default Home