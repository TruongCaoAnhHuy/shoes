import classNames from 'classnames/bind';
import styles from './Cartlist.module.scss';
import { product } from '~/assets/fakedata/product';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Cartlist({ className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className="row">
                {product.map((product) => (
                    <div className="col l-4" key={product.id}>
                        <div className={cx('product_item')}>
                            <Link to={`@${product.pPath}`} className={cx('product_info')}>
                                <div className={cx('product_img')}>
                                    <img src={product.image} alt="product" />
                                </div>
                                <p className={cx('description')}>{product.desc}</p>
                                <h4 className={cx('price')}>
                                    {product.price.slice(0, 3) + ',' + product.price.slice(3)}
                                </h4>
                            </Link>
                            <div className={cx('product_btn')}>
                                <Button primary>Chọn mua</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cartlist;
