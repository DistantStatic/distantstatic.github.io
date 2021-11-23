import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import MainDisplay from './containers/MainDisplay/MainDisplay'
import classes from './App.module.css'
import { ThemeContext } from './context-providers/theme'

export default function App() {
    const [ darkMode ] = useContext(ThemeContext)

    return (
        <div className={`${classes.app} ${darkMode ? classes.darkMode : classes.lightMode}`}>
            <Container>
                <MainDisplay/>
            </Container>
        </div>
    )
}
