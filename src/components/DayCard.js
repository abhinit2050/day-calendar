import React,{useContext} from 'react';
import './weeklayout.css';
import { DateContext } from '../dateContext/DateContext';


const DayCard = (props)=>{

    let currentDate = useContext(DateContext);
    const todayDate = currentDate.getDate();

    return(
        <>
            <div className={props.dateval==todayDate?"today":"dates"}>
                <h3> {props.dateval}</h3>
            </div>
            
        </>
    )
}

export default DayCard
