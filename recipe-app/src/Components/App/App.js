import './App.css';
import Body from '../Body';
import { MealProvider } from '../../Context/MealContext'

function App() {
  
  return (
    <div className="App">
      <MealProvider>
        <Body></Body>
      </MealProvider>
    </div>
  );
}

export default App;
