

const ToyDonate = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex ">
                    
                    <img src="https://images.unsplash.com/photo-1574607383363-5b5f1747b37b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" className="max-w-sm rounded-lg shadow-2xl" />
                    
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold mb-10">Toy Donation!</h1>
                        <p>Purpose: Explain the purpose and mission of the toy donation program, emphasizing the goal of bringing joy to children in need.</p>
                        <p className="py-6">How to Donate: Provide detailed instructions on how individuals can donate toys. Include information on drop-off locations, collection centers, or specific events where toy donations are accepted. If there are any specific guidelines or requirements for donations, such as new or gently used toys, age-appropriate items, or specific toy categories, mention those as well.</p>
                        <p className="py-6">Partner Organizations: List and provide information about any partnering organizations or charities that the toy drive supports. Include their mission, contact information, and how they distribute the donated toys to children in need. This helps establish credibility and transparency in the donation process.</p>
                        <p className="py-6">Donation Impact: Share heartwarming stories or testimonials that highlight the impact of toy donations on the lives of children. Include photographs or videos if available to create an emotional connection and inspire more people to donate.</p>
                        <button className="btn btn-outline btn-wide btn-error">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDonate;