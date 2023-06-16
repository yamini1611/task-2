import React from "react";

const ReactCard = ({trainee}) =>{
     return(
        
        <div>
        
  <div className="card-body">
    
    <h5>Name:{trainee.name}</h5>
    <h5>AGE:{trainee.age}</h5>
    <h5>EMAIL-ID:{trainee.email}</h5>
  </div></div>
     );
}

export default ReactCard;