import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Button, CardActions } from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "./navBar";
import axios from "axios";

export default function Anime() {
  const navigate = useNavigate();
  const [animes, setAnimes] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4002/api/animes/${id}`);
      const json = await response.json();
      if (response.ok) {
        setAnimes(json);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:4002/api/animes/${id}`;
      const { res } = await axios.delete(url);
      alert("Anime Deleted");
      navigate("/HomePage");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Navbar> </Navbar>
      <Grid
        container
        rowSpacing={2}
        m={"2rem"}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={4}>
          {" "}
        </Grid>{" "}
        <Grid item xs={3.5}>
          <Card
            sx={{
              maxWidth: 700,
            }}
            key={animes._id}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="380"
                image={animes.picture}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  <b> Name: </b> {animes.name}
                </Typography>
                <Typography variant="body1" >
                  <b> Summary: </b> {animes.summary}
                </Typography>
                <Typography variant="body1" >
                  <b> Type: </b> {animes.type}
                </Typography>
                <Typography variant="body1" >
                  <b> Genre: </b> {animes.genre}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Link to={`/updateAnime/${animes._id}`}>
                <Button
                  animes={animes}
                  style={{
                    border: "0.5px solid black",
                    color: "black",
                    margin: "10px",
                  }}
                >
                  Edit
                </Button>
              </Link>
              <Button
                onClick={handleDelete}
                style={{
                  border: "0.5px solid black",
                  color: "black",
                  margin: "10px",
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
