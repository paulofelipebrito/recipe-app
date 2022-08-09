import { createContext, useCallback, useEffect, useState } from 'react'
import MealsService from '../Services/MealsService';
export const MealsContext = createContext(['']);

export function MealProvider({children}) {
  const [searchedMeal, setSearchedMeal] = useState([''])
  /*const loadRandomMeal = useCallback(
    async () => {
      try{
        const randomMealArray = await MealsService.listRandomMeal();
        setSearchedMeal(randomMealArray.meals[0]);
        
      } catch(error){
        console.error(error);
      }
    },[searchedMeal]);*/

 /* useEffect(() => {
    //console.log(searchedMeal)    
  }, [searchedMeal]);*/
  return(
    <MealsContext.Provider
      value={[
        searchedMeal,
        setSearchedMeal,
        //loadRandomMeal: loadRandomMeal
      ]}
    >
      {children}
    </MealsContext.Provider>
  );
}