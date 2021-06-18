import PropTypes from 'prop-types';

const SignupLink = props => {
    const { onClick } = props;

    return (
        <div className="signup-link">
            <p className="in-out">
                Don't have an account?
                <a href="#" onClick={onClick}>Sign Up Here</a>
            </p>
        </div>
    );
};

SignupLink.propTypes = {
    onClick: PropTypes.func,
}

export default SignupLink;
