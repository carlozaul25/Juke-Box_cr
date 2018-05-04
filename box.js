

	var imageContainer = document.getElementById('imageContainer')
	// imageContainer.style.backgroundImage = "url(" +  + ")"

	var musicPlayer = {
 	currentSong: 0,
	songs: ['dayNnite','lazySong','mirrors','yeah'],
	songsInfo: {"Day N Nite": 'Kid Kudi', "The lazy song": 'Bruno Mars',"Mirrors":"Justin Timberlake","Yeah!":"Usher"},
	currentImage: 0,
	songsImg: ["songImages/daynite.jpg", "songImages/lazysong.jpg","songImages/mirrors.jpg","songImages/Confessions.jpg"],
	play: function() {
		document.getElementById(this.songs[this.currentSong]).play();
		var showSong= Object.keys(this.songsInfo)[this.currentSong];
		$('#songTitle').text(showSong);
		$('#artists').text(this.songsInfo[showSong]);
			imageContainer.style.display = "block"
			imageContainer.style.backgroundSize= '200px, 200px';
			imageContainer.style.backgroundImage = "url("+ this.songsImg[this.currentSong]  + ")"
		

	},
	pause: function() {
		document.getElementById(this.songs[this.currentSong]).pause();
	},
	next: function() {
		this.pause();
		document.getElementById(this.songs[this.currentSong]).currentTime=0;
		if(this.currentSong < (this.songs.length -1)){
			this.currentSong = this.currentSong +1;
			imageContainer.style.backgroundImage = "url("+ this.songsImg[this.currentSong]  + ")"

		}else{
			this.currentSong = 0;
			imageContainer.style.backgroundImage = "url("+ this.songsImg[this.currentSong]  + ")"
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
















