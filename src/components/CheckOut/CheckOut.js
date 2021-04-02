import React, { useContext, useEffect } from 'react';
import './CheckOut.css'
import { useState } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';


const CheckOut = () => {
    const [loggedInUser,] = useContext(UserContext);
    const { productKey } = useParams();
    const [product, setProduct] = useState({})
    const { name, price, quantity, weight } = product;

    useEffect(() => {
        fetch('https://yomith-buy.herokuapp.com/product/' + productKey)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productKey])


    const onSubmit = () => {
        const orderDetails = { ...loggedInUser, products: product, orderTime: new Date() };

        fetch('https://yomith-buy.herokuapp.com/addOrderProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order Placed successfully')
                }
            })

    };

    return (
        <div className="body-2">
            <h1>Checkout</h1>
            <table className="styled-table-2">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>weight</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{weight}</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={onSubmit} variant="outlined" color="secondary">
                Process CheckOut</Button>
        </div>
    );
};

export default CheckOut;