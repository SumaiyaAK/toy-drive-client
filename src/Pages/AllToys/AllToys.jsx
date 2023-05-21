import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";




const AllToys = () => {
 
  const [toys, setAlltoys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/alltoys')
      .then(res => res.json())
      .then(data => setAlltoys(data))
  }, [])

  
  return (
    <div className=" max-w-7xl mx-auto min-h-screen">
            <h2 className="text-3xl text-center my-8 glass font-bold text-red-600">All Toys:</h2>
            <div className="overflow-x-auto bg-black-500 w-full glass">
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
                            
                            <th>Car Name</th>
                            <th>Sub Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                          toys.map(allToys => <AllToysRow
                          key={allToys._id}
                          allToys={allToys}
                          
                          >

                          </AllToysRow>)
                       }
                        
                       
                        
                    </tbody>
                  

                </table>
            </div>
        </div>



  );
};

export default AllToys;