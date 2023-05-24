"use client";

import React, { useEffect, useRef, useState } from "react";
import { GiSoundWaves } from "react-icons/gi";
import ReactAudioPlayer from 'react-audio-player';

type PropTypes = {
  voice: string;
};

const AgentVoice: React.FC<PropTypes> = ({ voice }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if(voiceStatus === "deactive"){
        /* @ts-expect-error Async Server Component */
        audioRef.current.audioEl.current.play();
    }
  }

  const [voiceStatus, setVoiceStatus] = useState("deactive");

  return (
    <span
    onClick={handlePlay}
      className={`${
        voiceStatus === "deactive" ? "text-white" : "text-green-400 animate-pulse"
      }  cursor-pointer`}
    >
      {<GiSoundWaves />}
      <ReactAudioPlayer className="hidden"  ref={audioRef} onEnded={(e) => setVoiceStatus("deactive")} onPlay={() => setVoiceStatus("active")} src={voice}  controls />
    </span>
  );
};

export default AgentVoice;
