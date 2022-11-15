import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import SearchBar from './SearchBar';

const Navbar = () => (
  
    <Stack
    p={2}
      alignItems="center"
      direction={{ xs: "column", sm: "row"}}
      sx={{position: "sticky", background: "#e0f2fe", top: 0, justifyContent: "space-between"}}
    >
      <Link to="/" style={{display: "flex", alignItems: "center"}} >
        <img src={logo} alt="logo" height={45}/>
        <Typography variant="h5" ml="5px"><span style={{color: "#0284c7"}}>Sky</span>Tube</Typography>
      </Link>
      <SearchBar />
    </Stack>
  );

export default Navbar