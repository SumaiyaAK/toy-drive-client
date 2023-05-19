

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center mt-10 font-bold text-red-500 text-4xl">Quextions and Answers</h2>
            <div className="mb-12 mt-8">
                <div className="card w-full bg-base-100 shadow-xl image-full mb-12 mt-8">

                    <div className="card-body">
                        <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>    Access Token and Refresh Token:<br></br>

                            Access Token: An access token is like a special pass that proves you are allowed to access certain things. It is given to you when you successfully log in or authenticate yourself. Whenever you want to access something protected, you show this token to prove you have permission.<br></br>
                            Refresh Token: A refresh token is like a long-lasting pass that allows you to get a new access token without logging in again. Its useful when your access token expires, so you dont have to go through the whole login process again.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full mb-12 mt-8">

                    <div className="card-body">
                        <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                        <p>    SQL vs. NoSQL Databases:<br></br>

                            SQL Databases: SQL databases are like organized tables with predefined structures. They are good for structured data and have strict rules to ensure data consistency. You can use SQL queries to ask specific questions and get precise answers.<br></br>
                            NoSQL Databases: NoSQL databases are like flexible containers that can hold lots of different things. They work well with unstructured or semi-structured data and allow for easy scaling. They dont have strict rules and can adapt to changing data needs.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full mb-12 mt-8">

                    <div className="card-body">
                        <h2 className="card-title">What is express js? What is Nest JS?</h2>
                        <p>    Express.js and Nest.js:<br></br>

                            Express.js: Express.js is a simple and flexible framework for building web applications. It helps you create routes for handling web requests and responses. Its popular because its easy to use and has a big collection of tools and plugins to choose from.<br></br>

                            Nest.js: Nest.js is a framework for building powerful and scalable server applications. It is based on Express.js and provides additional features and patterns inspired by Angular. It is great for building complex applications and encourages the use of TypeScript for better code organization and maintainability.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full mb-12 mt-8">

                    <div className="card-body">
                        <h2 className="card-title">What is MongoDB aggregate and how does it work? </h2>
                        <p>MongoDB Aggregate:<br></br>
                            MongoDB Aggregate is a way to perform advanced data operations within MongoDB. It lets you do more complex calculations and manipulations on your data, like grouping, sorting, and transforming it. You can think of it as a set of tools to analyze and extract meaningful information from your data stored in MongoDB. It helps you process large amounts of data efficiently without needing to do everything on the client side.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;