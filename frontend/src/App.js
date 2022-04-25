import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [word, setWord] = useState('');
  const handleSearch = (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
  };

  
    return(
        <div>
         
            <Header word={word} setWord={setWord} handleSearch={handleSearch}/>

        </div>
    );

}
export default App;
