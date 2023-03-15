import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
  localStorage.setItem(KEY, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY)) || 0);
