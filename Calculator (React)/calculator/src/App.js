/* eslint-disable no-eval */
import { Grid, Button} from '@mui/material';
import TextField from '@mui/material/TextField'; 
import React, { useState } from 'react';
import './App.css'

function App() {
  const [result,setResult] = useState("");
  const clickHandler = (event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearScreen= ()=>{
    setResult("")
  }
  const calculation = ()=>{
    setResult(eval(result).toString());
  }
  
  return (
    
    <div className="App">
      <div className='main'>
      <Grid container spacing={3} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={3}>
          <TextField disabled id="screen" placeholder='0' value={result}/>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" onClick={clearScreen}>C</Button>
        </Grid>
        <Grid item xs={3} >  
          <Button variant="contained" value="7" onClick={clickHandler}>7</Button>
          <Button variant="contained" value="8" onClick={clickHandler}>8</Button>
          <Button variant="contained" value="9" onClick={clickHandler}>9</Button>
          <Button variant="contained" value="/" onClick={clickHandler}>/</Button>
        </Grid>
        <Grid item xs={3}>  
          <Button variant="contained" value="4" onClick={clickHandler}>4</Button>
          <Button variant="contained" value="5" onClick={clickHandler}>5</Button>
          <Button variant="contained" value="6" onClick={clickHandler}>6</Button>
          <Button variant="contained" value="*" onClick={clickHandler}>*</Button>
        </Grid>
        <Grid item xs={3}>  
          <Button variant="contained" value="1" onClick={clickHandler}>1</Button>
          <Button variant="contained" value="2" onClick={clickHandler}>2</Button>
          <Button variant="contained" value="3" onClick={clickHandler}>3</Button>
          <Button variant="contained" value="-" onClick={clickHandler}>-</Button>
        </Grid>
        <Grid item xs={3}>  
          <Button variant="contained" value="." onClick={clickHandler}>.</Button>
          <Button variant="contained" value="0" onClick={clickHandler}>0</Button>
          <Button variant="contained" value="=" onClick={calculation}>=</Button>
          <Button variant="contained" value="+" onClick={clickHandler}>+</Button>
        </Grid>
      </Grid>
      </div>

    </div>
  );
}

export default App;
