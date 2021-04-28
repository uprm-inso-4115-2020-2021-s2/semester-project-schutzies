import React, { useState, useEffect } from 'react'
import './ByIngredient.css'
import { Filter, Plus, Dash } from 'react-bootstrap-icons'
import RecipePreview from '../../../components/RecipePreview/RecipePreview'
import axios from 'axios'
import Ingredient from '../../../models/Ingredient'
import Recipe from '../../../models/Recipe'
import RecipeDetails from '../RecipeDetails/RecipeDetails'
// import { ingredients, selectedIngredients } from '../../../util/globalData/ingredients'
import {
  Card,
  Form,
  InputGroup,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap'



// export default interface Recipe {
//   id: number,
//   name: string,
//   recipeSteps: string,
//   recipeDescription: string,
//   ingredients: Ingredient[]
//   updatedAt: number,
//   credit: string,
//   createdAt: number
// }

// export default interface Ingredient {
//   id: string,
//   name: string,
//   updatedAt: number,
//   createdAt: number
// }

// const recipess: Recipe[] = [
//   new Recipe(1, "Cheese and Bacon Potato Rounds", "step1:Preheat oven to 400 degrees F (200 degrees C).step2:Brush both side of potato slices with butter; place them on an ungreased cookie sheet. Bake in the preheated 400 degrees F (200 degrees C) oven for 30 to 40 minutes or until lightly browned on both sides, turning once.step3:When potatoes are ready, top with bacon, cheese, and green onion; continue baking until the cheese has melted",
//   "4 baking potatoes(cut into 1/2 inch slices), 1/4cup melted butter,8 slices bacon(coocked and crumbled),8 ounces shredded cheddar cheese,1/2 cup chopped green onions.",
//   [
//     new Ingredient("603418bec9695c013853a67b", "bacon", 1614026942815, 1614026942815),
//     new Ingredient("603418bec9695c013853a67b", "bacon", 1614026942815, 1614026942815),
//     new Ingredient("603418bec9695c013853a67b", "bacon", 1614026942815, 1614026942815),
//     new Ingredient("603418bec9695c013853a67b", "bacon", 1614026942815, 1614026942815),
//     new Ingredient("603418bec9695c013853a67b", "bacon", 1614026942815, 1614026942815)
//   ],
//   1614030498485,
//   "allrecipes.com",
//   1614030498485
//   )
// ]

const recipess: string[] = [
  'recipe 1',
  'recipe 2',
  'recipe 3',
  'recipe 4',
  'recipe 5',
  'recipe 6',
  'recipe 7',
  'recipe 8',
]

const ByIngredient = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([])
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>()

  useEffect(() => {
    const fetchIngredients = async () => {
      return new Promise((resolve, reject) =>
        axios.get(`/ingredients`)
          .then((data: any) => {
            console.log('ingredients', data['data'])
            setIngredients(data['data'])
            setFilteredIngredients(data['data'])
          })
      )
    }

    fetchIngredients();
  }, [])

  useEffect(() => {
    console.log(recipes)
  }, [recipes])


  const addIngredient = (ingredient: Ingredient) => {
    // add the selected ingredient to ingredients list
    setSelectedIngredients((prev: Ingredient[]) =>
      [...prev, ingredient]
    )

    // remove the ingredient from selected list
    const ingredientsClone = [...filteredIngredients];
    const selectedIndex = filteredIngredients.findIndex(({ name }: any) => name === ingredient['name'])
    ingredientsClone.splice(selectedIndex, 1)
    setFilteredIngredients(ingredientsClone);
  }

  const removeIngredient = (ingredient: Ingredient) => {
    // add the selected ingredient to selected list
    setFilteredIngredients((prev: Ingredient[]) =>
      [...prev, ingredient]
    )

    // remove the ingredient from selected list
    const selectedIngredientsClone = [...selectedIngredients];
    const selectedIndex = selectedIngredients.findIndex(({ name }: any) => name === ingredient['name'])
    selectedIngredientsClone.splice(selectedIndex, 1)
    setSelectedIngredients(selectedIngredientsClone);
  }

  const handleSearchRecipes = () => {
    const fetchRecipes = async () => {
      return new Promise((resolve, reject) => {
        let ids = 'ids='
        for (let ingre of selectedIngredients)
          ids += ingre['id'] + ','

        axios.get(`/recipes?ids=603418bec9695c013853a67b,603424dd519bf90063346e76,603424e9519bf90063346e77,603424f5519bf90063346e78,60342674519bf90063346e79`)
          // axios.get(`/recipes?${ids}`)
          .then((data: any) => {
            setRecipes(data['data'])
          })
      })
    }
    fetchRecipes();
  }

  const handleSearchIngredients: any = (e: any) => {
    const text: string = e.target.value;
    const filtered = ingredients.filter((ingre: Ingredient) => {
      return ingre.name.includes(text)
    })
    console.log(filtered)

    setFilteredIngredients(filtered)
  }

  const handleBack = () => setSelectedRecipe(undefined)
  const handleRecipeView = (recipe: Recipe) => setSelectedRecipe(recipe)


  return (
    <>
      {selectedRecipe
        ?
        <RecipeDetails recipe={selectedRecipe} handleBack={handleBack} />
        : (
          <div className='byIngredient'>
            <h2>BY INGREDIENT</h2>
            <hr style={{ marginTop: '-6px' }} />

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
                    onChange={(e) => handleSearchIngredients(e)}
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <div className='byIngredient__buttons d-flex pt-4 pb-4'>
              {filteredIngredients.map((ingredient: Ingredient, i: number) =>
                <Button
                  key={i}
                  className='byIngredient__chipButton d-flex align-items-center mr-3 mb-3'
                  onClick={() => addIngredient(ingredient)}
                >
                  <Plus width='30' height='30' />
                  <span>{ingredient['name']}</span>
                </Button>
              )}
            </div>

            {selectedIngredients.length === 0 ? null :

              <Card className='byIngredient__selectedIngredients p-3'>
                <div className='byIngredient__selectedButtons'>
                  {selectedIngredients.map((ingredient: Ingredient, i: number) =>
                    <Button
                      key={i}
                      variant='secondary'
                      className='byIngredient__chipButton d-flex align-items-center mr-5 mb-3'
                      onClick={() => removeIngredient(ingredient)}
                    >
                      <Dash width='30' height='30' />
                      <span>{ingredient['name']}</span>
                    </Button>
                  )}
                </div>

                <Button
                  variant='secondary'
                  className='byIngredient__searchRecipes'
                  onClick={() => handleSearchRecipes()}
                >
                  Search Recipes
                </Button>
              </Card>
            }


            <h2 style={{ marginTop: '50px' }}>RECIPES</h2>
            <hr style={{ marginTop: '-6px' }} />

            <div className='byIngredient__recipes pt-3'>
              {recipes.map((recipe: Recipe, i: number) => {
                return (
                  <div key={i}>
                    <RecipePreview recipe={recipe} handleRecipeView={handleRecipeView} />
                    {(i % 3 === 0) ? <br /> : null}
                  </div>
                )
              })}
            </div>


            {/* <div className='byIngredient__recipes pt-3'>
            <RecipePreview key={2} recipe={'recipe 1'} />
            <RecipePreview key={3} recipe={'recipe 1'} />
            <br />
            <RecipePreview key={4} recipe={'recipe 1'} />
            <RecipePreview key={5} recipe={'recipe 1'} />
            <RecipePreview key={6} recipe={'recipe 1'} />
            <br />
            <RecipePreview key={7} recipe={'recipe 1'} />
            <RecipePreview key={8} recipe={'recipe 1'} />
            <RecipePreview key={9} recipe={'recipe 1'} />
          </div> */}
          </div>
        )
      }
    </>
  )
}

export default ByIngredient
