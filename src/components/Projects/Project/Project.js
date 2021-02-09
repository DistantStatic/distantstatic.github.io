import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    CardLink,
    Button
} from 'reactstrap';
import classes from './Project.module.css';

const project = (props) => (
    <Card>
        <CardHeader>
            <CardTitle>{props.name}</CardTitle>
        </CardHeader>
        <CardBody>
            {
            //<CardImg>{props.img}</CardImg>
            }
            <CardText>{props.description}</CardText>
        </CardBody>
        <CardFooter>
            <CardLink href={props.link}>See Live</CardLink>
            <CardLink href={props.ghub}>See Code</CardLink>
        </CardFooter>
    </Card>
)

export default project;