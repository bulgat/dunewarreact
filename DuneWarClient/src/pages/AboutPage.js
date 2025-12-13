import { Route, Routes, Link, Outlet } from "react-router-dom"
import { Card, Image, Container } from 'react-bootstrap';
import {  useState } from 'react'

const AboutPage = () => {

    const [version, setVersion] = useState();

    const fetchVersion = () =>{

        fetch('https://localhost:7115/home/getversion')
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

    fetchVersion();

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
        </>
    )
}
export { AboutPage }