import React, { useContext, useEffect, useState } from 'react';
import './weeklayout.css';
import DayCard from './DayCard';
import { MonthArrayMaker } from './MonthRenderer';
import { DateContext } from '../dateContext/DateContext';

function Weeklayout() {
  
const [renderDates, setRenderDates] = useState([]);
let maxDays;
let currentDate = useContext(DateContext);

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
    useEffect(()=>{
      
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      if([0, 2, 4, 6, 7, 9, 11].includes(currentMonth)){
          maxDays = 31
      } else if([3, 5, 8, 10].includes(currentMonth)){
        maxDays = 30
    } else {
      let isLeap = isLeapYear(currentYear);
      if(isLeap){
        maxDays = 29;
      } else {
        maxDays = 28;
      }
      
    }

      const finalArrayResult = MonthArrayMaker(maxDays, currentDate);
      
      setRenderDates(finalArrayResult);

    },[])
    


    return (
      <div className="cal-body">
        <div className="weekHeader">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

         { 
         renderDates.map((ele, outerIndex) => {
          <br />

          return (
            <div className="weekRows" key={outerIndex}>
              {ele.map((ele2, innerIndex) => {
                return <DayCard dateval={ele2} />;
              })}
            </div>
          );
        })
        }
      </div>
    );
}

export default Weeklayout
