import Projects from '../../components/Projects/Projects';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function MainDisplay({darkMode, changeDarkMode}: {darkMode: boolean, changeDarkMode: ()=>void}) {

    return (
    <main id="main">
        <PageTitle changeMode={changeDarkMode}/>
        <Projects darkMode={darkMode} />
    </main>
    )
}