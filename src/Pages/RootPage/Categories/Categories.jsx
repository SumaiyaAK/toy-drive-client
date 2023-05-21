import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {

    const [toys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAlltoys(data))
    }, []);
    
    const navigate = useNavigate();

    function getCarTabComponents(toys, navigate) {
        
        if (toys.length == 0 || typeof toys == 'undefined') return null;

        let carCategories = [
            'Sports Car',
            'Truck',
            'Regular Car'
        ];

        let carComponents = [];
        let carTabs = [];
        let carTabPanels = [];

        for (let index = 0; index < carCategories.length; index++) {
            carTabs.push(<Tab>{carCategories[index]}</Tab>);
        }
        carTabs = <TabList>{carTabs}</TabList>;

        // carTabs = <TabList>
        //     <Tab>{'Sports Car'}</Tab>
        //     <Tab>{'Truck'}</Tab>
        //     <Tab>{'Regular Car'}</Tab>
        // </TabList>;
        
        console.log(toys);
        for (let categoryindex = 0; categoryindex < carCategories.length; categoryindex++) {
            let tabElement = [];
            for (let toyIndex = 0; toyIndex < toys.length; toyIndex++) {
                if (toys[toyIndex]['Sub_Category'] == carCategories[categoryindex]) {
                    
                    let imageElement = <figure><img className='w-2/5' src={toys[toyIndex]['Img']} alt="cars" /></figure>;
                    
                    let cardBodyElement = <div className="card-body">
                        <h2 className="card-title">Name: {toys[toyIndex]['ToyName']}</h2>
                        <p>Price: {toys[toyIndex]['Price']}</p>
                        <p>Rating: {toys[toyIndex]['Rating']}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => handleViewDetails(toys, toyIndex, navigate)}>View Details</button>
                        </div>
                    </div>
                    tabElement.push(
                        <>
                            <>{imageElement}</>
                            <>{cardBodyElement}</>
                        </>
                    );
                }
            }
            carTabPanels.push(<TabPanel>{tabElement}</TabPanel>);
        }

        carComponents = <>
            {carTabs}
            {carTabPanels}
        </>;


        return carComponents;
    }

    function handleViewDetails(toys, toyIndex, navigate) {
        navigate('/car_details', { state: toys[toyIndex] });
    }
    

    return (
        <Tabs className='mx-auto'>            
            {getCarTabComponents(toys, navigate)}
        </Tabs>
    );
};

export default Categories;




{/* <TabList>
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
                            <figure><img src={toys.Img} alt="Shoes" /></figure>
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
            </div> */}

