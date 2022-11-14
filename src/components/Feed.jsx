import {useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material"
import {Sidebar, Videos} from './index'

const Feed = () => {
  return (
    <Stack sx={{flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{height: { sx: "auto", md: "92vh"}, borderRight: "1px solid #bae6fd", px: {sx: 0, md: 2}}}>
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5}}>
          2022 &copy; SkyTube
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography variant="h4" fontWeight="bold" sx={{color: "black"}}>
          New <span style={{color: "#0284c7"}}>videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed