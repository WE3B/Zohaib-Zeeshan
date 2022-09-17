import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './components/signUp';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignInSide from './components/signIn';
import { Navigate } from 'react-router-dom';
import AddAnime from './components/addAnime';
import HomePage from './components/HomePage';
import Anime from './components/Anime'
import UpdateAnime from './components/updateAnime';
const root = ReactDOM.createRoot(document.getElementById('root'));
const user = localStorage.getItem("token");
root.render(
  <Router>
    <Routes>
      {user && <Route exact path="/" element={<App/>} />}
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/signIn" element={<SignInSide/>} />
      <Route path="/"exact element={<Navigate replace to ="/SignIn"/>} />
      <Route path="/addAnime" element={<AddAnime/>}/>
      <Route path="/HomePage" element={<HomePage/>}/>
      <Route path="/anime/:id" element={<Anime/>}/>
      <Route path="/updateAnime/:id" element={<UpdateAnime/>}/>
    </Routes>
</Router>
);
reportWebVitals();
