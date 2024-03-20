import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="App">
    <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <Welcome />
    <SingleBook />
    <AllTheBooks searchQuery={searchQuery}/>
    <MyFooter />
    </div>
  );
}

export default App;
