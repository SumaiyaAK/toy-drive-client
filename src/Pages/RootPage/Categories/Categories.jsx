import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";


const Categories = () => {

    const [toys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('alltoys.json')
            .then(res => res.json())
            .then(data => setAlltoys(data))
    }, [])
    return (
        <Tabs className='mx-auto'>
            <TabList>
                <Tab>Remote Controlled Cars</Tab>
                <Tab>Die Cast Cars</Tab>
                <Tab>Transforming Cars</Tab>
            </TabList>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">


                    {
                        toys.map(toy => <TabPanel
                            key={toy._id}
                        >
                            <figure><img src={toys} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>

                        </TabPanel>)
                    }

                </div>

            </div>


        </Tabs>
    );
};

export default Categories;