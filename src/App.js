import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/order" element={<OrderScreen />} />
        <Route path="/order/:favorite" element={<OrderScreen />} />
      </Routes>
    </div>
  );
}

export default App;
