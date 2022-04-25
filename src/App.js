//Third party imports
import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

//CSS imports
import './CSS/index.css'

//React Route Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"

//Different Routes
import Home from './home'
import Profile from './profile'
import Login_Signup from './login_signup';
import Navigation from './navigation';
import Logout from './logout';
import Create_Review from './create_review';
import Edit_Profile from './edit_profile';
import MovieDetails from "./review-details";

//Reducers
import login_signup from './reducers/login_signup_reducer';
import navigationTab from './reducers/navigation_reducer';
import loginLogoutReducer from './reducers/login_logout_reducer';
import userReducer from './reducers/user_reducer';

//Reducers imports
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
const reducers = combineReducers({ login_signup, loginLogoutReducer, navigationTab, userReducer })
const store = createStore(reducers);

//App Function
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container'>
          <div className='row'>
            <Navigation />
            <Routes>
              <Route path='/'
                element={<Home />} />

              {/*<Route path='/:searchString'*/}
              {/*       element={<Home />}/>*/}

              <Route path='/details/:imdbID'
                     element={<MovieDetails />}/>

              <Route path='/profile'
                element={<Profile />} />

              <Route path='/login_signup'
                element={<Login_Signup />} />

              <Route path='/logout'
                element={<Logout />} />

              <Route path='/create_review'
                element={<Create_Review />} />

              <Route path='/edit_profile'
                element={<Edit_Profile />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter >
    </Provider>

  );
}

export default App;
