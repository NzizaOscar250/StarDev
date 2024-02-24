import { useState } from 'react';

const useDateRange = () => {
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');
  const [duration, setDuration] = useState('');
  const handleStartingDateChange = (e) => {
    const selectedDate = e.target.value;
    if(endingDate && selectedDate > endingDate){
         setEndingDate(selectedDate)
         calculateDuration(endingDate, endingDate);
    }
  else{
    setStartingDate(e.target.value);
    calculateDuration(e.target.value, endingDate);
  }
    
};


const setter= (startDate,endDate,duration)=>{
  setStartingDate(startDate)
  setEndingDate(endDate) 
  setDuration(duration)
}

const handleEndingDateChange = (e) => {
    const selectedDate = e.target.value;
    setEndingDate(selectedDate);
    if(startingDate && selectedDate <= startingDate){
         setEndingDate(startingDate)
         
         calculateDuration(startingDate,startingDate);
    }else{
      calculateDuration(startingDate,selectedDate);
    }
  };


const calculateDuration = (startDate, endDate) => {
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDuration(diffDays + ' days');
    }
};

  return {
    startingDate,
    endingDate,
    duration,
    setter,
    handleStartingDateChange,
    handleEndingDateChange,
  };
};

export default useDateRange;
