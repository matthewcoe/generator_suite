export const d6 = (quantity) => {
    let total = 0;
    const rolls = [];
    let roll = 0;

    for (let i = 0; i < quantity; i++)
        roll = Math.ceil(Math.random() * 6)
        total = total + roll;
        rolls.push(roll)
    
    return(
        total, rolls
    );
};