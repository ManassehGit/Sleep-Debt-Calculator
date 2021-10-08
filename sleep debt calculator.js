//using function expression
const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'monday'){
    return 6;
  }else if (day === 'tuesday'){
    return 6;
  }else if (day === 'wednesday'){
    return 6;
  }else if (day === 'thursday'){
    return 7;
  }else if (day === 'friday'){
    return 7;
  }else if (day === 'saturday'){
    return 8;
  }else if (day === 'sunday'){
    return 6;
  }else{
    return 'Kindly enter the right day';
  }
};
//testing the function
//console.log(getSleepHours('friday'));

//getActualSleepHours function using an implicit return
const getActualSleepHours = () => 6+6+7+6+7+8+7;
//Replacing with number above for calculating total
/*getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');*/

const getIdealSleepHours = hours => {
  let idealHours = hours;
  return idealHours * 7;
}

//console.log(getActualSleepHours() + " and " + getIdealSleepHours());

//Calculation of sleep debt 
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(7);
  //Storing the difference in the sleep hours
  let sleepHoursDiff = idealSleepHours - actualSleepHours;

  if(actualSleepHours === idealSleepHours){
    console.log(`User got the right amount of sleep, ${sleepHoursDiff} hrs is fine`);
  }
  if(actualSleepHours > idealSleepHours){
    console.log(`User got more sleep than needed, with excess ${sleepHoursDiff} hrs`);
  }
  if(actualSleepHours < idealSleepHours){
    console.log(`User should get some rest, at least ${sleepHoursDiff} hrs more`);
  }
}

//checking the calculateSleep function
calculateSleepDebt();