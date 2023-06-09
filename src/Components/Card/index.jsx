import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function BodyShorthandExample({text}) {
    return <Card body>{text}</Card>;
  }
  


export function BasicExample1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
