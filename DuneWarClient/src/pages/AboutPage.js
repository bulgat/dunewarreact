import { Route, Routes, Link, Outlet } from "react-router-dom"
import { Card, Image, Container } from 'react-bootstrap';
import { useState } from 'react'
import { HOST_SERVER } from '../environment'
import { HomeService } from '../services/home.service'
import './AboutPage.css'
import { TextHTMLComponent } from '../components/textHTML.component'

const AboutPage = () => {

    const [version, setVersion] = useState();
    const [status, setStatus] = useState();
    const _homeService = HomeService();

    const fetchVersion = () =>{


        _homeService.fetchVersion()
            .then(data => {
                setVersion(data);
            })
  
    }

    const fetchStatus = () => {

        _homeService.fetchStatus()
            .then((resp) => {
                const allPersons = resp.data;
                console.log("====", allPersons)
                setStatus(allPersons);
            });
            //.then(data => {
            //    console.log('Success:', data); // Handle the resulting data
            //    setStatus(data);
            //});

    }
    fetchVersion();
    fetchStatus();

    return (
        <>
            <div className='dynamic-head'>
            <h2>Dune remaster </h2>
        </div>

            <br></br>
            
            <div className="backgroundImage">
 
                    <ul>
                        <li>Dune </li>
                        <li>Походовая стратегия</li>
                    </ul>

            </div>
            <br></br>
            <TextHTMLComponent version={version} />
            <textarea id="comments" name="comments" rows="4" cols="50">{ version }</textarea>
            <Outlet />
            
            <br></br>
            <h6>status project: {status}</h6>
            <br></br>
        </>
    )
}
export { AboutPage }