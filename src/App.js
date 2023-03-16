import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import About from './About';
import Service from './Service';
import Menu from './Menu';
import Reservation from './Reservation';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Adminhome from './Admin/Adminhome';
import Addbrand from './Admin/Addbrand';
import Showbrand from './Admin/Showbrand';
import Editbrand from './Admin/Editbrand';
import Showproduct from './Admin/Showproduct';
import Addproduct from './Admin/Addproduct';
import Editproduct from './Admin/Editproduct';
import Addcategory from './Admin/Addcategory';
import Showcategory from './Admin/Showcategory';
import Editcategory from './Admin/Editcategory';
import Addsubcategory from './Admin/Addsubcategory';
import Showsubcategory from './Admin/Showsubcategory';
import Editsubcategory from './Admin/Editsubcategory';
import Addcart from './Admin/Addcart';
import ShowoneProduct from './ShowoneProduct';
import Cart from './Cart';


function App() {
  return (
    <>


      <div>
        <Routes>


          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Adminhome" element={<Adminhome />} />
          <Route path="/Addbrand" element={<Addbrand />} />
          <Route path="/Showbrand" element={<Showbrand />} />
          <Route path="/Editbrand/:id" element={<Editbrand />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Showproduct" element={<Showproduct />} />
          <Route path="/Editproduct/:id" element={<Editproduct />} />
          <Route path="/Addcategory" element={<Addcategory />} />
          <Route path="/Showcategory" element={<Showcategory />} />
          <Route path="/Editcategory/:id" element={<Editcategory />} />
          <Route path="/Addsubcategory" element={<Addsubcategory />} />
          <Route path="/Showsubcategory" element={<Showsubcategory />} />
          <Route path="/Editsubcategory/:id" element={<Editsubcategory />} />
          <Route path="/Addcart" element={<Addcart />} />
          <Route path="/ShowoneProduct/:id" element={<ShowoneProduct />} />
          <Route path="/Cart/:id" element={<Cart />} />


        </Routes>
      </div>



    </>
  );
}

export default App;
