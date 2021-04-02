
import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { name, image, price, _id } = product;

    return (
        <div>
            <div className="card">
                <figure>
                    <img src={image} alt="" />
                </figure>

                <section className="details">
                    <div className="min-details">
                        <h1>{name}</h1>
                        <h1 className="price">${price}</h1>
                    </div>

                    <div className="options">
                        <div className="options-size">
                            <h1>sizes</h1>
                            <ul>
                                <li>xs</li>
                                <li>s</li>
                                <li>m</li>
                                <li>l</li>
                                <li>xl</li>
                            </ul>
                        </div>

                        <div className="options-colors">
                            <h1>colors</h1>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-mr">
                        <Link to={`/productView/${_id}`} className="btn-position">View</Link>

                        <Link to={`/product/${_id}`} className="btn">Buy Now</Link>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Products;