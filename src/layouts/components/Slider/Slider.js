import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import images from '~/assets/image';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <img src={images.slider1} alt="slider1" />
        </div>
    );
}

export default Slider;
