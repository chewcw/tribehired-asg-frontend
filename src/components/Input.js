import PropTypes from 'prop-types';

const Input = props => {
    const {
        label,
        type,
        show,
        validated,
        onBlur,
        value,
        onChange,
        instructions,
        showValidated,
        onKeyDown,
    } = props;

    const showInstruction = () => {
        if (instructions) {
            return (
                <div className='instruction-msg'>
                    {instructions.map((instruction, i) => (
                        <div key={`instruction-${i}`}>
                            {instruction}
                        </div>
                    ))}
                </div>
            );
        }
    }

    return (
        <div className={show ? 'field field-in' : 'field'}>
            <label className='label'>{label}
                <i
                    className={showValidated && validated
                        ? 'fa fa-check animate-check'
                        : ''}
                    aria-hidden='true'
                ></i>
            </label>
            <br />
            <input
                className='input'
                type={type}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            {showInstruction()}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    show: PropTypes.bool,
    validated: PropTypes.bool,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    instructions: PropTypes.arrayOf(PropTypes.string),
    showValidated: PropTypes.bool,
}

export default Input;
