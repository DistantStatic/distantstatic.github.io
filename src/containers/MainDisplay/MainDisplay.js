import { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import classes from './MainDisplay.module.css';

import Aux from '../../hoc/Aux';
import Projects from '../../components/Projects/Projects';
import PageTitle from '../../components/PageTitle/PageTitle';

export default class MainDisplay extends Component {
    state = {
        darkMode: true
    }

    changeMode = () => {
        this.setState((prevState) => ({darkMode: !prevState.darkMode}))
    }

    render() {
        return (
        <main className={this.state.darkMode ? classes.MainDisplayDark : classes.MainDisplayLight}>
            <PageTitle changeMode={this.changeMode}/>
            <Row>
                <Col><Projects/></Col>
                <Col><div><p>lorem ip sum asdfasdfasdfasdfasdfasdf</p></div></Col>
            </Row>
        </main>
        )
    }
}