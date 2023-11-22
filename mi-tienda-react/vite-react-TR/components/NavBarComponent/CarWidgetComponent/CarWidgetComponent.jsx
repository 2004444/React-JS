import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CarWidgetComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>10</span>
        </div>
    )
}

export default CarWidgetComponent;