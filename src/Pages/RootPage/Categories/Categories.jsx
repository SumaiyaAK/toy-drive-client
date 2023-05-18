import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Categories = () => {
    return (
        <Tabs className='mx-auto'>
            <TabList>
                <Tab>Remote Controlled Cars</Tab>
                <Tab>Die Cast Cars</Tab>
                <Tab>Transforming Cars</Tab>
            </TabList>

            <TabPanel>
                <div className='p-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/high-angle-kids-playing-with-electric-car_23-2148243620.jpg?w=1380&t=st=1684423596~exp=1684424196~hmac=f700787717123e898047fbbd304ed1f1bb653630b65a76e2ee55830bb96efe83" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">TurboTron Racer</h2>
                        <p>Buckle up and get ready for an adrenaline-fueled experience with the TurboTron Racer remote-controlled car! This cutting-edge racer combines sleek design with turbocharged performance. Its powerful motor delivers lightning-fast acceleration, allowing you to leave competitors in the dust.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96  bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/boy-playing-with-radio-controlled-toy-truck-car-remote-control-flat-illustration_74855-10489.jpg?w=900&t=st=1684423776~exp=1684424376~hmac=3ce1c769e3dc40a654ac014ed8ac8bfba228ae6207bec914c409084bdf2f53ec" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">MegaSpeed Phantom</h2>
                        <p>Prepare to enter a world of speed with the MegaSpeed Phantom remote-controlled car! This beast of a racer is built for maximum velocity, </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
                </div>

            </TabPanel>
            <TabPanel>
            <div className='p-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
                <div className="card card-compact w-96  bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/red-pickup-model-black-floor_1150-16350.jpg?w=1380&t=st=1684423434~exp=1684424034~hmac=e135609199bc5d6f605acc79d65e35532ce45326f4a308249765a65cb1ee9c80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Speedster Supreme</h2>
                        <p>Experience the thrill of speed with our Speedster Supreme remote-controlled car! This sleek and stylish racer is built for performance, with its aerodynamic design and powerful motor.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96  bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/colorful-car-toys_1194-2341.jpg?1&w=1380&t=st=1684423526~exp=1684424126~hmac=af6fe5e7cdd67c2b03008efa5368b046689245ce18a4611cf335f7802a0e318f" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Thunderbolt Racer</h2>
                        <p>Unleash the power of the Thunderbolt Racer, the ultimate remote-controlled car that combines style and speed! With its eye-catching design and lightning-fast acceleration, this car is sure to leave a lasting impression.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </TabPanel>
            <TabPanel>
            <div className='p-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-cubes-kid-toys-wooden-background-flat-lay_176474-7734.jpg?w=1380&t=st=1684424243~exp=1684424843~hmac=45d58ca5badae2ee25537a93683d43d35f683131bd55c0a1b3b6ccd8630c30f1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Construction Sets</h2>
                        <p>Unleash your creativity and build your own world of imagination with our construction sets! These sets provide endless opportunities for hands-on fun and learning.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/top-view-hands-holding-eco-toy_23-2149884350.jpg?w=1380&t=st=1684424284~exp=1684424884~hmac=2aad2f10e7e1a0f474ed4c2de64cc6a10f4666fc8cdc6c53bde9e94a79c78848" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Train</h2>
                        <p>All aboard for a railway adventure with our captivating train sets! Immerse yourself in the world of locomotives, tracks. Assemble the tracks and watch your train come to life as it chugs along the rails.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Categories;