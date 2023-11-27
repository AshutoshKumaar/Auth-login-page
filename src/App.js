import React, { useState } from 'react';
import UserSignup from './Componets/UserSignup.jsx'
import UserLogin from './Componets/UserLogin.jsx';
// import Userdash from './Componets/Userdash.jsx';

import './App.css';

function App() {
  const [checkLogged, setcheckLogged] = useState(false)

  const handleSubmit = () => {
    setcheckLogged(!checkLogged)
  }

  return (
    <div className="App">
      {
        checkLogged ? <UserSignup /> : <UserLogin />
      }
      <div>
        <button onClick={handleSubmit}>{checkLogged ? 'Login' : 'Sign-up'}</button>
      </div>


    </div>
  );
}

export default App;
