
import './App.css';
import "./duneHide.js";
import "./globalDune.js";
import React from "react";
import {Routes,Route} from 'react-router-dom';
import {GamePage} from './pages/GamePage';
import {AboutPage} from './pages/AboutPage';
import {BlogPage} from './pages/Blogpage';
import {SinglePage} from './pages/SinglePage';
import {ButtonPage} from './pages/ButtonPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {Editpage} from './pages/Editpage';
import {NavBarDune} from './components/NavBarDune'
import {Loginpage} from './pages/Loginpage';
import {CommentPage} from './pages/CommentPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RequireAuth} from './hoc/RequireAuth';
import {Createpost } from './pages/Createpost'
import {AuthProvider} from './hoc/Authprovider';
import {TownPage} from './pages/TownPage';
//refux
import {createStore} from 'redux';
import rooReducer from './reducer/rootReducer';
import {Provider} from 'react-redux'

function App() {
	
  const store = createStore(rooReducer);

  return (
    <Provider store ={store}>
<NavBarDune/>
<AuthProvider>
  <Routes>
      <Route path='/' element ={<GamePage/>}/>
      <Route path='about/*' element ={<AboutPage/>}>
        <Route path="contacts" element ={<p>contact</p>}/>
        <Route path="team" element ={<><h2>super</h2><p>team</p></>}/>
      </Route>
      <Route path='/buttonpage' element ={<ButtonPage/>}/>
      <Route path='/post' element ={<BlogPage/>}/>
      <Route path='/post/:id' element ={<SinglePage/>}/>
      <Route path='/post/:id/edit' element ={<Editpage/>}/>
      
      <Route path='*' element ={<NotFoundPage/>}/>
      <Route path='post/new' element={<RequireAuth>
        <Createpost/>
      </RequireAuth>}
      />
      <Route path='/login' element ={<Loginpage/>}/>
      <Route path='/town/:id' element ={<TownPage/>}/>
      <Route path='/commentpage' element ={<CommentPage/>}/>
    
  </Routes>
</AuthProvider>
      <header>
      
      </header>
    </Provider>
  );
}

export default App;
