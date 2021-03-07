import React from 'react';
import './ByIngredient.css'
import { Search } from 'react-bootstrap-icons';
import { Form, InputGroup, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import RecipePreview from '../../../components/RecipePreview/RecipePreview'

const ByIngredient = () => {
  return (
    <div className='byIngredient'>
      <h2>BY INGREDIENT</h2>
      <hr style={{ marginTop: '-6px' }} />

      <Form.Row>
        <Form.Group as={Col}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                {/* <FontAwesomeIcon icon="search" /> */}
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

      <div className='byIngredient__upperCards'>
        <div className='byIngredient__leftCard'>
          <Card>
            LEFT CARD
          </Card>
        </div>

        <div className='byIngredient__rightCard'>
          <Card>
            RIGHT CARD
          </Card>
        </div>
      </div>

      <div className='byIngredient__recipes pt-3'>
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
      </div>

      <div className='byIngredient__recipes pt-3'>
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
      </div>
    </div>
  )
}

export default ByIngredient
