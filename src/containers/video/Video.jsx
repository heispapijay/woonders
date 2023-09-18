import React from 'react';
import './video.css';
import video from '../../assets/videocover.png';

function Video() {
  return (
    <div class="">
      <div class="flex-container">
        <div class="flex-child magenta">
          <p class='video_text-to_the-left'>We bring together innovative designers, pixel-perfect developers, and data-driven strategy to create a boutique experience at enterprise scale.</p>
        </div>

        <div class="flex-child green">
          <div class="image-container">
            <img src={video} alt='cover' height={600} />
            <button class="centered-button">Click Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
