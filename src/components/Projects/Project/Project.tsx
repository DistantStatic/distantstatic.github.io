import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    CardLink,
} from 'reactstrap';

export default function Project({name, description, link, ghub}: {name: string, description: string, link: string, ghub: string}) {
    return (
    <Card>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardBody>
            {
            //<CardImg>{props.img}</CardImg>
            }
            <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
            <CardLink href={link}>See Live</CardLink>
            <CardLink href={ghub}>See Code</CardLink>
        </CardFooter>
    </Card>
)}