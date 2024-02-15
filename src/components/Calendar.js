import React, { useEffect, useState, useContext } from 'react';
import Weeklayout from './weeklayout';
import './calendar.css';
import { DateContext } from '../dateContext/DateContext';

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

    let currentDate = useContext(DateContext);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
  
        const intervalId = setInterval(() => {
            TimeUpdate();
            DayUpdate();
            setCurrentTime(new Date());

        }, 1000);

        return () => clearInterval(intervalId);
    
    },[currentTime])


    function TimeUpdate(){

            setNowTime((prevTime)=>{

                return {
                    ...prevTime,
                    HH:currentTime.getHours()<12?currentTime.getHours():currentTime.getHours()-12,
                    MM:currentTime.getMinutes()>9?currentTime.getMinutes():`0${currentTime.getMinutes()}`,
                    SS:currentTime.getSeconds()>9?currentTime.getSeconds():`0${currentTime.getSeconds()}`,
                    half:currentTime.getHours()<12?'AM':'PM'
                }
                
            })
    }

    function DayUpdate(){
        
        setNowDay((prevDay)=>{
            return {
                ...prevDay,
                DD:currentDate.getDate()>9?currentDate.getDate():`0${currentDate.getDate()}`,                        
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
