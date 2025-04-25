import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { use } from "react";
import UserProgressContext from "../store/UserProgressContext";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>Bite</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          <ShoppingBasketIcon/> ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
