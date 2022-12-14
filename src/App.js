import './App.css';
import Navbar from './components/Navbar/Navbar';

import { Routes, Route, HashRouter } from 'react-router-dom';

import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



import React, { Suspense } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import {initializeApp}  from "../src/redux/app-reducer"
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

// const OtherComponent = React.lazy(() => import('./OtherComponent')); 
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profail/ProfileContainer'));




class App extends React.Component  {

  componentDidMount() {

    this.props.initializeApp()
}

  render () {

if (!this.props.initialized) {
  return <Preloader/>
}

  return (
  
      <div className="app-wrapper" >
        
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          
        <Suspense fallback={<div>LOADING...</div>}>
          <Routes>
            <Route path="/" exact element={<div> Hello, this is my little project. Welcome! </div>} />
            {/* <Route path="/" element={<Navigate to="/profile"/>}/>       Делает переход на страницу пользователя сразу же при запуске приложения */}
            <Route path="/profile/*" exact element={<ProfileContainer />} />           
            <Route path="/profile/:userId" exact element={ <ProfileContainer />} />            
            <Route path="/dialogs/*" exact element={ <DialogsContainer />} />           
            <Route path="/news" exact element={ <News />} />
            <Route path="/music" exact element={<Music />} />
            <Route path="/settings" exact element={<Settings />} />
            <Route path="/users" exact element={<UsersContainer />} />
            <Route path="/friends" exact element={ <Friends />} />
            <Route path="/login" exact element={ <Login />} />
            <Route path="*" element={<div> Error 404  O-O-O-PS, something wrong. Don't know about this page :( </div>}/>           
          </Routes>
          </Suspense>
        </div>
      </div>
  )
  }
}

const mapStateToprops = (state) => {
  return {
    initialized: state.app.initialized
  }
}

// export default compose( connect(mapStateToprops, {initializeApp}) ) (App);


const AppContainer = compose( connect(mapStateToprops, {initializeApp}) ) (App);

const MainApp = (props) => {


  return  <HashRouter>
  <Provider store={store}>
  <AppContainer />
  </Provider>
  </HashRouter>
}


export default MainApp; 
