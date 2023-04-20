import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';
import Button from '~/components/Button/Button';
import { BackBtnIcon, FaceBookIcon, GoogleIcon } from '~/components/Icons/Icon';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
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
                <form className="info_form">
                    <div className={cx('email')}>
                        <label htmlFor="email_id">Email Address</label>
                        <input id="email_id" placeholder="Enter your email" />
                    </div>
                    <div className={cx('password')}>
                        <label htmlFor="password_id">Password</label>
                        <input id="password_id" placeholder="Enter your password" />
                    </div>
                    <div className={cx('btn_wrapper')}>
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
