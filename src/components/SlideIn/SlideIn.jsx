import PropTypes from 'prop-types';
import './SlideIn.css';
const SlideIn = ({ children }) => {
    return <div className="slide-in">{children}</div>;
};

SlideIn.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is passed
};

export default SlideIn;