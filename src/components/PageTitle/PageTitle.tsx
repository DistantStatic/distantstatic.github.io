import { useContext } from 'react'
import classes from './PageTitle.module.css';
import { ThemeContext } from '../../context-providers/theme'
import { BsFillBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs'
export default function PageTitle() {
    const [darkMode, toggleDarkMode] = useContext(ThemeContext)

    return (
        <div className={classes.title}>
            <h1>Hello Friend</h1>
            <div className={classes.iconDiv} onClick={() => toggleDarkMode()}>
            { darkMode ?
                <BsFillMoonFill className={classes.Icon}/>
                :
                <BsFillBrightnessHighFill className={classes.Icon}/>
            }
            </div>
        </div>
    )
}