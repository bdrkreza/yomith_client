import React from 'react';
import './ManageCard.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));
const ManageCard = ({ products, fetchProduct }) => {
    const classes = useStyles();
    const { name, image, price, quantity, _id } = products;

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
                        <td> <Avatar alt="Remy Sharp" src={image} className={classes.large} /></td>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                        <td className='btn-edit'>

                            <IconButton onClick={() => productDelete(_id)} color="secondary" aria-label="delete">
                                <DeleteForeverIcon fontSize="large" />
                            </IconButton>

                            <Link to={`/updateProduct/${_id}`}>
                                <IconButton color="primary" aria-label="update">
                                    <EditIcon fontSize="large" />
                                </IconButton>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageCard;