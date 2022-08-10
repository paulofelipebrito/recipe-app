import { createContext,useState } from 'react'

export interface MealsContextType {
  searchedMeal: string[],
  setSearchedMeal: React.Dispatch<React.SetStateAction<string[]>>
}

const MealsContext = createContext<MealsContextType | null>(null);

export function MealProvider({children}: React.PropsWithChildren<unknown>) {
  const [searchedMeal, setSearchedMeal] = useState<string[]>(['']);

  return(
    <MealsContext.Provider
      value={{
        searchedMeal,
        setSearchedMeal,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
}