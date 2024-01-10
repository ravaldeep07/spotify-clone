console.log("spotify")

//variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let mastername = document.getElementById('mastername');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songItem'));
// let next = document.getElementById('next');
// let previous = document.getElementById('previous');

let songs = [
    { songname: "weewe", folepath: "songs/1.mp3", coverpath: "covers/parvana_4.jpg" },
    { songname: "ewed", folepath: "songs/2.mp3", coverpath: "covers/bek.jpg" },
    { songname: "1ssced", folepath: "songs/3.mp3", coverpath: "covers/laado song_4.jpg" },
    { songname: "19xssxsx", folepath: "songs/4.mp3", coverpath: "covers/lutt putt gaya(dunkim movie)_4.jpg " },
    { songname: "sxsxw", folepath: "songs/5.mp3", coverpath: "covers/1920.majboor tu bhi kahin4.jpg" },
    { songname: "1903", folepath: "songs/6.mp3", coverpath: "covers/saanjha(movie= zara hatke zara bachke)_4.jpg" },
    { songname: "1903", folepath: "songs/7.mp3", coverpath: "covers/tujhe mare liye mujhe tere liye_4.jpg" },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});


// play\ pause click  
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllAPlays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        gif.style.opacity = 1;
       
    });
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        makeAllAPlays();
      
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastername.innerText=songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement .play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})

document.getElementsById('next').addEventListener('click',() =>{
 if(songIndex>=9){
    songIndex = 0;
 }
 else {
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastername.innerText=songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement .play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex -= 1;
    } else {
        songIndex -= 1;
    }
    
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastername.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});