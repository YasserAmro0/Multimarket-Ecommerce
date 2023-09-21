
import { Card, Footer, Hero, Navbar, OffersSection, ServiceCard } from "@/components";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { ProductsProps } from "@/types";


const Home = async() => {

    const product = await axios.get(`http://localhost:8001/api/v1/product?q=&filterCategory=Filter%20By%20Category&minPrice=${0}&maxPrice=${0}`);
    const products: ProductsProps[] = product.data.data;
    return (
        <>
            <ToastContainer />
            <Navbar/>
            <div>
                <Hero />
            </div>
            <div>
                <ServiceCard />
            </div>
            <div className="mt-4">
                <h1 className="container flex justify-center text-bold">Trending Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container'>
                {
                        products.slice(10, 14).map((item, index) => 
                            <Card
                            _id={item._id}
                            index={index}
                            title={item.title}
                            imageurl={item.imageurl}
                            category={item.category}
                            price={item.price}
                        />
                    )
                }
                </div>
                
            </div>
            <div className="mt-4">
                <h1 className="container flex justify-center text-bold">Best Sales</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container'>
                {
                        products.slice(0,8).map((item, index) => 
                            <Card
                                _id={item._id}
                                index={index}
                                title={item.title}
                                imageurl={item.imageurl}
                                category={item.category}
                                price={item.price}
                                
                        />
                    )
                }
                </div>
                
            </div>
            <div>
                <OffersSection/>
            </div>
            <div>
                <h1 className="container flex justify-center text-bold">New Arrivals</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container'>
                    {
                        products.slice(10, 18).map((item, index) =>
                            <Card
                                _id={item._id}
                                index={index}
                                title={item.title}
                                imageurl={item.imageurl}
                                category={item.category}
                                price={item.price}
                            />
                        )
                    }
                </div>

            </div>
            <Footer/>
        </>

    );
}

export default Home;

