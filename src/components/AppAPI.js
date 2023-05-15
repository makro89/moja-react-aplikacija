import React, {useState, useEffect} from "react";

export default function AppAPI() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(nasData => setData(nasaData))
    }, []);
}
if (!data) { 
    return <div>Loading NASA data</div>
}


const { title, url, explanation, copyright, hdurl } = data;
return (
    <div>
        <h1>NASA picture od day</h1>
        <h3>{title  }</h3>
        <img src={url} alt={title} width={500}></img>
        <p>{explanation}</p>
        <p>{copyright}</p>
        <a href ={hdurl}>Za bolju rezoluciju kliknite ovdje</a>
    </div>
)
