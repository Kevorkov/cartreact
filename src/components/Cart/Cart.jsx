import { useState, useEffect } from "react";

import data from "../../data"
import CartFooter from "../CartFooter/CartFooter";
import CartHeader from "../CartHeader/CartHeader";
import Product from "../Product/Product";



const Cart = () => {

    const[cart, setCart]= useState(data);
    const[total, setTotal] =useState({
        price: cart.reduce ((prev,curr)=>{return prev + curr.priceTotal},0),
        count: cart.reduce((prev,curr)=>{return prev + curr.count},0)
    }
    );

    const deleteProduct =(id)=>{
        setCart((cart)=>cart.filter((product)=>id !== product.id))
    }

    const increase = (id) => {
        setCart((cart)=>cart.map((product)=>{
             if (product.id === id){
                return{
                ...product,
                count: ++product.count,
                priceTotal: ++product.count * product.price
            }
            } 
            return product;
        }))
    }

    const decrease = (id) => {
        setCart((cart)=>cart.map((product)=>{
             if (product.id === id){
                return{
                ...product,
                count: product.count - 1 >= 1 ? --product.count : product.count,
                priceTotal: product.priceTotal > product.price ? product.priceTotal - product.price : product.priceTotal
            }
            } 
            return product;
        }))
    }

    const changeValue = (id, value) => {
        setCart((cart)=>cart.map((product)=>{
             if (product.id === id){
                return{
                ...product,
                count: value,
                priceTotal: product.price * value
            }
            } 
            return product;
        }))
    }

    useEffect(() => {
        setTotal({
            price: cart.reduce ((prev,curr)=>{return prev + curr.priceTotal},0),
            count: cart.reduce((prev,curr)=>{return prev + curr.count},0)
        })
    }, [cart]);
    
    const products = cart.map((product)=>{
       return <Product product={product} key={product.id} deleteProduct={deleteProduct} 
       increase={increase} decrease={decrease} changeValue={changeValue}/>
    }    )

    return ( 
        <section className="cart">
        <CartHeader/>    
        {products}
        <CartFooter total = {total} />
        </section>
        );
}
 
export default Cart;