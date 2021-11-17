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
        <li>A-Figure-of-Speech_AdobeStock_357620408_preview.m4a</li>
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list
}

document.getElementById('songList').appendChild(createSongList())