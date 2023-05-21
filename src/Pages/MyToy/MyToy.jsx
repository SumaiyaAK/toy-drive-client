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

    return (
        <div>
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
                            <th>Name</th>
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