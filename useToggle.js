import {useState} from 'react';

function useToggle(initialVal = false) {
  //call useState reserve piece of state  
  const [myState, mySetState] = useState(initialVal);
  const toggle = () => {
    mySetState(!myState); 
  };
  return [myState, toggle];
}

export default useToggle;