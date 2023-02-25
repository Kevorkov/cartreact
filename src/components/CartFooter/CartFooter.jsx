import "./CartFooter.scss"
import formatPrice from "../../utils/priceFormatter"

const CartFooter = ({total}) => {
    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">{total.count} шт</div>
            <div className="cart-footer__price">{formatPrice(total.price)} руб.</div>
        </footer>
      );
}
 
export default CartFooter;