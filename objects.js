var playlist = {cher: 'Do you believe'}
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]: songTitle});
  return playlist;
}
