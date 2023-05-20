import { useEffect, useState } from "react";


const AllToys = () => {
  const [toys, setAlltoys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/alltoys')
      .then(res => res.json())
      .then(data => setAlltoys(data))
  }, [])
  return (
    <div>
      <h1>All Toys</h1>
      <p>Number of Toys: {toys.length}</p>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          {
            toys.map(toy => <tbody
             key={toy._id}
             
            >
              <tr>
                <th>1</th>
                <td>{toys.ToyName}</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
              </tr>
  
            </tbody>)
          }
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>



  );
};

export default AllToys;