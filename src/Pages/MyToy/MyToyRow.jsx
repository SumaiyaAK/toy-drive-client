
const MyToyRow = ({ myToy }) => {
    const { sellerName, email, Sub_category, Price, toy, Photo_URL } = myToy;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                            <img src={Photo_URL} />
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