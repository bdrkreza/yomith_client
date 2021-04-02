import React from 'react';
import './Card.css';


const OrderCard = ({ products }) => {
    console.log(products)
    const { name, quantity, price, image } = products.products;
    return (
        <div className="order-table">
            <table class="order-card-style">
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                        <td className='btn-edit'>
                            <img className="item" src={image} alt="" />
                        </td>
                        <td className='time'>{products.orderTime}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderCard;