import logo from './logo.svg';
import './App.css';
import StateTest01 from './StateTest01';
import Ex01Con from './containers/Ex01Con';
import Quiz01Container from './containers/Quiz01Container';

function App() {
  return (<>
    <Quiz01Container />
  <hr />
    <Ex01Con />
  <hr />
    <StateTest01 />
  </>
  );
}

export default App;
