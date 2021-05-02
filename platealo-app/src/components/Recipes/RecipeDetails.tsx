import { useState, useEffect } from 'react'
import './RecipeDetails.css'
import Recipe from '../../models/Recipe'
import Ingredient from '../../models/Ingredient'
import { ChevronLeft } from 'react-bootstrap-icons';
import { Card } from 'react-bootstrap'

export interface RecipeDetailsProps {
  recipe: Recipe;
  onBack: Function
}

const RecipeDetails = ({ recipe, onBack }: RecipeDetailsProps) => {
  const [name, setName] = useState<string>(recipe.name)
  const [steps, setSteps] = useState<string[]>([])
  const [description, setDescription] = useState<string>(recipe.recipeDescription)
  const [ingredients, setIngredients] = useState<Ingredient[]>(recipe.ingredients)
  const [credit, setCredit] = useState<string>(recipe.credit)
  const [createdAt, setCreatedAt] = useState<Date>(new Date(recipe.createdAt))

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

    // console.log('name', name)
    // console.log('steps', steps)
    // console.log('description', description)
    // console.log('ingredients', ingredients)
    // console.log('credit', credit)
    // console.log('createdAt', createdAt)


    // set the recipe's description state
    // console.log('date', new Date(1614030498485))
  }, [])

  return (
    <div className='receiptDetails'>
      <div className="d-flex justify-content-start align-items-center w-100 mt-3 mb-3">
        <a
          className="backButton circularBtn d-flex justify-content-center align-items-center"
          onClick={() => onBack()}
        >
          <ChevronLeft width='20' height='20' />
          BACK
        </a>
      </div>

      <main className='d-flex justify-content-between'>
        <div className='receiptsDetails__left pr-4'>
          {/* <Card style={{ width: '18rem' }}> */}
          <Card className='mb-4'>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
          {steps?.map((step: string, i: number) => (
            <Card key={i} className='mb-4'>
              <Card.Body>
                <Card.Title>Step {i + 1}</Card.Title>
                <Card.Text>
                  {step}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className='receiptsDetails__right'>
          <Card>
            <Card.Body>
              <Card.Text>
                <strong>Author: </strong>{credit}
              </Card.Text>
              <Card.Title>Ingredients</Card.Title>
              <ul>
                {ingredients?.map((ingre: any, i: number) => (
                  <li key={i}>
                    <Card.Text>
                      {ingre['name']}
                    </Card.Text>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default RecipeDetails
