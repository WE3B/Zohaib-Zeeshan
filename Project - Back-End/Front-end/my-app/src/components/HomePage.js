import React from "react";
import NavBar from './navBar';
import Card from './Card'
import Divider from '@mui/material/Divider';
function HomePage() {
  return (
    <div>
      <>
        <NavBar></NavBar>
        <Divider/>
        <Card/>
      </>
    </div>
  );
}
export default HomePage;
