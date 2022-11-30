/*import logo from './logo.svg';*/
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products'
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom";
import Shop from './components/Shop';
import {CartProvider} from 'react-use-cart'
import Trainer from './pages/Trainer';
import Singin from './pages/Singin';
import Signup from './pages/Signup';
import Contact1 from './pages/Contact1';
import {AuthProvider} from './pages/AuthContext'
import Courses from './pages/Courses';
import UpdateProduct from './components/admin/UpdateProduct'
import Cart from './components/cart/Cart'
import Dashboard from './components/admin/Dashboard';
import UpdateUser from "./components/admin/UpdateUser"
import Detailsrpm from './Details/Detailsrpm';
import Detailsabdos from './Details/Detailsabdos';
import DetailsJack from './Details/DetailsJack';
import { Loaduser }from "./actions/user-actions"
import NewProduct from './components/product/NewProduct' ;

import NewCourse from './components/cours/NewCourse';
import NewCoach from './components/coach/NewCoach';
import ProductsList from './components/admin/ProductsList'
import CoachsList from './components/admin/CoachsList';
import CoursesList from './components/admin/CoursesList';
import UpdateCoach from './components/admin/UpdateCoach'


import FormulaireCart from './components/cart/FormulaireCart';
import Login from './components/admin/Login';
import UserList from './components/admin/UserList'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import  store  from "./store";

function App() {
  useEffect(() => {
    store.dispatch(Loaduser());
  }, []);
  const { user, isAuthtenticated, loading } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="App">  
    <AuthProvider> 
    <Router>
          <NavBar    />
          <Routes>
          <Route exact path="/dashboard" element ={<Dashboard/>} />
          <Route exact path="/admin/users" element ={<UserList/>} />
          <Route exact path="/admin/user/:id" element ={<UpdateUser/>} />

            <Route exact path="/h" element ={<Home/>} />
            <Route exact path="/p" element ={<Products/>}/>
            <Route exact path="/a"element ={<About/>} />
            <Route exact path="/c" element ={<Contact/>} />
            <Route exact path="/Shop" element ={<Shop/>} />
            <Route exact path="/tr" element ={<Trainer/>} />
            <Route exact path="/sign" element ={<Singin/>} />
            <Route exact path="/signup" element ={<Signup/>} />
            <Route exact path="/c1" element ={<Contact1/>} />
            <Route exact path="/cr" element ={<Courses/>} />
            <Route exact path="/drpm" element ={<Detailsrpm/>} />
            <Route exact path="/dabd" element ={<Detailsabdos/>} />
            
            <Route exact path="/djack" element ={<DetailsJack/>} />
           
            <Route exact path="/product/new" element ={<NewProduct/>} />
            <Route exact path="/coach/new" element ={<NewCoach/>} />
            <Route exact path="/course/new" element ={<NewCourse/>} />
            <Route path="/admin/products"  element={<ProductsList/>} exact />
            <Route path="/admin/product/:id"  element={<UpdateProduct/>} exact />
            <Route path="/admin/coachs"  element={<CoachsList/>} exact />
            <Route path="/admin/coach/:id"  element={<UpdateCoach/>} exact />
            <Route path="/admin/courses"  element={<CoursesList/>} exact />
            <Route path="/admin/course/:id"  element={<UpdateCoach/>} exact />
            <Route path="admin/log" element={<Login/>} exact />

            <Route path="FormulaireC" element={<FormulaireCart/>}/>


 <Route path="/caart"  element={<Cart/>} exact />
            
          </Routes>
          <Footer/>
          
    </Router>
    </AuthProvider>
    
    
    </div>
  );
}

export default App;
