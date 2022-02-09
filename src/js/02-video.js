import '../css/common.css'
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const onPlay = function(data){
      const stringifyData = JSON.stringify(data);
      localStorage.setItem('video-player-current-time',stringifyData)
}
player.on('timeupdate', throttle(onPlay,1000));

function resumePlayBack(){
    if (JSON.parse(localStorage.getItem('video-player-current-time')) === null){
        return;
    }
    const paused = JSON.parse(localStorage.getItem('video-player-current-time'));
    player.setCurrentTime(paused.seconds); 
    if (paused) {
        player
          .setCurrentTime(paused.second)
          .then(function (seconds) {})
          .catch(function (error) {
            switch (error.name) {
              case 'Error':
                break;
              default:
                break;
            }
          });
      }
    }
resumePlayBack();