import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import TippyHeadless from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/image';
import Button from '~/components/Button';
import { useEffect, useRef, useState } from 'react';
import { CartIcon, LogOutIcon, SearchIcon, UserIcon } from '~/components/Icons/Icon';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    const [isShrink, setIsShrink] = useState(false);

    const menuRef = useRef(null);
    const mainNav = [
        {
            id: 1,
            title: 'Trang chủ',
            path: '/',
        },
        {
            id: 2,
            title: 'Sản phẩm',
            path: '/catalog',
        },
    ];

    const menuToggle = () => {
        menuRef.current.classList.toggle('active');
    };

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
    }, []);

    return (
        <header className={`${cx('wrapper')} ${isShrink ? cx('header-shrink') : ''}`}>
            <div ref={menuRef} className={`${cx('container')} container`}>
                <ul className={cx('nav')}>
                    {mainNav.map((nav) => (
                        <li key={nav.id} className={`${cx('nav-item')}`} onClick={menuToggle}>
                            <NavLink to={nav.path} className={({ isActive }) => cx(`${isActive ? 'active' : ''}`)}>
                                {nav.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('search')} to="/search">
                                <SearchIcon />
                            </Button>
                            <Button className={cx('cart')} to="/cart">
                                <CartIcon />
                            </Button>
                            <span className={cx('quality')}>0</span>
                            <TippyHeadless
                                interactive
                                hideOnClick={false}
                                delay={[0, 1500]}
                                placement="bottom-start"
                                zIndex={99999}
                                appendTo={document.body}
                                render={(attrs) => (
                                    <PopperWrapper>
                                        <div className={cx('user_wrapper')} tabIndex="-1" {...attrs}>
                                            <div className={cx('user_content')}>
                                                <img src={images.user} alt="user" />
                                                <div className={cx('user_info')}>
                                                    <h3 className={cx('user-name')}>Anh Huy</h3>
                                                    <p className={cx('user-date')}>25/7/2007</p>
                                                </div>
                                            </div>
                                            <Button primary leftIcon={<LogOutIcon />}>
                                                Log out
                                            </Button>
                                        </div>
                                    </PopperWrapper>
                                )}
                            >
                                <button className={cx('user')}>
                                    <UserIcon />
                                </button>
                            </TippyHeadless>
                        </>
                    ) : (
                        <>
                            <Button to="/login">Đăng nhập</Button>
                            <Button primary to="/register">
                                Đăng ký
                            </Button>
                        </>
                    )}
                </div>
            </div>
            <div className={`${cx('logo')} ${isShrink ? cx('logo-shrink') : ''}`}>
                <img src={images.logo} alt="logo" />
            </div>
        </header>
    );
}

export default Header;
