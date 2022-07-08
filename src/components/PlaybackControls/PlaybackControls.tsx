import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { Play } from "react-feather";
import { TimelineService } from "../../services/timeline.service";

interface PlaybackControlsProps {
  timelineService: TimelineService;
}

const PlaybackControls: FC<PlaybackControlsProps> = ({ timelineService }) => {
  const play = () => {
    timelineService.play();
  };

  return (
    <Box onClick={play}>
      <Play />
    </Box>
  );
};

export default PlaybackControls;
