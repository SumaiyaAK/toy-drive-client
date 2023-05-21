
const CarEssantials = () => {
    return (
        <div className=" hero min-h-max  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold  text-red-800">Feedback Submission</h1>
                    <p className="py-6">We encourage our customers to share their feedback and experiences with us. If you have recently made a purchase or used our services, we would love to hear from you. Your feedback helps us understand your needs better and allows us to continually improve our offerings.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-800 mb-20">
                    <div className="card-body">

                    <h1 className="text-2xl font-bold text-white">Our Customer feedback</h1>
                        <div>
                            <h2 className="text-3xl font-bold text-white">John D.</h2>
                            <p className= "text-white">I recently purchased a car audio system from toyDrive, and I could not be happier. The sound quality is amazing, and the installation service was top-notch. Highly recommended! - John D.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">Sarah M.</h2>
                            <p className= "text-white">I love the car accessories I bought from toyDrive. The floor mats are of excellent quality, and the seat covers fit perfectly. The shipping was fast, and the customer service was fantastic. Will definitely shop here again. - Sarah M.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarEssantials;