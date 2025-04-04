import logo from './logo.svg';
import './App.css';
import StateTest01 from './StateTest01';
import Ex01Con from './containers/Ex01Con';
import Quiz01Container from './containers/Quiz01Container';
import Quiz02InOutCon from './containers/Quiz02InOutCon';
import Ex02ArrCon from './containers/Ex02ArrCon';
import Ex03ObjeCon from './containers/Ex03ObjCon';

function App() {
  return (<>
    <Ex03ObjeCon />
  <hr />
    <Ex02ArrCon />
  <hr />
    <Quiz02InOutCon />
  <hr />
    <Quiz01Container />
  <hr />
    <Ex01Con />
  <hr />
    <StateTest01 />
  </>
  );
}

export default App;
