import Background from "../Background/Background";
import CarEssantials from "../CarEssentials/CarEssantials";
import Gallery from "../Gallery/Gallery";
import ProductsCategory from "../ProductsCategory/ProductsCategory";
import ToyDonate from "../ToyDonate/ToyDonate";


const Home = () => {
    return (
        <div>
            <Background></Background>
            <Gallery></Gallery>
            <ProductsCategory></ProductsCategory>
            <ToyDonate></ToyDonate>
            <CarEssantials></CarEssantials>
        </div>
    );
};

export default Home;