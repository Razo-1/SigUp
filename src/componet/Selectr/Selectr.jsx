import { useState } from "react";
import style from './Selectr.module.css'

function Selectr({ monthsData,year,gender,defult,onSelect,hasError}) {
    
    let [myDay,setMyDay] = useState(defult)
    let [allData,setAllData] = useState({
        month : '',
        day : '',
        year : ''
    })
    let count = (value) => {
        let data = monthsData.find(el => el.month === value)
        
        let arr = []
        for(let i = data.days; i > 0;i--){
            arr.push(i)
        }
        setMyDay(arr)
    }

   
    let check = (data) => {
        for (const key in data) {
            
            if(!data[key]){
                return false
            }
        }
        
        if(Number(data.year) > 2008){
            return false
        }
        return true
    }

     let days = (e) => {
        let {name,value} = e.target
        if(name === 'month') count(value)
        let updata = {...allData,[name] : value}
        setAllData(updata)
        onSelect(check(updata))
    }


    return (
        <div className={style.container}>
            <select className={`${style.defulte} ${hasError ? style.error : ""}`} name="month" onChange={days}>
                <option value="" selected disabled hidden>Month</option>
                {monthsData.map((el, ind) => (
                    <option key={ind}>{el.month}</option>
                ))}
            </select>
            <select className={`${style.defulte} ${hasError ? style.error : ""}`}  name="day" onChange={days}>
                <option value="" selected disabled hidden>Day</option>
                {myDay.map((el, ind) => (
                    <option key={ind}>{el}</option>
                ))}
            </select>
            <select className={`${style.defulte} ${hasError ? style.error : ""}`}  name="year" onChange={days}>
                <option value="" selected disabled hidden>Year</option>
                {year.map((el, ind) => (
                    <option key={ind}>{el}</option>
                ))}
            </select>
        </div>
    );
}

export { Selectr }
