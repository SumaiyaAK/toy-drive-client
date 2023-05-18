import Categories from "../Categories/Categories";

const ProductsCategory = () => {
    return (
        <div className="mx-20 my-20 ">
            <h1 className="text-center m-20 text-4xl text-red-500 font-bold">Shop By Category</h1>
            <div
              role='tablist'
              aria-label='tabs'
              className='relative w-max mx-auto h-12 grid grid-cols-3 px-[3xl] rounded-full overflow-hidden shadow-2xl shadow-900/20 transition gap-4 '
            >
                
                <button
                  role='tab'
                  aria-selected='true'
                  aria-controls='panel-1'
                  id='tab-1'
                  tabIndex='0'
                  className="relative block h-10 px-6 tab rounded-full bg-red-900/20 overflow-hidden shadow-2xl "

                >
                    <span className="text-gray-800">Category One</span>

                </button>
                <button
                  role='tab'
                  aria-selected='false'
                  aria-controls='panel-2'
                  id='tab-1'
                  tabIndex='-1'
                  className="relative block h-10 px-6 tab rounded-full bg-red-900/20 overflow-hidden shadow-2xl "

                >
                    <span className="text-gray-800">Category Two</span>

                </button>
                <button
                  role='tab'
                  aria-selected='false'
                  aria-controls='panel-2'
                  id='tab-1'
                  tabIndex='-1'
                  className="relative block h-10 px-6 tab rounded-full bg-red-900/20 overflow-hidden shadow-2xl text-red-500"

                >
                    <span className="text-gray-800">Category Three</span>

                </button>

            </div>
            <Categories></Categories>
        </div>
    );
};

export default ProductsCategory;