import React, {useState, useMemo} from 'react'


const hardcalculate = (number) => {
    console.log('어려운 계산');
    for (let i = 0 ; i < 999999999; i++){
    } // make delay 
    return number + 10000;
}


const easycalculate = (number) => { 
    console.log('쉬운 계산');
    return number + 1 ;
} 

function EX2(){
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);
    // const hardSum = hardcalculate(hardNumber);

    
    // 
    const hardSum = useMemo(()=>{
        return hardcalculate(hardNumber)
    }, [hardNumber])


    const easySum = easycalculate(easyNumber);


    return (
        <div>
            <h1>어려운 계산기</h1>
            <input
                type = 'number'
                value = {hardNumber}
                onChange  = {(e) => setHardNumber(parseInt(e.target.value))}
                >
            </input>
            <span> + 10000 = {hardSum} </span>
            
            <h3>쉬운 계산기</h3>
            <input
                type = 'number'
                value = {easyNumber}
                onChange  = {(e) => setEasyNumber(parseInt(e.target.value))}
                >
            </input>
            <span> + 1 = {easySum}</span>
        </div>
    )
}

export default EX2;