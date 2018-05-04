
var musicPlayer ={
 currentSong: 0,
	songs: ['dayNnite','lazySong','mirrors','yeah'],
	songsInfo: {"Day N Nite": 'Kid Kudi', "The Lazy song": 'Bruno Mars',"Mirrors":"Justin Timberlake","Yeah!":"Usher"},
	play: function() {
		document.getElementById(this.songs[this.currentSong]).play();
		var showSong= Object.keys(this.songsInfo)[this.currentSong];
		$('#songTitle').text(showSong);
		$('#artists').text(this.songsInfo[showSong]);
	},
	pause: function() {
		document.getElementById(this.songs[this.currentSong]).pause();
	},
	prev: function() {
		this.pause();
		document.getElementById(this.songs[this.currentSong]).currentTime=0;
		if(this.currentSong > 0 ){
			this.currentSong = this.currentSong -1;
		}else{
			this.currentSong = 1
		};
		document.getElementById(this.songs[this.currentSong]).play();
		var showSong= Object.keys(this.songsInfo)[this.currentSong];
		$('#songTitle').text(showSong);
		$('#artists').text(this.songsInfo[showSong]);
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






































// function Jukebox(){

// 	this.play = function() {
// 		console.log('hi')
// 	}
// }

// var a  = new Jukebox()

