import Home from './sub/Home'
import CookerRecipeCategory from './sub/CookerRecipeCategory'
import CookerRecipe from './sub/CookerRecipe'
import Cook_list_edit from './sub/Cook_list_edit'

export default [
    {
        path: '/home',
        exact: true,
        sliderbar: Home
    },
    {
        path: '/CookerRecipeCategory',
        sliderbar: CookerRecipeCategory
    },
    {
        path: '/CookerRecipe',
        sliderbar: CookerRecipe
    },
    {
        path: '/edit',
        sliderbar: Cook_list_edit
    }
]