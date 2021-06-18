import PropTypes from 'prop-types';

const LoginLink = props => {
    const { onClick } = props;
    return (
        <div className="signup-link">
            <p className="in-out">
                Already have an account? {" "}
                <a href="#" onClick={onClick}>Log In Here</a>
            </p>
        </div>
    );
};

LoginLink.propTypes = {
    onClick: PropTypes.func,
}

export default LoginLink;
