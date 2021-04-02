import { Link } from '@material-ui/core';
import React from 'react';
import './EditProduct.css'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const EditProduct = () => {
    return (
        <div>
            <div class="sidebar2">
                <div class="sidenav2">
                    <Link href="/manageProduct">Manage Product</Link>
                    <Link href="/addProduct">Add Product</Link>
                    <Link href="/editProduct">Edit Product</Link>

                </div>
                <div class="main">

                </div>

            </div>

        </div>
    );
};

export default EditProduct;