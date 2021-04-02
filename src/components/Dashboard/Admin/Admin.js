
import React from 'react';
import './Admin.css';
import { Link } from '@material-ui/core';


const Admin = () => {

    return (
        <>
            <div class="sidebar">
                <div class="sidenav">

                    <Link href="/manageProduct">Manage Product</Link>
                    <Link href="/addProduct">Add Product</Link>
                    <Link href="/editProduct">Edit Product</Link>

                </div>

                <div class="main">
                    <h1>WelCome admin page</h1>
                </div>

            </div>

        </>
    );
};

export default Admin;