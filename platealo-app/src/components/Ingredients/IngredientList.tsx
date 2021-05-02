import './IngredientList.css'
import { Filter, Plus } from 'react-bootstrap-icons'
// import Recipe from '../../models/Recipe'
import Ingredient from '../../models/Ingredient';
import {
  Form,
  InputGroup,
  Button,
  Col
} from 'react-bootstrap'


export interface IngredientListProps {
  ingredients: Ingredient[],
  onAddIngredient: Function,
  onFilterRecipes: Function
}

const IngredientList = ({ ingredients, onAddIngredient, onFilterRecipes }: IngredientListProps) => {
  return (
    <>
      <Form.Row>
        <Form.Group as={Col}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Filter width='20' height='20' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Filter Ingredient"
              onChange={(e) => onFilterRecipes(e)}
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <div className='ingredientList__buttons d-flex pt-4 pb-4'>
        {ingredients.map((ingredient: Ingredient, i: number) => (
          <Button
            key={i}
            className='ingredientList__chipButton d-flex align-items-center mr-3 mb-3'
            onClick={() => onAddIngredient(ingredient)}
          >
            <Plus width='30' height='30' />
            <span>{ingredient['name']}</span>
          </Button>
        ))}
      </div>
    </>
  )
}

export default IngredientList
