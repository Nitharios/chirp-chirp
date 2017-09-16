function chirp(n){
  // FIX ME
  // var stringChirp = null;
  if (n === 1) {
    return ' chirp'
  } else {
    return ' chirp' + chirp(--n);
  }
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});