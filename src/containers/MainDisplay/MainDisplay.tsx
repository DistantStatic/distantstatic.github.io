import Projects from '../../components/Projects/Projects';
import PageTitle from '../../components/PageTitle/PageTitle';
import classes from './MainDisplay.module.css';

export default function MainDisplay({darkMode, changeDarkMode}: {darkMode: boolean, changeDarkMode: ()=>void}) {

    return (
    <main id="main" className={classes.MainDisplay}>
        <PageTitle changeMode={changeDarkMode}/>
        <Projects darkMode={darkMode} />
    </main>
    )
}