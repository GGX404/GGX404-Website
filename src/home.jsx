import Footer from "./footer";
import Nav from "./nav";
const Home = () => {
    return (
        <div className='flex flex-col items-center text-center bg-gradient-to-br h-full lg:h-screen from-gray-950 to-gray-800 text-gray-100'>
            <div className="relative pt-20 items-center flex flex-col">
                <Nav />
                <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300 text-shadow-lg">Welcome to Chase's Website!</h1>
                <div className="introduction mt-20 w-[80%] text-2xl text-align-top">
                    <p className="text-3xl pb-10">Hello! My name is Chase and I love to make both hardware and software projects in my free time.</p>
                    <p>Shameless Plugs:</p>
                    <div className="flex flex-col align-center pl-auto pr-auto">
                        <div className="group bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs ml-auto mr-auto p-2.5 block" ><a target="_blank" href="https://github.com/GGX404"><h3 className='text-blue-300 text-2xl'>Github</h3><p className='text-gray-500 group-hover:text-gray-300'>My personal Github</p></a></div>
                        <div className="group text-m bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs self-center ml-auto mr-auto p-2.5 block border-t-0" ><a target='_blank' href="https://github.com/GGX404/GGX404-Website" ><h3 className='text-2xl text-green-300'>Source Code</h3><p className='text-gray-500 group-hover:text-gray-300'>*May be outdated.</p></a></div>
                        <div className="group text-m bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs self-center ml-auto mr-auto p-2.5 block border-t-0" ><a target='_parent' href="/contact" ><h3 className='text-2xl text-green-400'>Contact</h3></a></div>                    
                        <div className="group text-m bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs self-center ml-auto mr-auto p-2.5 block border-t-0" ><a target='_blank' href="https://discord.com/users/869954912740581408" ><h3 className='text-2xl text-blue-400'>Discord</h3></a></div>
                        <div className="group text-m bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs self-center ml-auto mr-auto p-2.5 block border-t-0" ><a target='_parent' href="https://music.apple.com/profile/ggx404" ><h3 className='text-2xl text-pink-400'>Apple Music</h3></a></div>                   
                    </div>
                </div>
            </div>
            <div className="lg:absolute left-0 bottom-0 mb-5 ml-5 mt-5 bg-gradient-to-br from-blue-400 to-green-300 p-[3px] rounded-xl"><a href="https://www.last.fm/user/GGX404"><img src="https://lastfm-recently-played.vercel.app/api?user=GGX404" className="w-350px"/></a></div>
            <Footer />
        </div>
    )
}
export default Home;