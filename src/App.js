import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profail/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

  
const App = (props) => {

    return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId" exact element={<ProfileContainer/>} />
            <Route path="/profile/*" exact element={<ProfileContainer/>} />
            <Route path="/dialogs/*" exact element={<DialogsContainer/>} />
            <Route path="/news" exact element={<News />} />
            <Route path="/music" exact element={<Music />} />
            <Route path="/settings" exact element={<Settings />} />
            <Route path="/users" exact element={<UsersContainer/>} />
            <Route path="/friends" exact element={<Friends />} />
            <Route path="/login" exact element={<Login/>} />
          </Routes>
        </div>
      </div>

   </BrowserRouter>

  );
}


export default App;



