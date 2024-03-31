import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "./Player.css";
import "../components/Config";
function Player({ onClose, title }) {
  const videoNames = ["harry_potter", "spiderman"];

  const getRandomVideoName = () => {
    const randomIndex = Math.floor(Math.random() * videoNames.length);
    return videoNames[randomIndex];
  };
  const playerURL =
    "https://opensoft24-fyh8dyagdhcthnhc.z02.azurefd.net/opensoft";

  const subscription = localStorage.getItem("subscription");
  const videoName = getRandomVideoName();
  const srcUrl = `${playerURL}/${videoName}/${subscription}_playlist.m3u8`;

  return (
    <div className="modal_overlay">
      <div className="modal">
        {/* Video container */}
        <div className="video_container">
          <div className="video">
            <MediaPlayer title={title} src={srcUrl} autoPlay={true}>
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
