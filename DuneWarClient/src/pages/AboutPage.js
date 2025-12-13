import { Route, Routes, Link, Outlet } from "react-router-dom"
import { Card, Image, Container } from 'react-bootstrap';
import { useState } from 'react'
import { HOST_SERVER } from '../environment'

const AboutPage = () => {

    const [version, setVersion] = useState();
    const [status, setStatus] = useState();

    const fetchVersion = () =>{

        fetch(HOST_SERVER+'/home/getversion')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                setVersion(data);
            })
            .catch(err => {
                console.error('Error fetching data');
            });
    }

    const fetchStatus = () => {
        fetch(HOST_SERVER+'/home/getstatus', {
            method: 'POST', // Specify the method
            headers: {
                'Content-Type': 'application/json', // Inform the server about the data type
            }
        }).then(response => response.text()) // Parse the JSON response
        .then(data => {
            console.log('Success:', data); // Handle the resulting data
            setStatus(data);
        })
        .catch(error => {
            console.error('Error:', error); // Handle errors
        });
    }
    fetchVersion();
    fetchStatus();

    return (
        <>
            <h2>Dune remaster </h2>
            <br></br>
            
            <div className="backgroundImage">
                <Container className="d-flex justify-content-center" style={{ height: window.innerHeight - 54 }}>

                    <ul>
                        <li>Dune </li>
                        <li>Походовая стратегия</li>
                    </ul>

                </Container>
            </div>
            <Outlet />
            <h5>version: {version}</h5>
            <br></br>
            <h6>status project { status }</h6>
        </>
    )
}
export { AboutPage }