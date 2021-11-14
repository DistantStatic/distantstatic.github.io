import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    CardLink,
} from 'reactstrap';

export default function Project(props) {
    return (
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
)}