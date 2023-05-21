import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [addToy, setAddToy] = useState([])

    const url =`http://localhost:5000/addtoy?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddToy(data))
    }, [])

    return (
        <div>
            <h2 className="text-5xl">My Toys: {addToy.length}</h2>
        </div>
    );
};

export default MyToy;