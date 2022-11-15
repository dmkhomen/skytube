import { Stack, Box } from "@mui/system"
import React from "react"
import {VideoCard, ChannelCard} from "./"

const Videos = ({videos, direction}) => {

  if (!videos?.length) return "loading .. "

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <React.Fragment key={idx}>
            {item.id.videoId && <Box><VideoCard video={item} /></Box>}
            {item.id.channelId && <Box><ChannelCard channelDetail={item} /></Box>}
        </React.Fragment>
      ))}
    </Stack>
  )
}

export default Videos