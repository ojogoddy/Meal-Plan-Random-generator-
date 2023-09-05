import React from 'react'
import styled from '@emotion/styled'

interface Iprops {
    click: ()=> void
}


const But = styled.button`
    background-color: #1b2b3b90;
    padding: 10px 20px;
    border-radius: 8px;
    outline: none;
    border: 1px solid white;
    font-size: 16px;
    font-weight: 600;
    color: #FFA301 ;
`

const Foodbutton:React.FC<Iprops> = ({click}) => {
  return (
    
            <But onClick={click}>Generate Random Food</But>
   
  )
}

export default Foodbutton