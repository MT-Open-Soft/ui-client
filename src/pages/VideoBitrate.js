import React from 'react';
import { Replay } from 'vimond-replay';
import 'vimond-replay/index.css';
import ShakaVideoStreamer from 'vimond-replay/video-streamer/shaka-player';
// Import the necessary components for the new feature
import "../styles/my-skin.css"
function VideoBitrate() {
    const replayOptions = {
        videoStreamer: {
          shakaPlayer: {
            customConfiguration: {
              streaming: {
                bufferingGoal: 200
              }
            }
          }
        }
      };

    // Function to display the bitrate selection
    const bitrates = [800, 1000, 2500, 3600];
    const formatBitrateLabel = (bitrate, isPlaying) =>
        `${bitrate} kbps${isPlaying ? ' •' : ''}`;
      
    
    

    return (
      <Replay
        source={{
          streamUrl: 'video/playlist.m3u8',
          contentType: 'application/x-mpegurl',
        }}
        initialPlaybackProps={{ isPaused: true }}
        // options={replayOptions}
        options={{
            interactionDetector: {
              inactivityDelay: 10,
            },
            controls: {
              liveDisplayMode: 'live-offset',
              qualitySelectionStrategy: 'fix-bitrate',
            },
            _deactivated_classNamePrefix: 'my-player-',
            userSettings: {
              settingsStoragePolicy: {
                volume: 'session',
                isMuted: 'session',
              },
            },
            responsivenessRules: [
              { className: 'small', width: { max: 500 } },
              { className: 'big', width: { min: 750 } },
            ],
            keyboardShortcuts: {
              keyMap: {
                togglePause: ['Y', 'Enter'],
              },
            },
          }}
     >
            
        <ShakaVideoStreamer />
        {/* Add the bitrate selection function here */}
        {/* {bitrateSelection()} */}
      </Replay>
    );
}

export default VideoBitrate;
