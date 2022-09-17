import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useState,useEffect } from "react";
import { FormLabel, Button, FormGroup, FormControl, FormControlLabel, Checkbox } from "@mui/material";
import { useParams  } from "react-router-dom";


const theme = createTheme();
export default function UpdateAnime() {

  const [data, setData] = useState({ name: "", summary: "", type: "", picture: "", genre: [] });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4002/api/animes/${id}`);
      const json = await response.json();
      if (response.ok) {
        setData(json);
      }
    };
    fetchData();
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:4002/api/animes/${id}`;
      const { data: res } = await axios.patch(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/HomePage";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const handleCheck = (e) => {

    if (e.target.checked === true) {
      data.genre.push(e.target.value)
      console.log(data.genre)
    }
    else if (e.target.checked === false) {
      data.genre.pop(e.target.value)
      console.log("nothing clicked")
      console.log(data.genre)
    }
  }
  return (

    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.ibb.co/V300Tnc/21611-1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Anime/Manga
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                onChange={handleChange}
                value={data.name}
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="summary"
                label="Summary"
                type="summary"
                onChange={handleChange}
                value={data.summary}
                id="summary"
                autoComplete="summary"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="type"
                label="Type"
                name="type"
                onChange={handleChange}
                value={data.type}
                autoComplete="type"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="picture"
                label="Picture URL  "
                name="picture"
                onChange={handleChange}
                value={data.picture}
                autoComplete="picture"
                autoFocus
              />

              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend"> Genre List</FormLabel>
                <FormGroup>
                  <Grid container>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Action "} onChange={handleCheck} />
                        }
                        label="Action"
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Adventure "} onChange={handleCheck} />
                        }
                        label="Adventure"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Comedy "} onChange={handleCheck} />
                        }
                        label="Comedy"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Drama "} onChange={handleCheck} />
                        }
                        label="Drama"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Fantasy "} onChange={handleCheck} />
                        }
                        label="Fantasy"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Harem "} onChange={handleCheck} />
                        }
                        label="Harem"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Historical "} onChange={handleCheck} />
                        }
                        label="Historical"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Horror "} onChange={handleCheck} />
                        }
                        label="Horror"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Isekai "} onChange={handleCheck} />
                        }
                        label="Isekai"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Manhua "} onChange={handleCheck} />
                        }
                        label="Manhua"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Webtoon "} onChange={handleCheck} />
                        }
                        label="Webtoon"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Meca "} onChange={handleCheck} />
                        }
                        label="Meca"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Medical "} onChange={handleCheck} />
                        }
                        label="Medical"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Mystery "} onChange={handleCheck} />
                        }
                        label="Mystery"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Romance "} onChange={handleCheck} />
                        }
                        label="Romance"
                      />

                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox name="gilad" value={"Sports "} onChange={handleCheck} />
                        }
                        label="Sports"
                      />

                    </Grid>
                  </Grid>
                </FormGroup>
              </FormControl>
              {error && <div>{error}</div>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}