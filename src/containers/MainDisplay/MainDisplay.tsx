import Projects from '../../components/Projects/Projects';
import PageTitle from '../../components/PageTitle/PageTitle';
import classes from './MainDisplay.module.css';

export default function MainDisplay() {

    return (
    <main id="main" className={classes.MainDisplay}>
        <PageTitle />
        <Projects />
    </main>
    )
}