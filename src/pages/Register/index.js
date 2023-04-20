import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Register.module.scss';
import Button from '~/components/Button/Button';
import { BackBtnIcon, FaceBookIcon, GoogleIcon } from '~/components/Icons/Icon';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <PopperWrapper className={cx('popper_wrapper')}>
                <div className={cx('header')}>
                    <Link to="/" className={cx('back_btn')}>
                        <BackBtnIcon />
                    </Link>
                    <h2 className={cx('title')}>Register</h2>
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
                    <div className={cx('c_password')}>
                        <label htmlFor="c_password_id">Confirm Password</label>
                        <input id="c_password_id" placeholder="Confirm your password" />
                    </div>
                    <div className={cx('phone')}>
                        <label htmlFor="phone_id">Phone Number</label>
                        <input id="phone_id" placeholder="Enter your phone numbers" />
                    </div>
                    <div className={cx('btn_wrapper')}>
                        <Button small primary className={cx('continue_btn')}>
                            Continue
                        </Button>
                    </div>
                </form>
                <div className={cx('footer')}>
                    <span>Already have an account ?</span>
                    <Link to="/login">Login</Link>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default Register;
