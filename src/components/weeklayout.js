import React, { useEffect, useState } from 'react';
import './weeklayout.css';
import DayCard from './DayCard';


function Weeklayout() {
  
const [renderDates, setRenderDates] = useState([]);
  
  function splitArrayIntoChunks(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}

let finalDateArray=[];
let newArrayChunks=[];
let splitDateArray =[];

    useEffect(()=>{

      const dayAsString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDate = new Date().getDate();
      const currentDayVal =new Date().getDay();
      const currentDay =  dayAsString[currentDayVal]
      
      const diffStart = currentDate-1;
      const firstDay = (currentDayVal-diffStart)+7;

     

      for(let j=0;j<36;j++){
        if(j<(diffStart-1)){
          finalDateArray.push("")
        } else if(j>=diffStart && j<31+diffStart){
          finalDateArray.push(j-diffStart+1)
        }
      }

    
      splitDateArray = splitArrayIntoChunks(finalDateArray, 7);
      
      setRenderDates(splitDateArray);

    },[])



    
    // //, "8", "9", "10", "11", "12", "13","14","15"
    // const originalArray = ["1","2", "3", "4", "5", "6", "7","8", "9", "10", "11", "12", "13","14","15",
    //                        "16","17", "18", "19", "20", "21", "22","23", "24", "25", "26", "27", "28","29","30","31"," "," "," "," ",];
    // //const chunkSize = 7;
    // newArrayChunks = splitArrayIntoChunks(originalArray, 7);
    
    // console.log(newArrayChunks);
    // console.log(renderDates);
    
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
