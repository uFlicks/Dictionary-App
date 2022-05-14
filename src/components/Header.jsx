import { TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import "./Header.css"

const Header = ({word,setWord}) => {

    const darkTheme = createTheme({
        palette: {
            primary:{
                main:"#fca311"
            },
          mode: 'dark',
        },
      });


  return (
    <div className='header'>
        <span className="title">{word ? word :'Dictionary App'}</span>
            <div className="input">
                <ThemeProvider theme={darkTheme}>
                <TextField 
                    className='search'
                    id="outlined-basic" 
                    label="Search"  
                    variant="outlined" 
                    value={word}
                    onChange={(e)=>setWord(e.target.value)}
                    />
                </ThemeProvider>
            
            </div>
    </div>
  )
}

export default Header