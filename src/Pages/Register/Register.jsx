import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
    }


    
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Please Register!</h1>
                <div className="card w-96 glass">

                    <div className="card-body">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                
                                <div className="form-control mt-6">
                                    {/* <button className="btn btn-outline btn-error">Login</button> */}
                                    <input className="btn btn-outline btn-error" type='submit' value='Register'></input>
                                </div>
                            </form>
                            <p>If you have an account <br></br><Link className='text-red-400 font-bold'to='/login'>Login</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;