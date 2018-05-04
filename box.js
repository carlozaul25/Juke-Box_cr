
var musicPlayer ={
 currentSong: 0,
	songs: ['dayNnite','lazySong','mirrors','yeah'],
	songsInfo: {"Day N Nite": 'Kid Kudi', "The lazy song": 'Bruno Mars',"Mirrors":"Justin Timberlake","Yeah!":"Usher"},
	currentImage: 0,
	// songsImg: ['dayniteImg','lazyImg','mirrorsImg','yeahImg'],

	play: function() {
		document.getElementById(this.songs[this.currentSong]).play();
		var showSong= Object.keys(this.songsInfo)[this.currentSong];
		$('#songTitle').text(showSong);
		$('#artists').text(this.songsInfo[showSong]);
		$("img[src='song-images/daynite.jpg']").hide();
		$("img[src='song-images/lazysong.jpg']").hide();
		$("img[src='song-images/mirrors.jpg']").hide();
		$("img[src='song-images/Confessions.jpg']").hide();
	},
	pause: function() {
		document.getElementById(this.songs[this.currentSong]).pause();
	},
	next: function() {
		this.pause();
		document.getElementById(this.songs[this.currentSong]).currentTime=0;
		if(this.currentSong < (this.songs.length -1)){
			this.currentSong = this.currentSong +1;
		}else{
			this.currentSong = 0;
		};
		document.getElementById(this.songs[this.currentSong]).play();
		var showSong= Object.keys(this.songsInfo)[this.currentSong];
		$('#songTitle').text(showSong);
		$('#artists').text(this.songsInfo[showSong]);

	}

}

	$(document).ready(function(){

	$("#play").on("click", function(){
		musicPlayer.play()
	})

	$("#pause").on("click", function(){
		musicPlayer.pause()
	})

	$("#prev").on("click", function(){
		musicPlayer.prev()
	})

	$("#next").on("click", function(){
		musicPlayer.next()
	})
});





















