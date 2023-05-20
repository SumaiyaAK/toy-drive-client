import { useLocation } from "react-router-dom";

const CarDetails = () => {
    let { state } = useLocation();

    let description = (state != null) ? state['Description'] : null;
    let price = (state != null) ? state['Price'] : null;
    let rating = (state != null) ? state['Rating'] : null;
    let AvailableQuantity = (state != null) ? state['AvailableQuantity'] : null;
    let Sub_Category = (state != null) ? state['Sub-Category'] : null;
    let Seller = (state != null) ? state['Seller'] : null;
    let ToyName = (state != null) ? state['ToyName'] : null;
    let Img = (state != null) ? state['Img'] : null;


    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <div className="card lg:card-side bg-red-100 shadow-xl mx-20 my-20 px-8 py-8">
                <figure><img src={Img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ToyName}</h2>
                    <p>Description: {description}</p>
                    <p>Price:{price}</p>
                    <p>Rating: {rating}</p>
                    <p>Rating: {AvailableQuantity}</p>
                    <p>Rating: {Sub_Category}</p>
                    <p>Rating: {Seller}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarDetails;