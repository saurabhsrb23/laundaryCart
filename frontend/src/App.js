
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PastOrderContainer from './components/PastOrderComponents/pastOrderContainer';
import './App.css';
import RouterLink from './components/RouterLink';



import Order from './components/CreateOrderComponent/Order/Order';
import LandingPage from './components/Landingpage/LandingPage';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/createOrder' element={<RouterLink/>}/>
      <Route path='/pastOrder' element={<PastOrderContainer/>}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
