import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [addToy, setAddToy] = useState([])

    const url = `http://localhost:5000/addtoy?email=${user.email}`;

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data) )
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default MyToy;