import React, { useEffect, useState } from 'react';
import Weeklayout from './weeklayout';
import './calendar.css';

function Calendar() {

    const[nowTime, setNowTime] = useState({
                                            HH:null,
                                            MM:null,
                                            SS:null,
                                            half:null
                                        });


    const [nowDay, setNowDay] = useState({
        DD:null,
        MM:null,
        YYYY:null,
        WKD:null
    })

    useEffect(()=>{
        
        const intervalId = setInterval(() => {
            timeUpdate();
            dayUpdate();

        }, 1000);

        return () => clearInterval(intervalId);
    
    },[])


    function timeUpdate(){

        const currentDate = new Date();
       
            setNowTime((prevTime)=>{

                return {
                    ...prevTime,
                    HH:currentDate.getHours()<12?currentDate.getHours():currentDate.getHours()-12,
                    MM:currentDate.getMinutes()>9?currentDate.getMinutes():`0${currentDate.getMinutes()}`,
                    SS:currentDate.getSeconds()>9?currentDate.getSeconds():`0${currentDate.getSeconds()}`,
                    half:currentDate.getHours()<12?'AM':'PM'
                }
                
            })
    }

    function dayUpdate(){
        
        const currentDate = new Date();
        
        setNowDay((prevDay)=>{
            return {
                ...prevDay,
                DD:currentDate.getDate()>9?currentDate.getDate():`0${currentDate.getDate()}`,            
                // MM:currentDate.getMonth()>10?currentDate.getMonth()+1:`0${currentDate.getMonth()+1}`,            
                MM:currentDate.toLocaleString('en-US', { month: 'long' }),
                YYYY:currentDate.getFullYear()
            }
        })


    }


    return (
      <>
        <div className="top">
          <div className="headerPart">
            {nowDay.MM} {nowDay.YYYY}
          </div>

          <div className="time">
            <p>
              {nowTime.HH > 9
                ? nowTime.HH
                : nowTime.HH === 0
                ? `12`
                : `0${nowTime.HH}`}
              :
            </p>{" "}
            <p>{nowTime.MM}:</p>
            <p>{nowTime.SS}</p>
            &nbsp;
            <p>{nowTime.half}</p>
          </div>
        </div>

        <div>
          <Weeklayout />
        </div>
      </>
    );
}

export default Calendar
