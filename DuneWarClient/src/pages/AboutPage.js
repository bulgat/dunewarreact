import { Route, Routes, Link, Outlet } from "react-router-dom"
import { Card, Image, Container } from 'react-bootstrap';

const AboutPage = () => {

    const fetchVersion = () =>{
        console.log("ver")
        fetch('https://localhost:7115/home/getversion')
            .then(response => {
                response.json()
                console.log("0000 response = ", response)
                console.log("0001 response = ", response.json())
            })
    }

    fetchVersion();

    return (
        <>
            <h2>Dune remaster</h2>
            <div className="backgroundImage">
                <Container className="d-flex justify-content-center" style={{ height: window.innerHeight - 54 }}>

                    <ul>
                        <li>Dune </li>
                        <li>Походовая стратегия</li>
                    </ul>

                </Container>
            </div>
            <Outlet />
        </>
    )
}
export { AboutPage }