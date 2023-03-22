import { Button } from "react-bootstrap";

export const TestButton = ({Buttonname}) => {
    return(
        <div className='TestButton'>
            <Button className="TestButton" variant="primary">{Buttonname}</Button>{' '}
        </div>
    );
}
export const PrimaryButton = () => {
    return (
        <div className='PrimaryButton'>
            <Button variant="primary"></Button>{' '}
        </div>
    );

}