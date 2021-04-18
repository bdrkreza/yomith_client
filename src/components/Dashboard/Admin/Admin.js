
import React from 'react';
import './Admin.css';
import { Button, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const Admin = () => {

    return (
        <>
            <div class="sidebar">
                <div class="sidebar2">
                    <div class="sidenav2">

                    </div>
                    <NavLink to="admin/addProduct"><Button color="inherit">Home</Button></NavLink>
                    <Link to="admin/manageProduct">Manage Product</Link>


                    <div class="main">
                        <h1>WelCome admin page</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;