import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import Button from '~/components/Button/Button';
import { slideItems } from '~/assets/fakedata/SliderAPI';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <Carousel
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                autoPlay
                interval="1700"
                emulateTouch
            >
                {slideItems.map((slideItem) => (
                    <div key={slideItem.id} className={cx('item')}>
                        <div className={cx('content')}>
                            <div className={`${cx('title')} ${cx(slideItem.color)}`}>
                                <span>{slideItem.title}</span>
                            </div>
                            <div className={cx('description')}>
                                <span>{slideItem.description}</span>
                            </div>
                            <Button className={cx(slideItem.color)} primary large>
                                Xem chi tiết
                            </Button>
                        </div>
                        <img className={cx('img')} src={slideItem.image} alt="slider1" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;
