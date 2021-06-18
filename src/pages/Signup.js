import Form from '../components/Form';
import LoginLink from '../components/LoginLink';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();

    const onLoginLinkClick = () => {
        history.push('/');
    }

    const onSubmitForm = (email, pwd, name) => async () => {
        const body = {
            email,
            username: name,
            password: pwd,
        };

        let res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (res.status === 200) {
            history.push('/');
        } else {
            const msg = await res.json();
            console.error(msg);
        }
    }

    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
            <hr />
            <Form
                formType='registration'
                submitForm={onSubmitForm}
            />
            <LoginLink onClick={onLoginLinkClick} />
        </div>
    );
}

export default SignUp;
