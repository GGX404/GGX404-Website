// imports are meant to be from the main SRC folder, no subfolders
import Footer from "./footer";
import Nav from "./nav";
const Name = () => {
    return (
        // h-full and h-screen should be played around with. If your page has scrolls at the start, omit h-screen. If it only scrolls when compressed, use {size}:h-screen
        <div className='flex flex-col items-center text-center bg-gradient-to-br h-full lg:h-screen from-gray-950 to-gray-800 text-gray-100'>
            <div className="relative pt-40 items-center flex flex-col">
                <Nav />
                {/* everything goes here */}
            </div>
            <Footer />
        </div>
    )
}
export default Name;