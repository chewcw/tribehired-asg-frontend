import PropTypes from 'prop-types';

const Submit = props => {
    const { disableBtn, onClick } = props;
    return (
        <div>
            <hr />
            <button
                className="submit-button"
                type="submit"
                disabled={disableBtn}
                onClick={onClick}
            >
                Submit
            </button>
        </div>
    );
};

Submit.propTypes = {
    disableBtn: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Submit;
