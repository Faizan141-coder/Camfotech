import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProductsPage from './pages/ProductsPage';
import ProductManage from './pages/ProductManage';
import SignUp from './pages/Signup';
import NavBar from './components/Navbar';
import ManageProfile from './pages/ManageProfile';
import ManageUsers from './pages/ManageUsers';
import ManageOrder from './pages/ManageOrder';
import MyOrders from './pages/myOrders';
import MyDelivery from './pages/MyDelivery';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsManage from './pages/ProductDetailsManage';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/EvidencePage" element={<ProductsPage />} />
              <Route path="/GhostPage" element={<ProductManage />} />
              <Route path="/ProfilePage" element={<ManageProfile />} />
              <Route path="/ManageUser" element={<ManageUsers />} />
              <Route path="/ManageOrders" element={<ManageOrder />} />
              <Route path="/MyOrders" element={<MyOrders />} />
              <Route path="/MyDelivery" element={<MyDelivery />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/product-details" element={<ProductDetailsManage />} />              
              {/* <Route path="/" element={<ProductDetailsPage />} /> */}
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
