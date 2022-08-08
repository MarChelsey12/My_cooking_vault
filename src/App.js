import './App.css';
import Button from './components/Button';
import Error from './components/Error';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Error>2nd error message</Error>
      <Button variant="outlined">test</Button>
    </>
  );
}

export default App;
