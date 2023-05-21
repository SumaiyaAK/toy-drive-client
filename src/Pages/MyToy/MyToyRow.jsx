
const MyToyRow = ({ myToy, handleDelete }) => {
    const { _id, sellerName, email, Sub_category, Price, toy, Photo_URL } = myToy;

    
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)}className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                            {Photo_URL && <img src={Photo_URL} />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
            </td>
            <td>{email}</td>
            <td>{toy}</td>
            <td>{Sub_category}</td>
            <td>${Price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyToyRow;