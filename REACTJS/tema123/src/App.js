import logo from './logo.svg';
import './App.css';
import {Contact} from './models/contact.class';
import ComponenteA from './components/ComponenteA';

function App() {
  const contactProof = new Contact("John", "Doe", "email@email.com", false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <ComponenteA contact = {contactProof}  />  
           </header>
    </div>
  );
}

export default App;
