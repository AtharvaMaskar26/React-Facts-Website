import logo from './logo.svg';
import './App.css';

// Importing React Componenets 
import { Navbar } from './Components/Navbar';
import { Contents } from './Components/Contents';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className='app-header-container'>
        <Navbar />
      </header>
      <main>
        <Contents />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
