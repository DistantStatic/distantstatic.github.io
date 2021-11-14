import { useState } from 'react'
import { Container } from 'reactstrap'
import MainDisplay from './containers/MainDisplay/MainDisplay';
import classes from './App.module.css'

export default function App() {
    const [darkMode, setDarkMode] = useState(true)

    function toggleDarkMode() {
        setDarkMode(!darkMode)
    }

    return (
        <div className={`${classes.app} ${darkMode ? classes.darkMode : classes.lightMode}`}>
            <Container>
                <MainDisplay darkMode={darkMode} changeDarkMode={toggleDarkMode} />
            </Container>
        </div>
    );
}
