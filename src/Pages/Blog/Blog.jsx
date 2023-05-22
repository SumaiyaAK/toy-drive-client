

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center mt-10 font-bold text-red-500 text-4xl">Quextions and Answers</h2>
            <div className="mb-12 mt-8">
                <div className="card w-full bg-base-100 shadow-xl image-full mb-12 mt-8">

                    <div className="card-body">
                        <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>    Access Token and Refresh Token:<br></br>

                            Access Token: An access token allows to access certain things and it is a pecial pass.  It is given to anyone when someone can login successfully. Access token is a proof , whenever someone wants to login, it makes sure that they have permission to access.<br></br>
                            Refresh Token: A refresh token is like a long-lasting pass, it allows to get a new access token without logging in again. Its useful till access token expires, there is no need to go through the whole login process again.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full mb-12 mt-8">

                    <div className="card-body">
                        <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                        <p>    SQL vs. NoSQL Databases:<br></br>

                            SQL Databases: SQL databases are so organized tables and well structured. They are good for structured data and they have strict rules to ensure data consistency. SQL is important to get specific answers of specific questions .<br></br>
                            NoSQL Databases: NoSQL databases are so flexible which can contain many differeent dtatas at a time. They work well with unstructured data. They dont have strict rules and can adapt to changing data needs.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full mb-12 mt-8">

                    <div className="card-body">
                        <h2 className="card-title">What is express js? What is Nest JS?</h2>
                        <p>    Express.js and Nest.js:<br></br>

                            Express.js: Express.js is a simple and flexible framework for building web applications. It helps to create routes for handling web requests and responses. Its popular because its easy to use and has a big collection of tools and plugins to choose from.<br></br>

                            Nest.js: Nest.js is a framework for building powerful server applications. It is based on Express.js and provides additional features. It is useful for complex applications.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full mb-12 mt-8">

                    <div className="card-body">
                        <h2 className="card-title">What is MongoDB aggregate and how does it work? </h2>
                        <p>MongoDB Aggregate:<br></br>
                            MongoDB Aggregate is a way to perform advanced data operations within MongoDB. It allows to do complex  data calculations, like grouping, sorting,transforming. MongoDB Aggregate helps to analyze data and extract meaningful information from stored data.It helps to process large amounts of data on the client side.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;