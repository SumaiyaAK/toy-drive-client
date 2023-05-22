
const AllToysRow = ({ allToys }) => {
    

    
    const { Seller, ToyName, Sub_Category, Price, Img, AvailableQuantity } = allToys;
    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                            {Img && <img src={Img} />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {Seller}
            </td>

            <td>{ToyName}</td>
            <td>{Sub_Category}</td>
            <td>{AvailableQuantity}</td>
            <td>${Price}</td>

            <th>

               
                <button  className="btn btn-error btn-outline btn-xs">View Details</button>
                

                
            </th>
        </tr>
    );
   

};

export default AllToysRow;