const AboutMe = () => {
  return (
    <div className=" h-[92vh] text-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300 text-shadow-lg ">
        About Me
      </h1>
      <div className="inline">
        <img
          src="https://avatars.githubusercontent.com/u/68763614?v=4"
          alt="Chase's Avatar"
          className="rounded-full w-48 h-48 mb-4 inline-block"
        />
        <p className="inline pl-4 text-3xl">&larr; Cool little logo</p>
        <p className="text-lg mt-4 text-center pl-10 pr-10 flex justify-center items-center">
          Hi, I'm Chase! That's basically it. I use MacOS and VSCode (no henry I
          will not use neovim). I am similar to a full stack developer but the
          main difference is that I have no idea what I am doing. <br />I am
          currently learning React and Node.js to create my website and other
          projects (no frameworks because I want to learn the hard way). I also
          have some other projects using Python.
        </p>
        <h2 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300 text-shadow-lg p-4">
          Skills
        </h2>
        <div className="text-6xl mt-4 text-center pl-10 pr-10 flex justify-center items-center flex-row gap-10 flex-wrap">
          <i className="devicon-apple-original text-6xl"></i>
          <i class="devicon-python-plain colored"></i>
          <i class="devicon-nodejs-plain-wordmark"></i>
          <i class="devicon-npm-original-wordmark colored"></i>
          <i class="devicon-html5-plain"></i>
          <i class="devicon-css3-plain colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-react-original colored text-6xl"></i>{" "}
          <i class="devicon-tailwindcss-original colored"></i>
          <i class="devicon-googlecloud-plain colored"></i>
          <i class="devicon-git-plain colored"></i>
          <i class="devicon-github-original"></i>
          <i class="devicon-vscode-plain colored"></i>
          <i class="devicon-linux-plain"></i>
          <i class="devicon-firebase-plain colored"></i>
        </div>
        
      </div>
    </div>
  );
};
export default AboutMe;
