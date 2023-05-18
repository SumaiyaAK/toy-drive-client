

const NavBar = () => {
    const navItems = <>
        <li><a className="text-red-500">Home</a></li>
        <li><a className="text-red-500">All Toys</a></li>
        <li><a className="text-red-500">Blogs</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-stone-800 px-12 py-4">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost normal-case text-xl text-red-500">ToyDrive</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-outline btn-error">Login</button>
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