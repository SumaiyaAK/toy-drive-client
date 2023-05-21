import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const AddToy = () => {
    const addToys = useLoaderData();
    const { ToyName, _id, Price } = addToys;
    const {user} = useContext(AuthContext);

    const handleAddToys = event => {
       event.preventDefault();
        // console.log('add toy')
        const form = event.target;
        const name = form.name.value;
        const Photo_URL = form.Photo_URL.value;
        // const seller_name = form.seller_name.value;
        const Sub_category = form.Sub_category.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const email = user?.email;

        const addToysPost = {
            sellerName: name,
            email,
            Price,
            toy:ToyName,
            toy_id: _id,
            Sub_category,
            Rating,
            Photo_URL

        }
        console.log(addToysPost)

        fetch('http://localhost:5000/addToy', {
            method:'POST',
            headers: {
                 'content-type': 'application/json'
            },
            body: JSON.stringify(addToysPost)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


    }
    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <h1 className="text-center font-bold mt-20 text-3xl text-red-600">Add A Toy: {ToyName}</h1>

            <div className="card-body">
                <form onSubmit={handleAddToys}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Photo URL</span>
                        </label>
                        <input type="text" name="Photo_URL" placeholder="Photo Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <input type="text" name="seller_name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <input type="text" name="seller_name" defaultValue={user?.email} placeholder="seller_email" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" name="Sub_category" placeholder="Sub-category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={Price} name="Price" placeholder="Price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="Rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="Available quantity" placeholder="Available quantity" className="input input-bordered" />

                    </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-error btn-outline"type="submit" value="Added Toy"></input>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddToy;