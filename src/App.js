import logo from './logo.svg';
import './App.css';
import User from './Component/User';
import Fetch from './Component/useFetch/Fetch';
import Counter from './Component/useCounter/Counter';
import Previous from './Component/usePrev/Previous';

function App() {
  return (
    <div className="">
      {/* <Fetch/> */}
      {/* <Counter/> */}
      <Previous/>
    </div>
  );
}

export default App;
