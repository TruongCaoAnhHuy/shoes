import classNames from 'classnames/bind';
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className='container'>
                <h1>Footer</h1>
            </div>
        </footer>
    )
}

export default Footer;