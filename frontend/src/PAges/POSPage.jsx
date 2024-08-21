import React, { useEffect, useState } from 'react'
import MainLayout from '../Layout/MainLayout'
import axios from 'axios'

function POSPage() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState([]);

    const fetchProducts = async() => {
        setIsLoading(true);
        const result = await axios.get('products');
        setProducts(await result.data);
        setIsLoading(false);
    }

    const addProductToCart = async(product) => {
      //check if item is already in cart
      let findProductInCart = cart.find (i =>{
        return i.id === product.id});

        if(findProductInCart) {
            let newCart = [];
            let newItem;

            cart.forEach(cartItem => {
                if(cartItem.id === product.id) {
                    newItem = {...cartItem,
                         quantity: cartItem.quantity + 1,
                        totalAmount: cartItem.price * (cartItem.quantity + 1),
                    }
                
                newCart.push(newItem);
            }else{
                newCart.push(cartItem);
            } 
            });

            setCart(newCart);

        }else{
            let addingProduct = {
                ...product,
                'quantity': 1,
                'totalAmount': product.price ,
            }
            setCart([...cart, addingProduct]);
        }
    
    }

    const removeProductFromCart = async(product) => {
        const newCart = cart.filter(cartItem => cartItem.id !== product.id);
        setCart(newCart);
    }



    useEffect(() => { 
        fetchProducts();
    }, []);

  return (
    
    <MainLayout>
        <div className="row">
        <div className="col-lg-8">
            {isLoading ? 'Loading' :  <div className="row">
                {products.map((product, key) =>
                <div key={key} className='col-lg-4'>
                    <div className='border' onClick={() => addProductToCart(product)}>
                    <p>{product.name}</p>
                    <img src={product.image} alt={product.name} className='img-fluid' />
                    <p>Ksh.{product.price}</p>
                </div>

                </div>
               ) }

            
            </div>}
        </div>
        <div className="col-lg-4">
               <div className="table-responsive-bg-dark">
                <table className='table table-responsive table-dark table-hover'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Qty</td>
                            <td>Total</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cart ? cart.map((cartProduct, key) => <tr key={key}>
                            <td>{cartProduct.id}</td>
                            <td>{cartProduct.name}</td>
                            <td>Ksh.{cartProduct.price}</td>
                            <td>{cartProduct.quantity}</td>
                            <td>Ksh.{cartProduct.totalAmount}</td>
                            <td><button className='btn btn-danger btn-small' onClick={() => removeProductFromCart(cartProduct)}   >Remove</button></td>
                        </tr>)
                        : 'No item in Cart'}
                    </tbody>
                </table>
               </div>

        </div>
        </div>
        
    </MainLayout>
  )
}


export default POSPage