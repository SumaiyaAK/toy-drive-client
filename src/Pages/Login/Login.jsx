import { useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from "../../firebase/firebase.config";



const auth = getAuth(app)
const Login = () => {
    
    const {signIn} = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();

    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleAuthProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Please Login!</h1>
                    <div className="card w-96 glass">

                        <div className="card-body">
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
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
                                        <input className="btn btn-outline btn-error" type='submit' value='Login'></input>
                                    </div>
                                    <div className="form-control mt-6">
                                        {/* <button className="btn btn-outline btn-error">Login</button> */}
                                        <input onClick={handleGoogleSignIn} className="btn btn-outline btn-error" type='submit' value='Google Login'></input>
                                    </div>
                                </form>
                                <p>If you do not have an account <br></br><Link className='text-red-400 font-bold'to='/register'>Register</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;