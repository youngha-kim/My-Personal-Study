// import Chart from 'chart.js'
import {useState} from 'react'
import ResultChart from './ResultChart'

//버튼만들고,
//차트 만들기 

const ChartContainer = () => {

    const [data , setData] = useState([1, 2, 3, 4, 5, 6])
    const rnd = () => Math.floor(Math.random() * 20) + 1;

    const handleData = () => {
        setData([rnd(),rnd(),rnd(),rnd(),rnd(),rnd()])
    }


    return(
        <>
       <button onClick = {handleData}>랜덤 숫자 나오기</button> 
       <ResultChart data = {data} />
       </>
    )

}

export default ChartContainer