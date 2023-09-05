import React from 'react'
import styled from '@emotion/styled'

interface Iprops{
    label: string
    food: string
}

const Display = styled.div``
const H2 = styled.h2``
const Para = styled.p``

const MealDisplay:React.FC<Iprops> = ({ label, food}) => {
  return (
    <Display>
        <H2>{label}</H2>
        <Para>{food}</Para>
    </Display>
  )
}

export default MealDisplay