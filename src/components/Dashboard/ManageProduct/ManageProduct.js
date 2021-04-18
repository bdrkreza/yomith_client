
import React, { useEffect, useState } from 'react';
import ManageCard from '../ManageCard/ManageCard';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import './ManageProduct.css'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '30px',
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
        <Grid container
            direction="row">
            <Grid item xs={12} xl={12} lg={12} md={12} sm={12}>
                <div className="manageBody">
                    <div class="main">
                        <table class="table-content">
                            <thead>
                                <tr>
                                    <th><h1>item</h1></th>
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
                                    <Grid container>
                                        {
                                            products.map((product) => <Grid item xs={12} xl={12} lg={12} md={12} sm={12}> <ManageCard products={product} fetchProduct={fetchProduct} /> </Grid>)

                                        }
                                    </Grid>
                                </div> :
                                <div className={classes.root}>
                                    <LinearProgress />
                                    <LinearProgress color="secondary" />
                                </div>
                        }
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default ManageProduct;