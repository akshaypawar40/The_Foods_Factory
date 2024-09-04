import React, { useState,Suspense,lazy } from 'react'
const Bsd= lazy(()=>import('./Asd'));
const Abc = () => {
    const [count,setCount]= useState(0)
  return (
    <>
    <div className='flex flex-center flex-col h-screen justify-center items-center'>
    <div>Abc Component</div>
    
          <Suspense fallback={"...Loading"}>
          <Bsd state={count} />
          </Suspense>
          <button onClick={()=>setCount(count+1)} className="bg-green-500 font-bold py-2 text-white px-3 rounded-lg lg:w-[18vw] w-full my-5">
            Add
          </button>
    </div>
    </>
  )
}

export default Abc;