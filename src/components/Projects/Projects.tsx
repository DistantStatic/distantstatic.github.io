import {
    Row,
    Col
} from 'reactstrap';

import classes from './Projects.module.css';
import Project from './Project/Project';

export default function Projects({darkMode}: {darkMode: boolean}) {
    const projectList = [
        {
            name: "CongressTrack/TrackUS",
            description: "Track you elected officials in Washington D.C.! Shows information on recent votes and bills, as well as detailed delegate information. Uses a django backend to safely relay the API information",
            link: "https://distantstatic.github.io/congress-track-frontend",
            ghub: "https://github.com/DistantStatic/congress-track-frontend"
        },
        {
            name: "League Scout",
            description: "NextJS app that displays player ranks, match history, and match details. Data aggregated from Riot Game's API. Buit with TypeScript and styled with TailwindCSS",
            link: "https://www.lolscout.com",
            ghub: "https://github.com/DistantStatic/league-scout"

        },
        {
            name: "Tyrian Scout",
            description: "View all daily quests, quest details, and rewards for Guild Wars 2. Data sourced from the Guild Wars2 API",
            link: "https://www.tyrianscout.com",
            ghub: "https://github.com/DistantStatic/tyrianscout"

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
        <>
            <h1 className={classes.ProjectsTitle}>Projects</h1>
            <Row md="3">
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
        </>
    )
}