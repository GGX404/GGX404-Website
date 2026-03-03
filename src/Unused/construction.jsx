const ConstructionHomePage = () => {
    return (
        <div className='homepage text-gray-100 bg-gradient-to-b from-gray-900 to-gray-800 absolute h-[92.5%] text-center w-full content-center'>
            <div className="title inline-block flex content-center pb-10">
              <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300 text-shadow-lg">Welcome to Chase's Website</h1>
              <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300 text-shadow-lg">This website is currently under construction. Email <a className='text-blue-200' target='_blank' href='mailto:crawchase71@gmail.com'>me</a> for updates</h2>
            </div>
            <div className="group bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs ml-auto mr-auto p-2.5 block" ><a target="_blank" href="https://github.com/GGX404"><h3 className='text-blue-300 text-2xl'>Github</h3><p className='text-gray-500 group-hover:text-gray-300'>My personal Github</p></a></div>
            <div className="group text-m bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs self-center ml-auto mr-auto p-2.5 block border-t-0" ><a target='_blank' href="https://github.com/GGX404/GGX404-Website" ><h3 className='text-2xl text-green-300'>Source Code</h3><p className='text-gray-500 group-hover:text-gray-300'>Source code for this website.</p></a></div>
            <footer className='homepage md:absolute md:bottom-0 text-gray-600 bottom-0 text-center w-full pb-2.5 sm:max-sm:sticky'><a className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300' target='_blank' href='https://henryvaniersel.ca/'>Henry's Website</a> | <a className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300' target='_blank' href='https://wikinose.github.io'>Wikinose's Website</a></footer>
          </div>
    )
}
export default ConstructionHomePage;