import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '~/components/Button/Button';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';
import { DeleteIcon, MinusIcon, PlusIcon } from '~/components/Icons/Icon';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrease, GetTotal, Increase, RemoveCart } from '~/redux/cartSlice';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    const { carts, total } = useSelector((item) => item.user);
    console.log(carts);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(GetTotal);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col l-4">
                    <PopperWrapper className={cx('cart_info')}>
                        <p className={cx('title')}>
                            Bạn đang có <span>{carts.length}</span> sản phẩm trong giỏ hàng
                        </p>
                        <div className={cx('price')}>
                            <p className={cx('price_label')}>Thành tiền</p>
                            <h2 className={cx('price_value')}>{total}</h2>
                        </div>
                        <Button primary large className={cx('btn_order')}>
                            Đặt Hàng
                        </Button>
                        <Button primary large className={cx('btn_continue')}>
                            Tiếp tục mua hàng
                        </Button>
                    </PopperWrapper>
                </div>
                <div className="col l-8">
                    <ul className={cx('cart_list')}>
                        {carts?.map((product) => (
                            <li className={cx('cart_item')} key={product.id}>
                                <img className={cx('img')} src={product.image} alt="cart_item" />
                                <div className={cx('cart_item_info')}>
                                    <p>{product.desc}</p>
                                    <p>{product.price}</p>
                                    <div className={cx('quantity')}>
                                        <span
                                            className={cx('quantity_btn')}
                                            onClick={() => dispatch(Decrease(product.id))}
                                        >
                                            <MinusIcon />
                                        </span>
                                        <span className={cx('quantity_input')}>{product.quantity}</span>
                                        <span
                                            className={cx('quantity_btn')}
                                            onClick={() => dispatch(Increase(product.id))}
                                        >
                                            <PlusIcon />
                                        </span>
                                    </div>
                                    <span className={cx('delete')} onClick={() => dispatch(RemoveCart(product.id))}>
                                        <DeleteIcon />
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cart;
