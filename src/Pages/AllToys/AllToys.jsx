import { useEffect, useState } from "react";


const AllToys = () => {
    const [toys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('alltoys.json')
        .then(res =>res.json())
        .then(data => setAlltoys(data))
    }, [])
    return (
        <div>
            <h1>All Toys</h1>
            <p>Number of Toys: {toys.length}</p>
        </div>
       
          
           
    );
};

export default AllToys;