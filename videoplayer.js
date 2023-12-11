// my YouTube API key
const API_KEY = 'AIzaSyAma_mivCt7JKJGU2xVT7QPbQxrazuyN40';
// Video ID of YouTube video i want to watch
const VIDEO_ID = 'kEx9i_2vcZg';

// Function to load YouTube Player
function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            controls: 1,
            autoplay: 0,
            rel: 0,
            showinfo: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


function onPlayerReady(event) {
    event.target.playVideo(); // Auto-play the video when ready
}
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Start loading my YouTube API
loadYouTubeAPI();
