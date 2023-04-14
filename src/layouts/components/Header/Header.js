import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/image';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [isShrink, setIsShrink] = useState(false);
    const [isActive, setIsACtive] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsShrink(true);
            } else {
                setIsShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header className={`${cx('wrapper')} ${isShrink ? cx('header-shrink') : ''}`}>
            <div className={`${cx('container')} container`}>
                <ul className={cx('nav')}>
                    <li className={`${cx('nav-item')} ${isActive ? cx('active') : ''}`}>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to="/catalog">Sản phẩm</Link>
                    </li>
                </ul>
                <div className={cx('action')}>
                    <Button to="/login">Đăng nhập</Button>
                    <Button primary to="/register">
                        Đăng ký
                    </Button>
                </div>
            </div>
            <div className={`${cx('logo')} ${isShrink ? cx('logo-shrink') : ''}`}>
                <img src={images.logo} alt="logo" />
            </div>
        </header>
    );
}

export default Header;
