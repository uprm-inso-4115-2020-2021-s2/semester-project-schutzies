import React, { useState, useEffect } from 'react';
import './ByIngredient.css'
import { Search, Plus, Dash } from 'react-bootstrap-icons';
import { Card, Form, InputGroup, Col } from 'react-bootstrap'
import RecipePreview from '../../../components/RecipePreview/RecipePreview'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import Ingredient from '../../../models/Ingredient'
// import { ingredients, selectedIngredients } from '../../../util/globalData/ingredients'

// `localhost:8080/recipes?ids=603418bec9695c013853a67b,603424dd519bf90063346e76,603424e9519bf90063346e77,603424f5519bf90063346e78,60342674519bf90063346e79`
const ByIngredient = () => {
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])

  useEffect(() => {
    axios.get(`/ingredients`)
      .then((data: any) => {
        console.log('ingredients', data['data'])
        setIngredients(data['data'])
      })
  }, [])

  /** Pushes the given ingredient (selected by the user) into the selected ingredients array */
  const handleIngredient = (ingredient: Ingredient) => {
    // setSelectedIngredients(
    //   [...selectedIngredients]
    // )
  }

  const handleSearchRecipes = () => {
    console.log(ingredients)
  }


  return (
    <div className='byIngredient'>
      <h2>BY INGREDIENT</h2>
      <hr style={{ marginTop: '-6px' }} />

      <Form.Row>
        <Form.Group as={Col}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Search width='20' height='20' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Search Ingredient"
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <div className='byIngredient__buttons d-flex pt-4 pb-4'>
        {ingredients.map((ingredient: Ingredient, i: number) =>
          <Button
            key={i}
            className='byIngredient__chipButton d-flex align-items-center mr-3 mb-3'
            onClick={() => handleIngredient(ingredient)}
          >
            <Plus width='30' height='30' />
            <span>{ingredient['name']}</span>
          </Button>
        )}
      </div>

      <Card className='byIngredient__selectedIngredients p-3'>
        <div className='byIngredient__selectedButtons'>
          <Button variant='secondary' className='byIngredient__chipButton d-flex align-items-center mr-5 mb-3' style={{ justifyItems: 'end' }}>
            <Dash width='30' height='30' />
            <span>SELECTED</span>
          </Button>
          <Button variant='secondary' className='byIngredient__chipButton d-flex align-items-center mr-5 mb-3'>
            <Dash width='30' height='30' />
            <span>SELECTED</span>
          </Button>
          <Button variant='secondary' className='byIngredient__chipButton d-flex align-items-center mr-5 mb-3'>
            <Dash width='30' height='30' />
            <span>SELECTED</span>
          </Button>
          <Button variant='secondary' className='byIngredient__chipButton d-flex align-items-center mr-5 mb-3'>
            <Dash width='30' height='30' />
            <span>SELECTED</span>
          </Button>
        </div>

        <Button
          variant='secondary'
          className='byIngredient__searchRecipes'
          onClick={() => handleSearchRecipes()}
        >
          Search Recipes
        </Button>
      </Card>


      <h2 style={{ marginTop: '50px' }}>RECIPES</h2>
      <hr style={{ marginTop: '-6px' }} />

      <div className='byIngredient__recipes pt-3'>
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
      </div>

      <div className='byIngredient__recipes pt-3'>
        <RecipePreview />
      </div>
    </div>
  )
}

export default ByIngredient
