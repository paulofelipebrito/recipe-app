import {BodyContainer } from './styles';
import { FaHeart } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import MealsService from '../../Services/MealsService';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { HeaderContainer } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';


export default function Body({setIsLoading}: any) {
  const [randomMeal, setRandomMeal] = useState<any>(['']);
  const [favoriteMeal, setFavoriteMeal] = useState(['']);
  const [favoriteButtonClicked, setFavoriteButtonClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedMeal, setSearchedMeal] = useState(['']);
  const [showRandomMeal, setShowRandomMeal] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState([''])
  const [ingredients, setIngredients] = useState([''])
  
  const loadMealBySearch = useCallback(
    async (term: string) => {
      try{
        const mealBySearch: any = await MealsService.listMealBySearch(term);
        if(mealBySearch !== null){
          return mealBySearch.meals;
        }
      } catch(error){
        console.error(error);
      }
    }, []);

  function handleChangeSearchTerm(event: ChangeEvent) {
    const { target } = event;
    setSearchTerm((target as HTMLButtonElement).value);    
  }

  async function handleSearch(){
    setShowRandomMeal(false)
    try{
      const mealBySearch = await loadMealBySearch(searchTerm);
      setSearchedMeal(mealBySearch);
    } catch(error){
      console.error(error);
    }
  }

  const loadRandomMeal = useCallback(
    async () => {
      try{
        const randomMealArray: any = await MealsService.listRandomMeal();
        setRandomMeal(randomMealArray?.meals[0]); 
      } catch(error){
        console.error(error);
      } finally{
        setIsLoading(false);
      }
    },[setIsLoading]);
  
  const loadMealById = useCallback(
    async (id: any) => {
      try{
        setIsLoading(true);
        const meal = await MealsService.listMealById(id.idMeal);
        return meal;
      } catch(error){
        console.error(error);
      } finally{
        setIsLoading(false);
      }
    }, [setIsLoading]);  

  function handleClick(randomMeal: any){
    addMealsToLocalStorage(randomMeal);
    fetchFavoriteMeals(); 
    
  }

  function handleCloseButton(idMeal: number){
    removeMealFromLocalStorage(idMeal);
    fetchFavoriteMeals();
  }

  function addMealsToLocalStorage(mealId: any){
    console.log(mealId);
    const mealIds = getMealsFromLocalStorage();

    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
  }

  function getMealsFromLocalStorage(){
    const mealIdsFromLS = localStorage.getItem('mealIds');
    const mealIds = mealIdsFromLS ? JSON.parse(mealIdsFromLS) : null;
    return mealIds === null ? [] : mealIds;
  }

  function removeMealFromLocalStorage(mealId: number) {
    const mealIds = getMealsFromLocalStorage();
    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter((id: any) => 
      id.idMeal !== mealId)
      )
    );    
  }
  
  async function fetchFavoriteMeals(){
    window.location.reload();
    // const mealIds = getMealsFromLocalStorage();
    // if(mealIds.length > 0){
    //   for(let i = 0; i < mealIds.length; i++){
    //     const mealId = mealIds[i];
    //     const meal: any = await loadMealById(mealId);
    //     console.log(meal.meals)
    //     if(meal.meals !== undefined && meal.meals !== null){
    //       addMealsToLocalStorage(meal.meals);
    //     }
        
    //   }
    // }
  }

  function showMealInfo(mealData: any) {
    setShowPopup(true);
    setIngredients(['']);
    const ingredientsArray = []
    for(let i = 1; i<=20; i++){
      if(mealData['strIngredient' + i]){
        ingredientsArray.push(`${mealData['strIngredient' + i]} - ${mealData['strMeasure' + i]}`);
      } else{
        break;
      }
    }
    setIngredients(ingredientsArray);
    setPopupInfo([mealData]);
  }

  function handleClosePopup(){
    setShowPopup(false);
  }

  useEffect(() => {
    loadRandomMeal();          
  }, [loadRandomMeal]);

  useEffect(() => {
    setFavoriteMeal(getMealsFromLocalStorage()) 

  },[])

  return (
    <>
      <HeaderContainer>
        <input 
          value={searchTerm}
          type="text"
          placeholder="Search Recipe"
          onChange={handleChangeSearchTerm}
          />
        <button id="search" onClick={handleSearch}><AiOutlineSearch/></button>
      </HeaderContainer>

      <BodyContainer>
        <div className="fav-container">
          <h3>Favorite Meals</h3>
          <ul className="fav-meals">
            {favoriteMeal.map((favMeal: any, index) => (
              <div key={index}>
                <li>
                  <img src={favMeal?.strMealThumb} alt={favMeal?.strMeal} onClick={()=>{showMealInfo(favMeal)}}/>
                  <span onClick={()=>{showMealInfo(favMeal)}}>{favMeal?.strMeal}</span>
                  <button className="close" onClick={()=>(handleCloseButton(favMeal?.idMeal))}>
                    <AiFillCloseCircle/>
                  </button>
                </li>
              </div>            
            ))}
            
          </ul>
        </div>
        <div className="meals">
          {randomMeal && showRandomMeal && (
            <div className="meal">
              <div className="meal-header">
                <span className="random">
                  Random Meal
                </span>
                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} onClick={()=>{showMealInfo(randomMeal)}}/>
              </div>
              <div className="meal-body">
                <h4 onClick={()=>{showMealInfo(randomMeal)}}>{randomMeal.strMeal}</h4>
                <button className="fav-btn" onClick={() => {
                  if(favoriteButtonClicked){
                    setFavoriteButtonClicked(false);
                    removeMealFromLocalStorage(randomMeal.idMeal)
                  } else {
                    setFavoriteButtonClicked(true);
                    handleClick(randomMeal);
                  }
                  }}> 
                  {favoriteButtonClicked ? (<FaHeart color="rebeccapurple" />) : (<FaHeart/>)}
                  
                </button>
                
              </div>
            </div>

          )}
          {searchedMeal !== null && searchedMeal.length > 0 && !showRandomMeal && searchedMeal.map((meal: any, index) => (
            <div className="meal" key={index}>
              <div className="meal-header">
                <img src={meal.strMealThumb} alt={meal.strMeal} onClick={()=>{showMealInfo(meal)}}/>
              </div>
              <div className="meal-body">
                <h4 onClick={()=>{showMealInfo(meal)}}>{meal.strMeal}</h4>
                <button className="fav-btn" onClick={() => {
                  if(favoriteButtonClicked){
                    setFavoriteButtonClicked(false);
                    removeMealFromLocalStorage(meal.idMeal)
                  } else {
                    setFavoriteButtonClicked(true);
                    handleClick(meal);
                  }
                  }}> 
                  {favoriteButtonClicked ? (<FaHeart color="rebeccapurple" />) : (<FaHeart/>)}
                  
                </button>
                
              </div>
            </div>

          ))}
        </div>
        {showPopup && popupInfo.length > 0 && popupInfo.map((mealData: any, index) => (
          <div className="popup-container" key={index}>
            <div className="popup">
              <button className="close-popup" onClick={()=>(handleClosePopup())}><AiFillCloseCircle/></button>
                <h1>{mealData.strMeal}</h1>
                
                <div className="meal-info">                  
                  <img src={mealData.strMealThumb} alt={mealData.strMeal} />
                  <p>{mealData.strInstructions}</p>
                  <ul>
                    {ingredients.length > 0 && ingredients.map((ing) =>(
                      <li>{ing} </li>
                    ))}
                  </ul>
                </div>
            </div>          
          </div>
        ))}        
      </BodyContainer>
    </>
  );
}