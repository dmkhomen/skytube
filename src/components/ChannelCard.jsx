import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({channelDetail}) => (
    <Box
      sx={{
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {xs: "356px", md: "320px"},
        height: "326px"
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius: "50%", height: "180px", width: "180px", border: "1px solid #bae6fd", mb: 2}}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 14, color: "gray", ml: "5px"}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )

export default ChannelCard