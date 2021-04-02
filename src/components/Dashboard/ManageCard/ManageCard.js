import React from 'react';
import './ManageCard.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
const ManageCard = ({ products, fetchProduct }) => {
    console.log(products)
    const { name, price, quantity, _id } = products;

    const productDelete = (productId) => {
        fetch(`https://yomith-buy.herokuapp.com/productDelete/${productId}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                fetchProduct();
                if (data) {
                    alert('Product Delete successfully')
                }
            })

    }

    return (
        <div className='tbody'>
            <table class="table-content-2">
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                        <td className='btn-edit'>
                            <IconButton onClick={() => productDelete(_id)} color="secondary" aria-label="delete">
                                <DeleteForeverIcon fontSize="large" />
                            </IconButton>
                            <IconButton color="primary" aria-label="delete">
                                <EditIcon fontSize="large" />
                            </IconButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageCard;