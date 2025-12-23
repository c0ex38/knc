import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__container">
                <img src="/404.png" alt="Sayfa Bulunamadı" className="not-found__image" />
                <h1 className="not-found__title">Sayfa Bulunamadı</h1>
                <p className="not-found__description">
                    Bu sefer göremedik.
                </p>
                <Link to="/" className="not-found__button">
                    Ana Sayfaya Dön
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
