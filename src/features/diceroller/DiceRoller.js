import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { d6 } from '../../utils/dice';

const DiceRoller = () => {
    let [total, setRoll] = useState(0);

    useEffect(() => {
        console.log('Roll is now: ', total);
    }, [total]);

    const handleClickD6 = () => {
        setRoll(total = d6(1));
    };

    return(
        <>
            <Button onClick={handleClickD6} color='success'>
                Roll D6!
            </Button>
            <h1>Roll: {total}</h1>
        </>
    )
};

export default DiceRoller;