
import './App.css';
import "./duneHide.js";
import "./globalDune.js";
import React from "react";
import {Routes,Route} from 'react-router-dom';
import {HomePage} from './pages/Homepage';
import {AboutPage} from './pages/AboutPage';
import {BlogPage} from './pages/Blogpage';
import {SinglePage} from './pages/SinglePage';
import {ButtonPage} from './pages/ButtonPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {Editpage} from './pages/Editpage';
import {NavBarDune} from './components/NavBarDune'
import {Loginpage} from './pages/Loginpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RequireAuth} from './hoc/RequireAuth';
import {Createpost } from './pages/Createpost'
import {AuthProvider} from './hoc/Authprovider';
//Editpage

function App() {
	
  return (
    <>
<NavBarDune/>
<AuthProvider>
  <Routes>
      <Route path='/' element ={<HomePage/>}/>
      <Route path='about/*' element ={<AboutPage/>}>
        <Route path="contacts" element ={<p>contact</p>}/>
        <Route path="team" element ={<><h2>super</h2><p>team</p></>}/>
      </Route>
      <Route path='/button' element ={<ButtonPage/>}/>
      <Route path='/post' element ={<BlogPage/>}/>
      <Route path='/post/:id' element ={<SinglePage/>}/>
      <Route path='/post/:id/edit' element ={<Editpage/>}/>
      
      <Route path='*' element ={<NotFoundPage/>}/>
      <Route path='post/new' element={<RequireAuth>
        <Createpost/>
      </RequireAuth>}
      />
      <Route path='/login' element ={<Loginpage/>}/>

    
  </Routes>
</AuthProvider>
      <header>
      
      </header>
    </>
  );
}

export default App;
