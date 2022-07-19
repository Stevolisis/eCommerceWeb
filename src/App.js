import {React} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Chartcon from './containers/Chartcon';
// import Slidercon from './containers/Slidercon'
// import './styles/slider.scss';
import './styles/grandpro.scss';
import './styles/grandprocateg.scss';
import './styles/grandprocart.scss';
import './styles/grandproitem.scss';
import './styles/grandprouser.scss';
import './styles/grandprouserorders.scss';
import './styles/usereditaddress.scss';
import './styles/usersaveditems.scss';
import './styles/checkout.scss';
import './styles/checkoutaddress.scss';
import './styles/orderdetails.scss';
import './styles/help.scss';
import './styles/admin.scss';
import './styles/admindashboard.scss';
import './styles/admincategories.scss';
import './styles/adminaddcateg.scss';
import './styles/signin.scss';
import 'font-awesome/css/font-awesome.min.css';
import Grandpro from './containers/Grandpro';
import Grandprocateg from './containers/Grandprocateg';
import Grandprocart from './containers/Grandprocart';
import Grandproitem from './containers/Grandproitem';
import Grandprouser from './containers/Grandprouser';
import Useraccount from './containers/Useraccount';
import Useraddresses from './containers/Useraddresses';
import Userorders from './containers/Userorders';
import Editaddress from './containers/Editaddress';
import Adduseraddress from './containers/Adduseraddress';
import Userwishlist from './containers/Userwishlist';
import Checkout from './containers/Checkout';
import Userorder from './containers/Userorder';
import Help from './containers/Help';
import Admindashboard from './containers/Admindashboard';
import Admin from './containers/Admin';
import Adminproducts from './containers/Adminproducts';
import Admincategories from './containers/Admincategories';
import Addcategory from './containers/Addcategory';
import Addproduct from './containers/Addproduct';
import Adminorders from './containers/Adminorders';
import Adminsales from './containers/Adminsales';
import Adminusers from './containers/Adminusers';
import Adminstaffs from './containers/Adminstaffs';
import Addstaff from './containers/Addstaff';
import Adminsupport from './containers/Adminsupport';
import Addsupport from './containers/Addsupport';
import Editsupport from './containers/Editsupport';
import Adminbannerimg from './containers/Adminbannerimg';
import Adminpayment from './containers/Adminpayment';
import Editproduct from './containers/Editproduct';
import Editstaff from './containers/Editstaff';
import Edituser from './containers/Edituser';
import Admineventcoupon from './containers/Admineventcoupon';
import Editcoupon from './containers/Editcoupon';
import Addcoupon from './containers/Addcoupon';
import Addevent from './containers/Addevent';
import Adminanalytics from './containers/Adminanalytics';
import Editcategory from './containers/Editcategory';

function App() {

  return (
 

<>
    <BrowserRouter>
      <Routes>  
      {/* <Route path='/' element={<Slidercon />} />
      <Route path='/chart' element={<Chartcon />} /> */}
      <Route path='/' element={<Grandpro />} />
      <Route path='/products' element={<Grandprocateg />} />
      <Route path='/product' element={<Grandproitem />} />
      <Route path='cart' element={<Grandprocart />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='help' element={<Help />} />

      <Route path='/user' element={<Grandprouser/>} >
        <Route path='useraccount' element={<Useraccount />} />
        <Route path='useraddress' element={<Useraddresses/>} />
        <Route path='editaddress/:id' element={<Editaddress/>} />
        <Route path='addaddress' element={<Adduseraddress/>} />
        <Route path='wishlist' element={<Userwishlist/>} />
        <Route path='userorders' element={<Userorders />} />
        <Route path='userorder' element={<Userorder origin='user'/>} />
      </Route>

      <Route path='/admin' element={<Admin/>}>
      <Route path='dashboard' element={<Admindashboard />} />
      <Route path='products' element={<Adminproducts />} />
      <Route path='categories' element={<Admincategories />} />
      <Route path='sales' element={<Adminsales />} />
      <Route path='users' element={<Adminusers />} />
      <Route path='staffs' element={<Adminstaffs />} />
      <Route path='support' element={<Adminsupport />} />
      <Route path='bannerimg' element={<Adminbannerimg />} />
      <Route path='payment' element={<Adminpayment />} />
      <Route path='eventandcoupon' element={<Admineventcoupon />} />
      <Route path='orders' element={<Adminorders />} />
      <Route path='order' element={<Userorder origin='admin'/>} />

      <Route path='addcategory' element={<Addcategory />} />
      <Route path='addproduct' element={<Addproduct />} />
      <Route path='addstaff' element={<Addstaff />} />
      <Route path='addfaq' element={<Addsupport />} />
      <Route path='addcoupon' element={<Addcoupon />} />
      <Route path='addevent' element={<Addevent />} />

      <Route path='edituser/:id' element={<Edituser />} />
      <Route path='editproduct/:id' element={<Editproduct />} />
      <Route path='editcategory/:id' element={<Editcategory />} />
      <Route path='editcoupon/:id' element={<Editcoupon />} />
      <Route path='editstaff/:id' element={<Editstaff />} />
      <Route path='editfaq/:id' element={<Editsupport />} />


      <Route path='analytics' element={<Adminanalytics />} />
      </Route>
      
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
</>

  );
}

export default App;
