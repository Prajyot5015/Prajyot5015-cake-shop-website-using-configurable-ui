import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import { siteDetails, theme, products} from '../../data'
import ProductCard from '../../component/ProductCard/ProductCard'

function Home() {
  return (
    <>
        <Navbar name={siteDetails.title}/>
        <div className='details-container'>
            <p style={{color: theme.subText }}>{siteDetails.description}</p>
            {
                products.map((product,i)=>
                {
                    const {name, img} = product

                    return (
                        <ProductCard 
                            name={name}
                            img={img}
                        />
                    )
                })
            }
        </div>
    </>
  )
}

export default Home