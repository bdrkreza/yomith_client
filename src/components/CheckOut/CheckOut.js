import React, { useContext, useEffect } from 'react';
import './CheckOut.css'
import { useState } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles((theme) => ({
    process: {
        marginLeft: "1010px"
    },
}));

const CheckOut = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
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
                setLoading(false);
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
                        <th>{weight}</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{weight}</td>
                        <td className="price-body">
                            <h4><MonetizationOnIcon /></h4>
                            <h3 className="price">{price}</h3>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="active-row">
                        <td><h3>Total</h3></td>
                        <td>{quantity}</td>
                        <td>{weight}</td>
                        <td className="price-body">
                            <h4><MonetizationOnIcon /></h4>
                            <h3 className="price">{price}</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button
                className={classes.process}
                onClick={onSubmit} disabled={loading}
                variant="outlined" color="secondary">
                Process CheckOut
                </Button>
        </div>
    );
};

export default CheckOut;