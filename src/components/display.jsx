import React from 'react';
import TraineeCard from './Reacttrainees';
const TraineeList = () => {
   
  const trainees = [
    {
      
      name: 'yamini',
      age: 20,
      email: 'yamini@gmail.com',
     
    },
    {
     
      name: 'harita',
      age: 20,
      email: 'harita@gmail.com',
     
    },
    {
     
      name: 'priya dharshan',
      age: 20,
      email: 'dharshan@gmail.com',
    },
    {
      
      name: 'karthikeyan',
      age: 20,
      email: 'karthikeyan@gmail.com',
    }
    
  ];

  return (
    <div style={{border:'solid',marginLeft:400,marginRight:500,backgroundColor:'lightcyan'}}>
        <h1  style={{paddingLeft:35}} className='card-title'>REACT TRAINEES</h1>
      {trainees.map((trainee, index) => (
        <TraineeCard key={index} trainee={trainee} />
      ))}
    </div>
  );
};

export default TraineeList;
