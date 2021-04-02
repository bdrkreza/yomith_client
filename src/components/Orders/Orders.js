
import { useContext, useEffect, useState } from 'react';
import './Orders.css'
import { UserContext } from '../../App';

import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import OrderCard from '../OrderCard/OrderCard';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Orders = () => {
    const classes = useStyles();
    const [LoggedInUser,] = useContext(UserContext);
    const [loading, setLoading] = useState(null)
    const [orders, setOrders] = useState([]);


    console.log(orders)
    useEffect(() => {
        fetch('https://yomith-buy.herokuapp.com/orderProducts?email=' + LoggedInUser.email)
            .then(res => res.json())
            .then((data) => {
                setOrders(data);
                setLoading(data);
            })
    }, [])

    return (
        <div className="order-body">
            <table className="Order-table">
                <thead>
                    <tr>

                        <th><h1>Product Name</h1></th>
                        <th><h1>Quantity</h1></th>
                        <th><h1>Price</h1></th>
                        <th><h1>Item</h1></th>
                        <th><h1>Time</h1></th>
                    </tr>
                </thead>
            </table>
            {
                loading ?
                    <div>
                        {
                            orders.map((product) => <OrderCard products={product} />)
                        }
                    </div> :
                    <div className={classes.root}>
                        <LinearProgress />
                        <LinearProgress color="secondary" />
                    </div>
            }
        </div>
    );
};

export default Orders;