import { useState } from 'react'

import classes from './MainDisplay.module.css';

import Projects from '../../components/Projects/Projects';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function MainDisplay() {
    const [darkMode, setDarkMode] = useState(true)

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    return (
    <main id="main" className={darkMode ? classes.MainDisplayDark : classes.MainDisplayLight}>
        <PageTitle changeMode={changeMode}/>
        <Projects />
    </main>
    )
}