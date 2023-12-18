import './Login.css'
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../actions/AuthActions";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg'

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
export const Login = () => {
    const captchaRef = useRef()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(null)
    const history = useNavigate()

    const handleChange = value => {
        setAuth(value)
    };

    const asyncScriptOnLoad = () => { };

    // validate login form
    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return false;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return false;
        }

        return true;
    }

    const handleSubmit = (event) => {
        const userData = {
            email,
            password,
            auth
        };

        if (validateForm()) {
            dispatch(loginSuccess(userData));
            history('/user-details', { state: email })
        }
    };

    return (<div className="login-container">
        <span>Login with</span>
        <div className="social-login">
            <div className="social-icons">
                <a href="#" className="facebook-icon"><img src={logo} alt="Login with Facebook" /></a>
                <a href="#" className="facebook-icon"><img src={logo} alt="Login with Github" /></a>
                <a href="#" className="gmail-icon"><img src={logo} alt="Login with Gmail" /></a>
            </div>
        </div>
        <div className={'flex'}>
            <div className={'log-border'}></div>
            <span className={'log-border-or'}>OR</span>
            <div className={'log-border'}></div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="email"
                    id="username"
                    name="username"
                    value={email} placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />            </div>
            <div className="input-group">
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password} placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <button type="submit" disabled={email === "" || password === "" || auth === null}>Login</button>
            </div>
            <div className="input-group">
                <ReCAPTCHA
                    style={{ display: "inline-block" }}
                    size="normal"
                    theme="light"
                    ref={captchaRef}
                    sitekey={TEST_SITE_KEY}
                    onChange={handleChange}
                    asyncScriptOnLoad={asyncScriptOnLoad}
                />
            </div>
        </form>
    </div>
    )
}