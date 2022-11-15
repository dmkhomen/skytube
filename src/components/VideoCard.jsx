import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants"

const VideoCard = ({video: {id: { videoId }, snippet}}) => {
  return (
    <Card mx="auto" sx={{width: { xs: "320px", sm: "358px", md: "320px"}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: {xs: "320px", sm: "358px", md: "320px"}, height: 180}}
        />
      </Link>
      <CardContent sx={{height: "106px", display: "flex", justifyContent: "space-between", flexDirection: "column"}} >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray" sx={{"&:hover": { color: "#0284c7" }}}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 12, ml: "5px"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard