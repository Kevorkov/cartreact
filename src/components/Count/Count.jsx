import "./Count.scss"

const Count = ({count, increase, decrease, changeValue, id}) => {
    return ( 
    <div className="product__count">
        <div className="count">
            <div className="count__box">
                <input type="number" className="count__input" onChange={(e)=>{changeValue(id, +e.target.value)}} min="1" max="100" value={count}/>
            </div>
            <div className="count__controls">
                <button type="button" className="count__up" onClick={()=>{increase(id)}}>
                    <img src="./img/icons/icon-up.svg" alt="Increase"/>
                </button>
                <button type="button" className="count__down" onClick={()=>{decrease(id)}}>
                    <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                </button>
            </div>
        </div>
    </div>
     );
}
 
export default Count;