import './App.css';
import MainPage from './pages/MainPage';
import { BsWhatsapp } from 'react-icons/bs';
import Navbar from './components/Navbar';
import Float from './components/Tracking/Float';

function App() {
  return (
    <>
      <Navbar />
      <Float />
      <a
        href="https://wa.me/390881042353"
        className="float whatsapp__float"
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
