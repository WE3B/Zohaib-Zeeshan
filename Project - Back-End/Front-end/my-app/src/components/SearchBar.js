import React,{useState,useEffect} from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";






const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function PrimarySearchAppBar({animes,setAnimes}) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:4002/api/animes")
        const json = await response.json()
        if (response.ok) { setFilter(json) }
      };
      fetchData()
    }, [])
    const handleSearch= (event)=>{
        setSearch(event.target.value)
        console.log(search.message)
        const filterAnime = filter.filter(value => {
            return value.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setAnimes(filterAnime)
    }
  return (
    <>
      <Grid container >
        <Grid item xs={9.45}>

        </Grid>
        <Grid item xs={2} mt={2} style={{float: 'right', border: '1px solid black'}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={handleSearch}
              inputProps={{ "aria-label": "search" }} 
            />
          </Search>
        </Grid>
      </Grid>
    </>
  );
}
