import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ListUsers from './pages/ListUsers';
import './styles.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/users' component={ListUsers} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
