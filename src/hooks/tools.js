const tools = {
    calculateTime:function(startDate,endDate){
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return {
                startDate,
                endDate,
                duration:diffDays
            };
        }
        return false
    },
     calcDays:function(startDate,endDate){
        if(endDate && startDate > endDate){
            return this.calculateTime(endDate,endDate);
       }
       else if(endDate && startDate <  endDate){
           return this.calculateTime(startDate,endDate);
       }
       else{
          return this.calculateTime(startDate,startDate);
       }
      
    },
    
}


export default tools