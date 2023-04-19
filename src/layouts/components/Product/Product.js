import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';
import { product, productPopulars } from '~/assets/fakedata/product';
import Banner from '../Banner/Banner';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <p>Top sản phẩm</p>
            </div>
            <div className={cx('product')}>
                <div className="row">
                    {productPopulars.map((product) => (
                        <div className="col l-3" key={product.id}>
                            <div className={cx('product_item')}>
                                <Link to={`catalog/@${product.pPath}`} className={cx('product_info')}>
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
            <div className={cx('title')}>
                <p>Sản phẩm mới</p>
            </div>
            <div className={cx('product')}>
                <div className="row">
                    {product.map((product) => (
                        <div className="col l-3" key={product.id}>
                            <div className={cx('product_item')}>
                                <Link to={`catalog/@${product.pPath}`} className={cx('product_info')}>
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
            <Banner />
            <div className={cx('title')}>
                <p>Phổ biến</p>
            </div>
            <div className={cx('product')}>
                <div className="row">
                    {product.map((product) => (
                        <div className="col l-3" key={product.id}>
                            <div className={cx('product_item')}>
                                <Link to={`catalog/@${product.pPath}`} className={cx('product_info')}>
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
        </div>
    );
}

export default Product;
