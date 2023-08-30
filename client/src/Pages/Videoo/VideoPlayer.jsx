import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };
  
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration);
        videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      }
    };
  
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
  
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, []);
  

  const handleGesture = (event) => {
    const currentTime = new Date().getTime();
    const timeSinceLastTap = currentTime - lastTap;
    lastTap = currentTime;

    if (timeSinceLastTap < 300) {
      const screenWidth = window.innerWidth;
      const gestureArea = screenWidth / 3;

      const tapX = event.clientX;

      if (tapX < gestureArea) {
        if (videoRef.current) {
          videoRef.current.currentTime -= 10;
        }
      } else if (tapX > gestureArea * 2) {
        if (videoRef.current) {
          videoRef.current.currentTime += 10;
        }
      } else {
        // Double tap in the middle: Pause or resume
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
      }
    }
  };


  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolume(value);
    }
  };

  return (
    <div className="video-container">
      <div className="custom-video" onClick={handleGesture}>
        <video ref={videoRef} className="custom-video-element">
          <source src={require("../../assests/video1.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="custom-controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="volume-controls">
            <button className="vcx" onClick={handleMuteToggle}>
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            />
          </div>
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: (currentTime / duration) * 100 + '%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

let lastTap = 0; // To track the time of the last tap

// Function to format time in HH:MM:SS format
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default VideoPlayer;
