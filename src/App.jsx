import React,{useEffect,useState} from 'react'
import './App.css'
import axios from 'axios'
import Container from '@mui/material/Container'
import Header from './components/Header'
import Definitions from './components/Definitions'


function App() {
  const [word, setWord] = useState('')
  const [meaning, setMeaning] = useState([])
  const dictionaryApi = async() =>{
    try{
      const data =await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      )
      console.log(data);
      setMeaning(data.data)
    }
    catch(error){
      console.log(error);
    }
  }
  


  useEffect(() => {
    dictionaryApi();
  }, [word])
  

  return (
    <div className="App">
      <Container maxWidth="md" className='container'>
        <Header
                word={word}
                setWord={setWord} 
        />
        {meaning && <Definitions word={word} meaning = {meaning}/>}
      </Container>
    </div>
  )
}

export default App
