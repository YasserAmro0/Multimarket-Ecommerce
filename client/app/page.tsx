
import { Card, Footer, Hero, Navbar, OffersSection, ServiceCard } from "@/components";
import products from "./assets/data/products";
import { ToastContainer } from "react-toastify";


const Home = () => {
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
                            _id={item.id}
                            index={index}
                            title={item.productName}
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
                            _id={item.id}
                            index={index}
                            title={item.title}
                            iamgeurl={item.imgUrl}
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
                                id={item.id}
                                index={index}
                                productName={item.productName}
                                imgUrl={item.imgUrl}
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

