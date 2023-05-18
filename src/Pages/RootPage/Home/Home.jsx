import Background from "../Background/Background";
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
        </div>
    );
};

export default Home;