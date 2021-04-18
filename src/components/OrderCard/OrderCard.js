import React from 'react';
import './Card.css';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        textAlign: 'center'
    },
}));

const OrderCard = ({ products }) => {
    const classes = useStyles();
    const { name, quantity, price, image } = products.products;
    return (
        <div className="order-table">
            <table class="order-card-style">
                <tbody>
                    <tr>
                        <td> <Avatar alt="Remy Sharp" src={image} className={classes.large} /></td>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                        <td className='time'>{products.orderTime}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderCard;