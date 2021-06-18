import Form from '../components/Form';
import SignupLink from '../components/SignupLink';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const onSignupClick = () => {
        history.push('/signup');
    }

    const onSubmitForm = (email, pwd) => async () => {
        const body = {
            email,
            password: pwd,
        };

        let res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (res.status === 200) {
            history.push('/users');
        } else {
            const msg = await res.json();
            console.error(msg);
        }

    }

    return (
        <div className='login' >
            <h1>Log In</h1>
            <hr />
            <Form
                formType='login'
                submitForm={onSubmitForm}
            />
            <SignupLink onClick={onSignupClick} />
        </div>
    );
}

export default Login;
