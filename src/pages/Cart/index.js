import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '~/components/Button/Button';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';
import images from '~/assets/image';
import { DeleteIcon, MinusIcon, PlusIcon } from '~/components/Icons/Icon';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    const [quantity, setQuantity] = useState(1);

    const handlePlus = () => {
        setQuantity(quantity + 1);
    };

    const handleMinus = () => {
        if (quantity <= 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col l-4">
                    <PopperWrapper className={cx('cart_info')}>
                        <p className={cx('title')}>
                            Bạn đang có <span>0</span> sản phẩm trong giỏ hàng
                        </p>
                        <div className={cx('price')}>
                            <p className={cx('price_label')}>Thành tiền</p>
                            <h2 className={cx('price_value')}>0</h2>
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
                        <li className={cx('cart_item')}>
                            <img className={cx('img')} src={images.activeShoesXanhLa} alt="cart_item" />
                            <div className={cx('cart_item_info')}>
                                <p>Giày Active Xanh lá</p>
                                <p>194,000</p>
                                <div className={cx('quantity')}>
                                    <span className={cx('quantity_btn')} onClick={handleMinus}>
                                        <MinusIcon />
                                    </span>
                                    <span className={cx('quantity_input')}>{quantity}</span>
                                    <span className={cx('quantity_btn')} onClick={handlePlus}>
                                        <PlusIcon />
                                    </span>
                                </div>
                                <span className={cx('delete')}>
                                    <DeleteIcon />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cart;
