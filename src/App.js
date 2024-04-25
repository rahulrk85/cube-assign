import './App.css';
import CustomerDetails from './CustomerDetails';
import Header from './Header';
import Customerlist from './Customerlist';

function App() {
  return (
    <div className="">
      <Header />
      <div className='flex'>
        <Customerlist />
        <CustomerDetails />
      </div>
    </div>
  );
}

export default App;
