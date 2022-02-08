import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import {throttle} from 'lodash';

const onPlay = function(data){
      const stringifyData = JSON.stringify(data);
      localStorage.setItem('video-player-current-time',stringifyData)
}
player.on('timeupdate', throttle(onPlay,1000));

function resumePlayBack(){
    if (JSON.parse(localStorage.getItem('video-player-current-time')) === null){
        return;
    }
    const paused = JSON.parse(localStorage.getItem('video-player-current-time'))['seconds'];
    player.setCurrentTime(paused).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
}
resumePlayBack();