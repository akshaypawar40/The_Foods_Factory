import React,{useMemo} from 'react'
import FoodData from '../data/FoodData';

function getlen (arr){
    console.log("I am recalculating")
    let count=0;
    for(let i=0; i<arr.length;i++)
        count ++ 
        return count;
}

const Asd = ({state}) => {
    const totalent= useMemo(()=>getlen(FoodData),[]) ;
  return (
    <>
    <hr/>
    <div>Asd Component</div>
    <p>Count is {state}</p>
    <p>Its Length is {totalent}</p>
    </>
  )
}

export default Asd;