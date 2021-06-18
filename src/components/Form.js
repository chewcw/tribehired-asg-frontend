import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Submit from './Submit';
import useValidate from '../hooks/useValidate';
import { isUpperCase, isAlphanumeric } from '../utils/string';

const Form = props => {
    const {
        formType,
        submitForm,
    } = props;

    /* ------------------------------- basic field ------------------------------ */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdRe, setPwdRe] = useState('');

    const onChange = setFunc => evt => {
        setFunc(evt.target.value);
    }

    /* ------------------------------- validation ------------------------------- */

    const nameValidated = useValidate([
        name,
    ]);

    const emailValidated = useValidate([
        email.includes('@'),
    ]);

    const pwdValidated = useValidate([
        pwd,
        pwd.length >= 12,
        pwd.split('').filter(p => isUpperCase(p)).length > 0,
        pwd.split('').filter(p => isAlphanumeric(p)).length > 0,
    ]);

    const pwdReValidated = useValidate([
        pwdRe,
        pwdRe === pwd,
    ]);

    /* --------------------------------- button --------------------------------- */
    const [disableBtn, setDisableBtn] = useState(true);
    useEffect(() => {
        if (formType === 'registration') {
            if (emailValidated &&
                pwdValidated &&
                pwdReValidated &&
                nameValidated) {
                setDisableBtn(false);
                return;
            }
        }

        if (formType === 'login') {
            if (email && pwd) {
                setDisableBtn(false);
                return;
            }
        }

        setDisableBtn(true);

    }, [emailValidated,
        pwdValidated,
        pwdReValidated,
        nameValidated,
        formType,
        email,
        pwd,
    ]);

    const render = () => {
        if (formType === 'login') {
            return (
                <form>
                    <Input
                        label='Email'
                        type='email'
                        show={true}
                        validated={emailValidated}
                        showValidated={false}
                        value={email}
                        onChange={onChange(setEmail)}
                    />
                    <Input
                        label='Password'
                        type='password'
                        show={true}
                        validated={pwdValidated}
                        showValidated={false}
                        value={pwd}
                        onChange={onChange(setPwd)}
                    />
                    <Submit
                        disableBtn={disableBtn}
                        onClick={submitForm(email, pwd)}
                    />
                </form>
            );
        }

        if (formType === 'registration') {
            return (
                <form onSubmit={submitForm}>
                    <Input
                        label='Name'
                        type='text'
                        show={true}
                        validated={nameValidated}
                        showValidated={true}
                        value={name}
                        onChange={onChange(setName)}
                    />
                    <Input
                        label='Email'
                        type='email'
                        show={true}
                        validated={emailValidated}
                        showValidated={true}
                        value={email}
                        onChange={onChange(setEmail)}
                    />
                    <Input
                        label='Password'
                        type='password'
                        show={true}
                        validated={pwdValidated}
                        showValidated={true}
                        value={pwd}
                        onChange={onChange(setPwd)}
                        instructions={['min. 12 characters',
                            'at least one upper case alphabet',
                            'at least one non-alphanumeric character']}
                    />
                    <Input
                        label='Re-enter Password'
                        type='password'
                        show={true}
                        validated={pwdReValidated}
                        showValidated={true}
                        value={pwdRe}
                        onChange={onChange(setPwdRe)}
                    />
                    <Submit
                        disableBtn={disableBtn}
                        onClick={submitForm(email, pwd, name)}
                    />
                </form>
            );
        }
    }

    return render();
};

Form.propTypes = {
    formType: PropTypes.oneOf(['login', 'registration']),
    submitForm: PropTypes.func,
}

export default Form;
