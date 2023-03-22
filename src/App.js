//import logo from './logo.svg';
import './App.css';
import {Button,Form} from 'react-bootstrap';
import { TestButton } from './Components/Button';
import './Components/Button/style.css'
import {BasicExample} from './Components/Form'
import {BodyShorthandExample,BasicExample1} from './Components/Card'

function App() {
  return (
    <div className="App">
      react demo class
      <Button>Test Button</Button>
      <TestButton>Buttonname={"login"}</TestButton>
      <TestButton>Buttonname={"Signup"}</TestButton>
      <BasicExample></BasicExample>
      <BodyShorthandExample text={"Welcome to this website"}/>
      <BasicExample1></BasicExample1>
    </div>
  );
}

export default App;
