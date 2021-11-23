import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { ThemeContext } from '../../../context-providers/theme'

export default function Project({name, description, link, ghub}: { name: string, description: string, link: string, ghub: string}) {
    const [ darkMode ] = useContext(ThemeContext)
    return (
    <Card
        bg={`${darkMode ? 'dark' : 'light'}`} 
        style={{ marginTop: '2rem', marginBottom: '2rem'}} 
        border={`${darkMode ? 'light' : 'dark'}`}
        >
        <Card.Header>
            <Card.Title>{name}</Card.Title>
        </Card.Header>
        <Card.Body>
            {
            //<CardImg>{props.img}</CardImg>
            }
            <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Card.Link href={link}>See Live</Card.Link>
            <Card.Link href={ghub}>See Code</Card.Link>
        </Card.Footer>
    </Card>
)}