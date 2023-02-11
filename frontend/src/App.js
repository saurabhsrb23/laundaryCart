
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PastOrderContainer from './components/PastOrderComponents/pastOrderContainer';
import './App.css';
import RouterLink from './components/RouterLink';

import LandingPage from './components/LandingPage/LandingPage';
import Order from './components/CreateOrderComponent/Order/Order';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='*' element={<LandingPage/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/createOrder' element={<RouterLink/>}/>
      <Route path='/pastOrder' element={<PastOrderContainer/>}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
