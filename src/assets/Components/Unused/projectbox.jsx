import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ProjectBox = ({ data }) => {
    if (!data){
        return <div>Loading...</div>
    }
    return (
        <div className=" relative overflow-auto bg-blend-color-dodge bg-gradient-to-tl from-gray-900 to-gray-950 rotate-0 hover:rotate-2 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center p-5 rounded-lg shadow-lg text-white size-75">
            <h2 className="absolute inset-x-0 top-0 pt-10 text-4xl text-shadow-lg/70 text-shadow-blue-700 sm:max-sm:grid-cols-1">{data.name || "Project Title"}</h2>
            <p className="pt-0 relative overflow-clip sm:max-sm:grid-cols-1">{data.description || "Description of the project goes here. This is a brief overview of what the project is about."}</p>
            <Link to={`${data.link || ""}`} className="absolute inset-x-0 project-link bg-gradient-to-l to-blue-500 from-green-400 bottom-0 w-[80%] ml-auto mr-auto mb-3 p-2.5 rounded-md hover:text-gray-700 text-white shadow-md/90 shadow-blue-700 sm:max-sm:grid-cols-1" target="_blank">View Project</Link>
            {/* <img src={`/resources/${data.image || ""}`} alt={"Project Image"} className="w-36 rounded-md sm:max-sm:grid-cols-1" /> If you want pictures*/}
        </div>
    );
};

const ProjectList = () => {
    const [data, setData] = useState(null); // State to store fetched data

    async function getData() {
        const url = "/picturedict.json";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            return json;
        } catch (error) {
            console.error(`Error fetching JSON data: ${error}`);
        }
    }

    useEffect(() => {
        (async () => {
            const fetchedData = await getData();
            setData(fetchedData); // Store the fetched data in state
        })();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    if (!data) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }

    // Render a ProjectBox for each key in the JSON object
    return (
        <div className="project-list w-fit flex flex-wrap gap-5 justify-center items-stretch flex-row ml-auto mr-auto">
            {Object.keys(data).map((key) => (
                <ProjectBox key={key} data={data[key]} />
            ))}
        </div>
    );
};

export default ProjectList;