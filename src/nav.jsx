const Nav = () => {
    return (
        <div className='homepage text-gray-600  text-center w-full pb-2.5 sm:max-sm:sticky pt-5'>
            <div className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300 flex justify-center">
                <div className="ml-5 mr-5 w-20"><a href="/contact">Contact</a></div>| 
                <div className="ml-5 mr-5 w-20"><a href="/">Home</a></div>|
                <div className="ml-5 mr-5 w-20"><a href="/music">Music</a></div>
                </div>
        </div>
    )
}
export default Nav;