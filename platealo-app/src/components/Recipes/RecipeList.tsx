import './RecipeList.css'
import Recipe from '../../models/Recipe'
import RecipePreview from './RecipePreview'

export interface RecipeListProps {
  recipes: Recipe[],
  onSelectedRecipe: Function
}

const RecipeList = ({ recipes, onSelectedRecipe }: RecipeListProps) => (
  <>
    <div className='recipeList__recipes pt-3'>
      <span>Hardcoded ids to find this one recipe. User would need to select exactly all those ingredients for this recipe to appear. Backend logic missing.</span>

      {recipes.map((recipe: Recipe, i: number) => {
        return (
          <div key={i}>
            <RecipePreview recipe={recipe} onSelectedRecipe={onSelectedRecipe} />
            {(i % 3 === 0) ? <br /> : null}
          </div>
        )
      })}
    </div>
  </>
)

export default RecipeList
