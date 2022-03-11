import React from 'react'
import MadeGoal from './MadeGoal';
import MissedGoal from './MissedGoal';

function Goal(props) {
const isGoal = props.render;
console.log(isGoal);   
  return (
    <div>
        {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </div>
  )
}

export default Goal