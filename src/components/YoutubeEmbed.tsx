/* eslint-disable no-useless-escape */
import { AspectRatio } from "@chakra-ui/layout";
import React from "react";

const YoutubeEmbed: React.FC<{ embedId: string; title: string }> = ({
  embedId,
  title,
}) => {
  const getId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "error";
    }
  };
  return (
    <AspectRatio maxW="560px" ratio={1}>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${getId(embedId)}`}
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default YoutubeEmbed;
