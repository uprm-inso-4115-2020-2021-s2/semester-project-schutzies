import { useState, useEffect } from 'react'
// import ByIngredientContext from '../../../store/byIngredientContext'
import './ByIngredient.css'
import Ingredient from '../../../models/Ingredient'
import Recipe from '../../../models/Recipe'
import RecipeDetails from '../../../components/Recipes/RecipeDetails'
import IngredientList from '../../../components/Ingredients/IngredientList'
import SelectedIngredientsCart from '../../../components/Ingredients/SelectedIngredientsCart'
import RecipeList from '../../../components/Recipes/RecipeList'

const ByIngredient = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([])
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>()

  // const byIngredientState = useContext(ByIngredientContext)

  useEffect(() => {
    const fetchIngredients = async () => {
      const res = await fetch('/ingredients')

      if (!res.ok)
        throw new Error('Unable to fetch ingredients')
      const resData = await res.json()
      const loadedIngredients: Ingredient[] = []

      for (const key in resData)
        loadedIngredients.push(resData[key])

      setIngredients(loadedIngredients)
      setFilteredIngredients(loadedIngredients)
    }

    fetchIngredients();
  }, [])

  const addIngredientHandler = (ingredient: Ingredient) => {
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

  const removeIngredientHandler = (ingredient: Ingredient) => {
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

  const searchRecipesHandler = () => {
    const fetchRecipes = async () => {
      let ids = 'ids='
      for (let ingre of selectedIngredients)
        ids += ingre['id'] + ','

      const res = await fetch(`/recipes?ids=603418bec9695c013853a67b,603424dd519bf90063346e76,603424e9519bf90063346e77,603424f5519bf90063346e78,60342674519bf90063346e79`)
      // fetch(`/recipes?${ids}`)

      if (!res.ok)
        throw new Error('Unable to fetch ingredients')
      const resData = await res.json()
      const loadedRecipes: Recipe[] = [];

      for (const key in resData)
        loadedRecipes.push(resData[key])

      setRecipes(loadedRecipes)
    }
    fetchRecipes();
  }

  const handleFilterIngredient: any = (e: any) => {
    const text: string = e.target.value;
    const filtered = ingredients.filter((ingre: Ingredient) => ingre.name.includes(text))
    setFilteredIngredients(filtered)
  }

  const handleBack = () => setSelectedRecipe(undefined)
  const handleSelectedRecipe = (recipe: Recipe) => setSelectedRecipe(recipe)

  return (
    <div className='byIngredient'>
      <h2>BY INGREDIENT</h2>
      <hr style={{ marginTop: '-6px' }} />
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} onBack={handleBack} />}
      {!selectedRecipe && (
        <>
          <IngredientList
            ingredients={filteredIngredients}
            onFilterRecipes={handleFilterIngredient}
            onAddIngredient={addIngredientHandler}
          />

          {selectedIngredients.length > 0 && (
            <SelectedIngredientsCart
              selectedIngredients={selectedIngredients}
              onRemoveIngredient={removeIngredientHandler}
              onSearchRecipes={searchRecipesHandler}
            />
          )}

          <h2 style={{ marginTop: '50px' }}>RECIPES</h2>
          <hr style={{ marginTop: '-6px' }} />
          {recipes.length > 0 && <RecipeList recipes={recipes} onSelectedRecipe={handleSelectedRecipe} />}
        </>
      )}
    </div>
  )
}

export default ByIngredient
