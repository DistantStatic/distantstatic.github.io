import { Component } from 'react';

import classes from './MainDisplay.module.css';

import Aux from '../../hoc/Aux';
import Projects from '../../components/Projects/Projects';
import PageTitle from '../../components/PageTitle/PageTitle';
import Utility from '../../components/Utility/Utility';

export default class MainDisplay extends Component {
    state = {
        darkMode: true
    }

    changeMode = () => {
        this.setState((prevState) => ({darkMode: !prevState.darkMode}))
    }

    render() {
        return (
        <main id="main" className={this.state.darkMode ? classes.MainDisplayDark : classes.MainDisplayLight}>
            <PageTitle changeMode={this.changeMode}/>
            <Projects />
            <Utility />
        </main>
        )
    }
}