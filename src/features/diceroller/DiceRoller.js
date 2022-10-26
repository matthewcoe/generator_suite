import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { d6 } from '../../utils/dice';

const DiceRoller = () => {
    let [total, setRoll] = useState(0);
    let [quantity, setQuantity] = useState(0);

    useEffect(() => {
        console.log('Quantity is: ', quantity, 'Roll is now: ', total);
    }, [total], [quantity]);

    useEffect(() => {
        console.log('Quantity is now: ', quantity);
    }, [quantity]);

    const handleQuantity1 = () => {
        setQuantity(quantity = 1)
    };

    const handleQuantity2 = () => {
        setQuantity(quantity = 2)
    };

    const handleQuantity3 = () => {
        setQuantity(quantity = 3)
    };

    const handleClickD6 = () => {
        setRoll(total = d6(quantity));
    };

    return(
        <>
            <h4>Die Quantity:</h4>
            <ButtonGroup>
                <Button onClick={handleQuantity1}>1</Button>
                <Button onClick={handleQuantity2}>2</Button>
                <Button onClick={handleQuantity3}>3</Button>
            </ButtonGroup>
            <br/>
            <br/>
            <Button onClick={handleClickD6} color='success'>
                Roll D6!
            </Button>
            <h2>Roll: {total}</h2>
        </>
    )
};

export default DiceRoller;