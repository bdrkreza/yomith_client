import { Link } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import './AddProduct.css'

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            description: data.description,
            quantity: data.quantity,
            image: imageUrl
        }

        fetch('https://yomith-buy.herokuapp.com/addProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Product Upload successfully')
                }
            })
    }


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '1c06bb79531d597a437c43887a44ad81')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <div class="sidebar2">
                <div class="sidenav2">
                    <Link href="/manageProduct">Manage Product</Link>
                    <Link href="/addProduct">Add Product</Link>
                    <Link href="/editProduct">Edit Product</Link>

                </div>


                <form class="form-style-9" onSubmit={handleSubmit(onSubmit)}>
                    <ul>
                        <li>
                            <input type="text" name="name" ref={register} class="field-style field-split align-left" placeholder="Enter Product Name" required />
                            <input type="text" name="price" ref={register} class="field-style field-split align-right" placeholder="Enter Product Price" required />

                        </li>
                        <li>
                            <input type="text" name="quantity" ref={register} class="field-style field-split align-left" placeholder="Quantity" required />
                            <input type="text" name="weight" ref={register} class="field-style field-split align-right" placeholder="Enter Product weight" />
                        </li>
                        <li>
                            <textarea name="description" ref={register} class="field-style" placeholder="Product Description" required />
                        </li>
                        <li>
                            <label>
                                <input type="file" name="exampleRequired" class="field-style field-full align-none" onChange={handleImageUpload} required />
                            </label>

                        </li>
                        <li class="button">
                            <Button
                                type="submit" value="Save"
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<SaveIcon />}
                            >Save</Button>
                        </li>
                    </ul>
                </form>
            </div>
        </>
    );
};

export default AddProducts;