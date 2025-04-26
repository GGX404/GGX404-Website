import React, { useState, useEffect } from "react";

const ProjectBox = ({ data }) => {
    if (!data){
        return <div>Loading...</div>
    }
    return (
        <div className="project-box">
            <h2>{data.name || "Project Title"}</h2>
            <p>{data.description || "Description of the project goes here. This is a brief overview of what the project is about."}</p>
            <a href={`/src/assets/Webpages/${data.link || ""}`} className="project-link">View Project</a>
            <img src={`../../../public/wresources/${data.image || ""}`} alt={"Project Image"} className="project-image" />
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
        <div className="project-list">
            {Object.keys(data).map((key) => (
                <ProjectBox key={key} data={data[key]} />
            ))}
        </div>
    );
};

export default ProjectList;