import { useContext } from 'react';
import { ThemeContext } from './themeContext';

export default function ChildContext() {
    // Step 3: Consume the nearest provided context value
    const theme = useContext(ThemeContext);

    return <div className={`box ${theme}`}>The current theme is {theme}</div>;
}