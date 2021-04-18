import React, { useEffect } from 'react';
import './ProductDetails.css'
import { useState } from 'react';
import { useParams } from 'react-router';
import { Grid } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({})
    const { image, name, price, description, _id } = product;
    useEffect(() => {
        fetch('https://yomith-buy.herokuapp.com/product/' + productKey)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productKey])
    return (
        <div className="product">
            <div className="container">
                <div className="card-2">
                    <Grid container>
                        <div className="wrapper">
                            <Grid item lg={4}>
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={image} /></div>
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li className="active"><a><img src={image} /></a></li>
                                </ul>
                            </Grid>

                            <Grid item lg={6}>
                                <div className="details-2">
                                    <h3 className="product-title">{name}</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <span className="review-no">41 reviews</span>
                                    </div>
                                    <h5 className="product-description">
                                        Product Distinction:<p>
                                            {description}
                                        </p>
                                    </h5>

                                    <h4 className="price">current price: <span>${price}</span></h4>
                                    <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                    <h5 className="sizes">sizes:
							<span className="size"> <Tooltip title="Small" placement="top">
                                            <Fab color="primary">
                                                S
                                            </Fab>
                                        </Tooltip></span>
                                        <span className="size"> <Tooltip title="Medium" placement="top">
                                            <Fab color="primary">
                                                m
                                            </Fab>
                                        </Tooltip></span>

                                        <span className="size"> <Tooltip title="Large" placement="top">
                                            <Fab color="primary">
                                                l
                                            </Fab>
                                        </Tooltip></span>
                                        <span className="size"><Tooltip title="Extra Large" placement="top">
                                            <Fab color="primary">
                                                xl
                                            </Fab>
                                        </Tooltip></span>
                                    </h5>
                                    <h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                        <span className="color green"></span>
                                        <span className="color blue"></span>
                                    </h5>
                                    <div className="action">
                                        <Link to={`/product/${_id}`}>
                                            <button className="add-to-cart " type="button">
                                                Buy Now</button>
                                        </Link>

                                    </div>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;