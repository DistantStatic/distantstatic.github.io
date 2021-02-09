import {
    Row,
    Col
} from 'reactstrap';
import Aux from '../../hoc/Aux';

import classes from './Projects.module.css';
import Project from './Project/Project';

const projects = (props) => {
    const projectList = [
        {
            name: "CongressTrack/TrackUS",
            description: "Track you elected officials in Washington D.C.! Shows information on recent votes and bills, as well as detailed delegate information. Uses a django backend to safely relay the API information",
            link: "https://distantstatic.github.io/congress-track-frontend",
            ghub: "https://github.com/DistantStatic/congress-track-frontend"
        },
        {
            name: "XSAF Dynamic Campaign Scores",
            description: "A site created in conjunction with the XSAF community to display scores against their new \"GOAP\" AI managed Dynamic Campaign.",
            link: "https://distantstatic.github.io/dyn-server-score",
            ghub: "https://github.com/DistantStatic/dyn-server-score"
        },
        {
            name: "Portfolio",
            description: "You're looking at it!",
            link: "#",
            ghub: "https://github.com/DistantStatic/"
        }
    ]
    return (
        <Aux>
        <h1>Projects</h1>
        <Row>
        {projectList.map((project) => {
            return (
                <Col>
                <Project
                    name={project.name}
                    description={project.description}
                    link={project.link}
                    ghub={project.ghub}
                    />
                </Col>
            )
        })}
        </Row>
        </Aux>
    )
}

export default projects;