import React from 'react'

const map = () => {
    const fruits = ["apple", "mango", "banana", "lamda"];
  return (
    <div>
        <ul>

            {
                fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}{index}</li>
                ))
            }
        {/* <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
        <li>{fruits[3]}</li> */}
        </ul>
    </div>
  )
}

export default map