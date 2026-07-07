import { Route, Routes, Link, Outlet } from "react-router-dom"
import { Card, Image, Container } from 'react-bootstrap';
import { useState, useReducer} from 'react'
import { createContext } from 'react';
import { ThemeContext } from './themeContext';
import ChildContext from './childContext';
import { InfoComponent } from './info.component'

const ContextPage = () => {
    const [theme, setTheme] = useState('-dark kol-');
    const [info, setInfo] = useState(InfoComponent);

    return (
        <>

            <h2>Context </h2>
            <ThemeContext.Provider value={theme}>
                <ChildContext />
            </ThemeContext.Provider>
            {info }
        </>
    )
}
export { ContextPage }