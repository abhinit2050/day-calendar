import React, {Fragment} from 'react';
import './weeklayout.css'

const DayCard = (props)=>{

    const todayDate = new Date().getDate();

    return(
        <>
            <div className={props.dateval==todayDate?"today":"dates"}>
                <h3> {props.dateval}</h3>
            </div>
            
        </>
    )
}

export default DayCard
