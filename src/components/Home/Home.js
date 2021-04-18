import React from 'react';
import "./Home.css"
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '130px',
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Home = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(null)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://yomith-buy.herokuapp.com/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(data);
            })

    }, [])
    return (
        <div className="body">

            {loading ? <Grid container spacing={0}>
                {
                    products.map(data => <Grid item xs={12} xl={3} lg={4} md={6} sm={12}><Products product={data} /></Grid>)
                }
            </Grid> : <div className={classes.root}>
                <LinearProgress />
                <LinearProgress color="secondary" />
            </div>}
        </div>

    );
};

export default Home;