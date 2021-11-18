const songs = [
    "A-Figure-of-Speech_AdobeStock_357620408_preview.m4a",
    "Acoustic-Live_AdobeStock_468477272_preview.m4a",
    "Happy_AdobeStock_465136925_preview.m4a",
    "Joyful-Party_AdobeStock_468476472_preview.m4a",
    "Rainy-City-Nights_AdobeStock_465137747_preview.m4a",
    "Summer-Upbeat-Rock_AdobeStock_387181392_preview.m4a",
    "Sunset-Drive_AdobeStock_465141477_preview.m4a"
];

function createSongList() {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

songList.onclick = function (e) {
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    const player = document.getElementById("player");
    player.load();
    player.play();
};