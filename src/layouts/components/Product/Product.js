import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Product.module.scss';
import Button from '~/components/Button/Button';
import Banner from '../Banner/Banner';
import { productTrends, productNews, productPopulars } from '~/assets/fakedata/product';
import { AddCart } from '~/redux/cartSlice';

import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function Product() {
    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <p>Top sản phẩm</p>
            </div>
            <div className={cx('product')}>
                <div className="row">
                    {productTrends.map((productTrend) => (
                        <div className="col l-3" key={productTrend.id}>
                            <div className={cx('product_item')}>
                                <Link to={`catalog/@${productTrend.pPath}`} className={cx('product_info')}>
                                    <div className={cx('product_img')}>
                                        <img src={productTrend.image} alt="product" />
                                    </div>
                                    <p className={cx('description')}>{productTrend.desc}</p>
                                    <div className={cx('price_wrapper')}>
                                        <h4 className={cx('price')}>
                                            {productTrend.price.slice(0, 3) + ',' + productTrend.price.slice(3)}
                                        </h4>
                                        <h4 className={`${cx('price')} ${cx('price_sale')}`}>
                                            {productTrend.sale.slice(0, 3) + ',' + productTrend.sale.slice(3)}
                                        </h4>
                                    </div>
                                </Link>
                                <div className={cx('product_btn')}>
                                    <Button primary onClick={() => dispatch(AddCart(productTrend))}>
                                        Chọn mua
                                    </Button>
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
                    {productNews.map((productNew) => (
                        <div className="col l-3" key={productNew.id}>
                            <div className={cx('product_item')}>
                                <Link to={`catalog/@${productNew.pPath}`} className={cx('product_info')}>
                                    <div className={cx('product_img')}>
                                        <img src={productNew.image} alt="product" />
                                    </div>
                                    <p className={cx('description')}>{productNew.desc}</p>
                                    <div className={cx('price_wrapper')}>
                                        <h4 className={cx('price')}>
                                            {productNew.price.slice(0, 3) + ',' + productNew.price.slice(3)}
                                        </h4>
                                        <h4 className={`${cx('price')} ${cx('price_sale')}`}>
                                            {productNew.sale.slice(0, 3) + ',' + productNew.sale.slice(3)}
                                        </h4>
                                    </div>
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
                    {productPopulars.map((productPopular) => (
                        <div className="col l-3" key={productPopular.id}>
                            <div className={cx('product_item')}>
                                <Link to={`catalog/@${productPopular.pPath}`} className={cx('product_info')}>
                                    <div className={cx('product_img')}>
                                        <img src={productPopular.image} alt="product" />
                                    </div>
                                    <p className={cx('description')}>{productPopular.desc}</p>
                                    <div className={cx('price_wrapper')}>
                                        <h4 className={cx('price')}>
                                            {productPopular.price.slice(0, 3) + ',' + productPopular.price.slice(3)}
                                        </h4>
                                        <h4 className={`${cx('price')} ${cx('price_sale')}`}>
                                            {productPopular.sale.slice(0, 3) + ',' + productPopular.sale.slice(3)}
                                        </h4>
                                    </div>
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
