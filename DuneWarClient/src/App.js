
import './App.css';
import "./duneHide.js";
import "./globalDune.js";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/Blogpage';
import { ArsenalShowPage } from './pages/ArsenalShowPage';
import { UnitPage } from './pages/UnitPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { EditArsenalPage } from './pages/EditArsenalPage';
import { NavBarDune } from './components/NavBarDune'
import { Loginpage } from './pages/Loginpage';
import { CommentPage } from './pages/CommentPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RequireAuth } from './hoc/RequireAuth';
import { LogOut } from './pages/LogOut'
import { AuthProvider } from './hoc/Authprovider';
import { TownPage } from './pages/TownPage';
import { createStore } from 'redux';
import rooReducer from './reducer/rootReducer';
import { Provider } from 'react-redux';
import { FooterComponent } from './components/footer.component';
import { ArsenalPage } from './pages/ArsenalPage';
import { ProductPage } from './pages/ProductPage'
import { FilePage } from './pages/FilePage'
function App() {

    const store = createStore(rooReducer);

    return (
        <Provider store={store}>
            <NavBarDune />
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='about/*' element={<AboutPage />}>
                        <Route path="contacts" element={<p>contact</p>} />
                        <Route path="team" element={<><h2>super</h2><p>team</p></>} />
                    </Route>
                    <Route path='/unitpage' element={<UnitPage />} />
                    <Route path='/blog' element={<BlogPage />} />
                    <Route path='/blog/:id' element={<ProductPage />} />
                    <Route path='/arsenal/:id' element={<ArsenalShowPage />} />
                    <Route path='/arsenal/:id/edit' element={<EditArsenalPage />} />

                    <Route path='*' element={<NotFoundPage />} />
                    <Route path='/file' element={<FilePage />} />
                    <Route path='loginout' element={<RequireAuth>
                        <LogOut />
                    </RequireAuth>}
                    />
                    <Route path='/login' element={<Loginpage />} />
                    <Route path='/arsenal' element={<ArsenalPage />} />
                    <Route path='/town/:id' element={<TownPage />} />
                    <Route path='/commentpage' element={<CommentPage />} />

                </Routes>
            </AuthProvider>
   
            <FooterComponent/>
        </Provider>
    );
}

export default App;
