import './SelectedIngredientsCart.css'
import Ingredient from '../../models/Ingredient';
import { Filter, Plus, Dash } from 'react-bootstrap-icons'
import {
  Card,
  InputGroup,
  Button,
  Col
} from 'react-bootstrap'

export interface SelectedIngredientsCartProps {
  selectedIngredients: Ingredient[],
  onRemoveIngredient: Function,
  onSearchRecipes: Function
}


const SelectedIngredientsCart = ({ selectedIngredients, onRemoveIngredient, onSearchRecipes }: SelectedIngredientsCartProps) => {
  return (
    <>
      <Card className='selectedIngredientsCart__selectedIngredients p-3'>
        <div className='selectedIngredientsCart__selectedButtons'>
          {selectedIngredients.map((ingredient: Ingredient, i: number) =>
            <Button
              key={i}
              variant='secondary'
              className='selectedIngredientsCart__chipButton d-flex align-items-center mr-5 mb-3'
              onClick={() => onRemoveIngredient(ingredient)}
            >
              <Dash width='30' height='30' />
              <span>{ingredient['name']}</span>
            </Button>
          )}
        </div>

        <Button
          variant='secondary'
          className='selectedIngredientsCart__searchRecipes'
          onClick={() => onSearchRecipes()}
        >
          Search Recipes
        </Button>
      </Card>
    </>
  )
}

export default SelectedIngredientsCart
