// Datos de las playlists y canciones
const playlists = {
    playlist1: [
        { title: 'Canción 1', artist: 'Artista 1', src: 'cancion1.mp3' },
        { title: 'Canción 2', artist: 'Artista 2', src: 'cancion2.mp3' },
        // Agrega más canciones según sea necesario
    ],
    playlist2: [
        { title: 'Canción 3', artist: 'Artista 3', src: 'cancion3.mp3' },
        { title: 'Canción 4', artist: 'Artista 4', src: 'cancion4.mp3' },
        // Agrega más canciones según sea necesario
    ],
    playlist3: [
        { title: 'Canción 5', artist: 'Artista 5', src: 'test1.mp3' },
        { title: 'Canción 6', artist: 'Artista 6', src: 'test2.mp3' },
        // Agrega más canciones según sea necesario
    ]
};

// Obtener elementos del DOM
const playlistsContainer = document.getElementById('playlists');
const audioPlayer = document.getElementById('audio-player');
const songInfo = document.getElementById('song-info');

let currentPlaylist = null;
let currentSongIndex = -1;

// Función para reproducir una canción
function playSong(title, artist, src) {
    audioPlayer.src = src;
    audioPlayer.play();
    songInfo.textContent = `${title} - ${artist}`;
}

// Función para reproducir la siguiente canción de la playlist actual
function playNextSong() {
    currentSongIndex++;
    const songs = playlists[currentPlaylist];

    if (songs && currentSongIndex < songs.length) {
        const { title, artist, src } = songs[currentSongIndex];
        playSong(title, artist, src);
    }
}

// Función para manejar el evento de clic en un elemento de playlist
function handlePlaylistClick(event) {
    const playlist = event.target.getAttribute('data-playlist');
    const songs = playlists[playlist];

    if (songs) {
        currentPlaylist = playlist;
        currentSongIndex = -1;
        playNextSong();
    }
}

// Agregar event listener a los elementos de playlist
playlistsContainer.addEventListener('click', handlePlaylistClick);

// Agregar event listener al evento 'ended' del elemento de audio
audioPlayer.addEventListener('ended', playNextSong);
