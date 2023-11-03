import React from 'react';
import {auth} from './service/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './service/login';
import Mainpage from './service/Main';

function App() {
  const [user] = useAuthState(auth);
  return (
      user ? <Mainpage/> : <Login/>
  );
}

export default App;
