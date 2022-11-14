import {useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{height: { sx: "auto", md: "92vh"}, borderRight: "1px solid #bae6fd", px: {sx: 0, md: 2}}}>
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5}}>
          2022 &copy; SkyTube
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed