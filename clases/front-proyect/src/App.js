import logo from './logo.svg';
import './App.css';
import Rutas from './Rutas';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Profile';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header>
        <Rutas></Rutas>
        {
          isAuthenticated? (
            <><LogoutButton></LogoutButton><Profile></Profile></>
          ) : (
            <><LoginButton></LoginButton></>
          )
        }
      </header>
    </div>
  );
}

export default App;
