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
    let splitDateArray =[];

    const currentDate = new Date().getDate();
    const currentDayVal =new Date().getDay();
    const diffStart = currentDate-1;
    const firstDay = (currentDayVal-diffStart);
    const firstDayString = (7+(firstDay%7));

    for(let p=0;p<(maxDays+firstDayString);p++){  
    
    if(p<firstDayString){
        finalDateArray.push("")
    } else {
        finalDateArray.push(p-firstDayString+1)
    }
    }


    splitDateArray = splitArrayIntoChunks(finalDateArray, 7);

    return splitDateArray
}

