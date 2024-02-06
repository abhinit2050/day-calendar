import React, {Fragment} from 'react';
import './weeklayout.css'

const DayCard = (props)=>{

    return(
        <>
            <div className="dates">
                <h3> {props.dateval}</h3>
            </div>
            
        </>
    )
}

export default DayCard
