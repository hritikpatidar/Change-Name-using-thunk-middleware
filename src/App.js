import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { MyAsyncAction } from './Async action/AsyncAction';

function App() {
  let state = useSelector(store=>store); //store is a function
  //console.log(state.name)
  let dispatch = useDispatch()
  //lets define the function
  let changeName=()=>{
   
    dispatch(MyAsyncAction());
    
  }
  return (
    <div className="App">
      <h1>{state.name}</h1>

      <button onClick={ ()=>{ changeName() }}>Change My Nme</button>
    </div>
  );
}

export default App;
