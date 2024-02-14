export function MonthArrayMaker(maxDays){

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


    const dayAsString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date().getDate();
    const currentDayVal =new Date().getDay();
    const currentDay =  dayAsString[currentDayVal]

    const diffStart = currentDate-1;
    const firstDay = (currentDayVal-diffStart);
    const firstDayString = (7+(firstDay%7));

    for(let p=0;p<(maxDays+firstDayString);p++){   //29 is maximum number of days in a a month
    
    if(p<firstDayString){
        finalDateArray.push("")
    } else {
        finalDateArray.push(p-firstDayString+1)
    }
    }


    splitDateArray = splitArrayIntoChunks(finalDateArray, 7);

    return splitDateArray
}

