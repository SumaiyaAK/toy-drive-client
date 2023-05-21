
const MyToyRow = ({ myToy, handleDelete, handleUpdate }) => {
    const { _id, sellerName, email, Sub_category, Price, toy, Photo_URL } = myToy;


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
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

                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn btn-error btn-outline btn-xs">Update Status</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold"></h3>
                        <p className="py-4"></p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='Price' placeholder="Price" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='AvailableQuantity' placeholder="AvailableQuantity" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <textarea placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-screen" ></textarea>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <button onClick={() => handleUpdate(_id)} className="btn btn-error btn-outline btn-xs">Update</button>
                            </label>
                        </div>
                    </div>
                </div>
            </th>
        </tr>
    );
};

export default MyToyRow;