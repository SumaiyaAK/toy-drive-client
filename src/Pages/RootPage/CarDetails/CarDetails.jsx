import { Link, useLocation } from "react-router-dom";

const CarDetails = () => {
    let { state } = useLocation();

    let description = (state != null) ? state['Description'] : null;
    let _id = (state != null) ? state['_id'] : null;
    let price = (state != null) ? state['Price'] : null;
    let rating = (state != null) ? state['Rating'] : null;
    let AvailableQuantity = (state != null) ? state['AvailableQuantity'] : null;
    let Sub_Category = (state != null) ? state['Sub_Category'] : null;
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
                    <p>Quantity: {AvailableQuantity}</p>
                    <p>Category: {Sub_Category}</p>
                    <p>Seller Name: {Seller}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/addToy/${_id}`}>
                        <button className="btn btn-outline btn-error">Add A Toy</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarDetails;