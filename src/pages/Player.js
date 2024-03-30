import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import './Player.css';

function Player({onClose,title}) {
    return (
      <div className="modal_overlay">
        <div className="modal">
          {/* Video container */}
          <div className="video_container">
            <div className="video">
              <MediaPlayer
                title= {title}
                src="https://opensoft24-fyh8dyagdhcthnhc.z02.azurefd.net/opensoft/spiderman/GOLD_playlist.m3u8"
                autoPlay={true}
              >
                <MediaProvider />
                <DefaultVideoLayout icons={defaultLayoutIcons} />
              </MediaPlayer>
            </div>
          </div>
          {/* Close button */}
          <button className="close_button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    );
  }
  
  export default Player;