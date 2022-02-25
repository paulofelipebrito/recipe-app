import {BodyContainer } from './styles';
import { FaRegHeart } from 'react-icons/fa';

export default function Body() {
  return (
    <BodyContainer>
      <div className="fav-container">
        <h3>Favorite Meals</h3>
        <ul className="fav-meals">
          <li>
            <img src="https://www.themealdb.com/images/ingredients/Lime.png" alt="Lime" />
            <span>Lime</span>
          </li>
          <li>
            <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview" alt="Carbonara" />
            <span>Carbonara</span>
          </li>
          <li>
            <img src="https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg" alt="Lasagna" />
            <span>Lasagna</span>
          </li>
        </ul>
      </div>
      <div className="meals">
        <span className="random">
          Random Recipe
        </span>
        <div className="meal">
          <div className="meal-header">
            <img src="https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg" alt="" />
          </div>
          <div className="meal-body">
            <h4>Veggie Veggies</h4>
            <button>
              <FaRegHeart/>
            </button>
            
          </div>
        </div>
      </div>
    </BodyContainer>
  );
}