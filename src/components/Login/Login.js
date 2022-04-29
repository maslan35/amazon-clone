import React, { useState } from 'react'
import { Link, useNavigate   } from 'react-router-dom'
import { auth } from '../../firebase';
import './Login.css'

const Login = () => {
    const navigate  = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/');
        }).catch((e) => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/');
        }).catch((e) => alert(e.message));
    }
  return (
    <div className='login'>
        <Link to="/">
            <img className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
            />
        </Link>
        <div className='login_container'>
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" />

                <h5>Password</h5>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" />

                <button onClick={Signin} type="submit" className='login_signInButton'>
                    Sign In
                </button>
            </form>

            <p>
                By continuing, you agree to Amazon's
                 Conditions of Use and Privacy Notice.
            </p>
            <button onClick={register} className='login_registerButton'>
                Create your Amazon Account
            </button>
        </div>
    </div>
  )
}

export default Login