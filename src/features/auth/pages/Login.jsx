import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase';

import { useState } from 'react';

import styles from './auth.module.scss';
import Button from '~/components/Button/Button';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';
import { BackBtnIcon, FaceBookIcon, GoogleIcon } from '~/components/Icons/Icon';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password) {
            setErrorMsg('Fill all fields!!');
            return;
        }
        setErrorMsg('');

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                setErrorMsg('User name is already!!');
                console.log(err);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <PopperWrapper className={cx('popper_wrapper')}>
                <div className={cx('header')}>
                    <Link to="/" className={cx('back_btn')}>
                        <BackBtnIcon />
                    </Link>
                    <h2 className={cx('title')}>Login</h2>
                </div>
                <div className={cx('social_btn')}>
                    <Button className={cx('google_btn')} social>
                        <span>
                            <GoogleIcon />
                        </span>
                        <span className={cx('label_btn')}>Google</span>
                    </Button>
                    <Button className={cx('facebook_btn')} social>
                        <span>
                            <FaceBookIcon />
                        </span>
                        <span className={cx('label_btn')}>FaceBook</span>
                    </Button>
                </div>
                <form className="info_form" onSubmit={(e) => handleLoginSubmit(e)}>
                    <div className={cx('email')}>
                        <label htmlFor="email_id">Email Address</label>
                        <input
                            type="email"
                            id="email_id"
                            placeholder="Enter your email"
                            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    </div>

                    <div className={cx('password')}>
                        <label htmlFor="password_id">Password</label>
                        <input
                            type="password"
                            id="password_id"
                            placeholder="Enter your password"
                            onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
                        />
                    </div>

                    <div className={cx('btn_wrapper')}>
                        <span className={cx('error_msg')}>{errorMsg}</span>
                        <Button small primary className={cx('continue_btn')}>
                            Continue
                        </Button>
                    </div>
                </form>
                <div className={cx('footer')}>
                    <span>Don't have an account ?</span>
                    <Link to="/register">Register</Link>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default Login;
