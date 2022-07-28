import { useEffect, useState, useMemo } from "react";
import React from "react";

const memoEX3 = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국',
        }
    },[isKorea])
    
    // {
    //     county: isKorea ? '한국' : '외국',
    // }

    useEffect(() => {
        console.log('useEffect 호출');
    },[location]);
    // 이 때 location 은 객체형태이므로, EX3가 리 랜더링 될 때마다,
    // location은 계속다른 메모리상의 주소에 할당됨. 따라서 number가 갱신
    // 될 때, usEffect 가 호출됨. 


    return(
        <div>
            <h2>하루에 먹는 끼니 수</h2>
            <input
                type = "number"
                value={number}
                onChange={(e)=> setNumber(e.target.value)}
            >
            </input>
            <hr/>
            <h2>현재 거주 국가 </h2>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
            
        </div>
    )
}


export default memoEX3