import Policy from '~/layouts/components/Policy/Policy';
import Product from '~/layouts/components/Product/Product';
import Slider from '~/layouts/components/Slider/Slider';

function Home() {
    return (
        <>
            <div className="slider">
                <Slider />
            </div>
            <div className="policy">
                <Policy />
            </div>
            <div className="product">
                <Product />
            </div>
        </>
    );
}

export default Home;
