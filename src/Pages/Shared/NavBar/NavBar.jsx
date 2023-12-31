import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const NavBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        
        logOut()
        .then(() => {} )
        .catch( error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'><a className="text-red-500">Home</a></Link></li>
        <li><Link to='alltoys'><a className="text-red-500">All Toys</a></Link></li>
        <li><Link to='blog'><a className="text-red-500">Blogs</a></Link></li>
        { user?.email? <>
            <li><Link to='/MyToy'><a className="text-red-500">My Toy</a></Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </>  :<li><Link to='/login'><a className="text-red-500">Login</a></Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-stone-200 px-12 py-4">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost normal-case text-xl text-red-600">ToyDrive</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to='login'><button className="btn btn-outline btn-error">Login</button></Link>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;