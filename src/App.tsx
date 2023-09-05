import React from 'react'
import styled from "@emotion/styled"
import Foodbutton from './components/Foodbutton'
import { useState } from "react"
import data from "./components/food.json"

const Container=styled.div`
background-color: #1B2B3B;
width: 90%;
margin: 0 auto;
color: #FFA301;
padding: 20px 0;
`
const Meal = styled.div`
display: flex;
justify-content: space-between;
padding: 30px 8%;
gap: 10px;
`
const Header = styled.h1`
text-align: center;
`
const Breakfast = styled.div`
background-color: #1B2B3B;
border: 1px solid white;
width: 100%;
height: 500px;
border-radius: 10px;
`
const Lunch = styled.div`
background-color: #1B2B3B;
border: 1px solid white;
width: 100%;
height: 500px;
border-radius: 10px
`
const Dinner = styled.div`
background-color: #1B2B3B;
border: 1px solid white;
width: 100%;
height: 500px;
border-radius: 10px
`
const ButtHold = styled.div`
text-align: center;
padding: 20px 0;
`
const Word = styled.h2`
  text-align: center;
`
const Meals = styled.div`
padding: 10px;
text-align: center;
p{
  font-size: 18px;
}
`
const Pic = styled.img`
  width: 180px;
  height: 200px;
  border: 0px;
  outline: none;
  border-radius: 8px;
`

const App:React.FC = () => {


  const [breakfast, setBreakfast] = useState<any>({});
  const [lunch, setLunch] = useState<any>({});
  const [dinner, setDinner] = useState<any>({});


  const getRandomFood = (foodData: any) => {
  const keys = Object.keys(foodData);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return foodData[randomKey];
};
  const handleMeal = () => {
    setBreakfast(getRandomFood(data[0].breakfast))
    setLunch(getRandomFood(data[1].lunch))
    setDinner(getRandomFood(data[2].dinner))
  }
  
  return (
    <Container>
      <Header>OJOGODDY MEAL PLAN </Header>
      <Meal>
      
      <Breakfast>
      <Word> Breakfast</Word>
      <Meals>
      <Pic src={breakfast.image} />
      <p>Meal: {breakfast.meal}</p>
      <p>Price: {breakfast.price}</p>
      </Meals>
      </Breakfast>

      <Lunch>
      <Word> Lunch</Word>
      <Meals>
      <Pic src={lunch.image} />
      <p>Meal: {lunch.meal}</p>
      <p>Price: {lunch.price}</p>
      </Meals>
      </Lunch>
      
      <Dinner>
      <Word>Dinner</Word>
      <Meals>
      <Pic src={dinner.image}/>
      <p>Meal: {dinner.meal}</p>
      <p>Price: {dinner.price}</p>
      </Meals>
      </Dinner>
      
      </Meal>

      <ButtHold> <Foodbutton click={handleMeal}/> </ButtHold>
    </Container>
  )
}

export default App