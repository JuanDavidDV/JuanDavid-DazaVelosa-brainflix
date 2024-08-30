import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() { 

return (
    <main className="app">
      <Header />  {/*REMEMBER TO CHANGE CODE STRUCUTURE, USING <HEADER> FIRST AND THEN <MAIN>*/}
      <HomePage />
    </main>
  );
};

export default App