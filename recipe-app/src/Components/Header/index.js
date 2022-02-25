import { HeaderContainer } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  return (
    <HeaderContainer>
      <input type="text"></input>
      <button id="search"><AiOutlineSearch/></button>
    </HeaderContainer>
  );
}