import { Card, Hero, ServiceCard } from "@/components";
import products from "./assets/data/products";


const Home = () => {
    return (
        <>
            <div>
                <Hero />
            </div>
            <div>
                <ServiceCard />
            </div>
            <div>
                <h1 className="container flex justify-center">Trending Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container'>
                {
                        products.slice(8, 12).map((item, index) => 
                        <Card
                            productName={item.productName}
                            imgUrl={item.imgUrl}
                            category={item.category}
                            price={item.price}
                        />
                    )
                }
                </div>
                
            </div>
        </>

    );
}

export default Home;

