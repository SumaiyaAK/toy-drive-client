import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToyRow from "./MyToyRow";

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [addToy, setAddToy] = useState([])

    const url = `http://localhost:5000/addtoy?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddToy(data))
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are You Sure! You Want to Delete');
        if(proceed){
           fetch(`http://localhost:5000/addtoy/${id}`, {
            method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
             console.log(data);
             if(data.deleteCount > 0){
                alert('deleted successfully')
                const remaining = addToy.filter(toy => toy._id !== id)
                setAddToy(remaining);
             }
           })
        }
    }

    return (
        <div className=" max-w-7xl mx-auto min-h-screen">
            <h2 className="text-5xl">My Toys: {addToy.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        <th>Image</th>                            
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Car Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                          addToy.map(myToy => <MyToyRow
                          key={myToy._id}
                          myToy={myToy}
                          handleDelete={handleDelete}
                          >

                          </MyToyRow>)
                       }
                        
                       
                        
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default MyToy;