import React from 'react'

const Div = ({name,age}) => {
  return (
    <>
    <div className='text-primary'>hello world form my first component</div>
    <div>my name is {name}</div>
    <div>my age is {age}</div>
    </>
  )
}

export default Div