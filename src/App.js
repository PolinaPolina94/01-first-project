import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profail/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import {initializeApp}  from "../src/redux/app-reducer"
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';




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
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" exact element={<DialogsContainer />} />
            <Route path="/news" exact element={<News />} />
            <Route path="/music" exact element={<Music />} />
            <Route path="/settings" exact element={<Settings />} />
            <Route path="/users" exact element={<UsersContainer />} />
            <Route path="/friends" exact element={<Friends />} />
            <Route path="/login" exact element={<Login />} />
          </Routes>
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
  return  <BrowserRouter>
  <Provider store={store}>
  <AppContainer />
  </Provider>
  </BrowserRouter>
}

export default MainApp; 

