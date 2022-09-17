import React from 'react'
import Grid from '@mui/material/Grid';
import "../App.css"
import Button from '@mui/material/Button'

function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/signIn";
  };
  return (
    <div className="Navbar">
      <Grid container spacing={2} >
        <Grid item xs={3} mt={1}>
          <div className="header" style={{ paddingLeft: "70px" }} >
            <a component="a" href='/HomePage' style={{  textDecoration: "none", color: 'black'}}>AniSonar</a>
          </div>
          <div style={{ paddingLeft: "70px" , paddingBottom:"10px", fontSize: "15px"}}>
            Anime Finder
          </div>
        </Grid>
        <Grid item xs={7}>
        </Grid>
        <Grid item xs={2} mt={4}>
        <Button component="a" href='/addAnime' style={{border:'0.5px solid white' , color: 'white', marginRight:"10px"}}>Add Anime</Button>
        <Button onClick={handleLogout} style={{border:'0.5px solid white' , color: 'white' }}>Logout</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header