import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";



export default function ImgMediaCard() {

  const [animes, setAnimes] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4002/api/animes")
      const json = await response.json()
      console.log("Animes", json);

      if (response.ok) { setAnimes(json) }
    };
    fetchData()
  }, [])


  return (
    <div>
      <SearchBar animes={animes} setAnimes={setAnimes}/>
      <Grid container rowSpacing={2} m={"2rem"}   alignItems="center" justify="center" >

        {animes && animes.map((anime) => {
          return (
            <Grid item xs={3} >
              <Card sx={{ maxWidth: 255 }} key={anime._id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={anime.picture}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      <b>
                     Name: {anime.name}
                     </b>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Genre: {anime.genre}
                    </Typography>
                  </CardContent>
                  <CardActions style={{float:"right"}}>
                    <Link to={`/anime/${anime._id}`}>
                      Info
                    </Link>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
