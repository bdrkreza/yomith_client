import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../AuthContext/firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import logo from '../../img/images.png';
import './Login.css'


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name } = LoggedInUser;

    const googleHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const SignInUser = {
                    email: email,
                    name: displayName
                }
                setLoggedInUser(SignInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });

    }
    return (
        <div className="login-body">
            <h1>This is Login {name} </h1>
            <Button
                onClick={googleHandler}
                variant="contained"
                color="primary"
                startIcon={<LockIcon />}> Continue With google<img className="google-icon" src={logo} alt="" /></Button>

        </div>
    );
};

export default Login;