import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ManageCard from '../ManageCard/ManageCard';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import './ManageProduct.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ManageProduct = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(null)
    const [products, setProducts] = useState([]);

    const fetchProduct = () => {
        fetch('https://yomith-buy.herokuapp.com/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(data);
            })
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div class="manageBody">
            <div class="sidebar2">
                <div class="sidenav2">
                    <Link >Manage Product</Link>
                    <Link href="/addProduct">Add Product</Link>
                    <Link href="/editProduct">Edit Product</Link>
                </div>
                <div class="main">
                    <table class="table-content">
                        <thead>
                            <tr>
                                <th><h1>Product Name</h1></th>
                                <th><h1>Quantity</h1></th>
                                <th><h1>Price</h1></th>
                                <th><h1>Action</h1></th>
                            </tr>
                        </thead>
                    </table>
                    {
                        loading ?
                            <div>
                                {
                                    products.map((product) => <ManageCard products={product} fetchProduct={fetchProduct} />)
                                }
                            </div> :
                            <div className={classes.root}>
                                <LinearProgress />
                                <LinearProgress color="secondary" />
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default ManageProduct;