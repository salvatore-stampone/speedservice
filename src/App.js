import './App.css';
import MainPage from './pages/MainPage';
import { BsWhatsapp } from 'react-icons/bs';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <a
        href="https://wa.me/390881042353"
        className="whatsapp__float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className="whatsapp__icon" />
      </a>
      <MainPage />
    </>
  );
}

export default App;
