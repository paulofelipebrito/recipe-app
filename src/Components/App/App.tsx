import './App.css';
import Body from '../Body';
import { MealProvider } from '../../Context/MealContext'
import { useState } from 'react';
import Spinner from '../Spinner';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if(isLoading){
    return (<Spinner />)
  }

  return (
    <div className="App">
      <MealProvider>
        <Body setIsLoading={setIsLoading} />
      </MealProvider>
    </div>
  );
}

export default App;
