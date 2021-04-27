import React, { useState, useEffect } from 'react'
import './RecipeDetails.css'
import Recipe from '../../../models/Recipe'
import Ingredient from '../../../models/Ingredient'
import { ChevronLeft } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap'

export interface RecipeDetailsProps {
  recipe: Recipe;
  handleBack: Function
}

const RecipeDetails = ({ recipe, handleBack }: RecipeDetailsProps) => {
  const [steps, setSteps] = useState<string[]>([])
  const [description, setDescription] = useState<string>(recipe.recipeDescription)
  const [ingredients, setIngredients] = useState<Ingredient[]>(recipe.ingredients)
  const [credit, setCredit] = useState<string>(recipe.credit)
  const [createdAt, setCreatedAt] = useState<Date>(new Date(recipe.createdAt))
  console.log(createdAt)

  useEffect(() => {
    // set the recipe's list of steps state
    const recipeSteps: string = recipe.recipeSteps;
    let i = 0;
    let k = 0;
    while (i < recipeSteps.length) {
      if (recipeSteps.substr(i++, 4) == 'step') {
        i = recipeSteps.indexOf(':', k) + 1;
        k = recipeSteps.indexOf('step', i);
        const step = recipeSteps.substring(i, k)
        setSteps((prevSteps: string[]) =>
          [...prevSteps, step]
        )
        i = k + 1;
      }
    }

    // set the recipe's description state
    console.log(new Date(1614030498485))
  }, [])

  const consoleLogSteps = () => {
    console.log(steps)
  }


  return (
    <div className='receiptDetails'>
      <div className="d-flex justify-content-start align-items-center w-100 mt-3 mb-1">
        <a
          className="backButton circularBtn d-flex justify-content-center align-items-center"
          onClick={() => handleBack()}
        >
          <ChevronLeft width='20' height='20' />
          BACK
        </a>
      </div>

      <Button
        className='d-flex align-items-center mr-3 mb-3'
        onClick={() => consoleLogSteps()}
      >
        log steps
      </Button>
    </div>
  )
}

export default RecipeDetails
