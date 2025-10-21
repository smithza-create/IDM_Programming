//Array for genres
let genreNames = ["Rock", "Pop", "Indie"];

//Array within array for Artists
let artistNames = [
    //Rock artists
    ["Red Hot Chili Peppers", "Weezer"],
    //Pop artists
    ["Adele", "Hozier"],
    //Indie artists
    ["The Strokes", "Arctic Monkeys"]
];

//Array within an array within an array for song names
let musicLibrary = [
    //Rock Genre
    [
        //Red Hot Chili Peppers
        ["Can't Stop", "Scar Tissue", "By the Way", "Californication", "Snow", "Dark Necssities", "Otherside"],
        //Weezeer
        ["Island in the Sun", "Undone", "Hash Pipe", "Happy Together", "Budy Holly", "Los Angeles", "Say It Ain't So"]
    ],
    //Pop Genre
    [
        //Adele
        ["Set Fire to the Rain", "Someone Like You", "Rolling in the Deep", "Hello", "Love in the Dark", "Send My Love", "Skyfall"],
        //Hozier
        ["Too Sweet", "Would That I", "Someone New", "Take Me to Church", "Eat Your Young", "From Eden", "Work Song"]
    ],
    //Indie Genre
    [
        //The Strokes
        ["The Adults Are Talking", "Selfless", "Someday", "You Only Live Once", "Ode To The Mets", "Last Night", "Reptilia"],
        //Arctic Monkeys
        ["I Wanna Be Yours", "Why'd You Only Call Me When You're High", "Knee Socks", "505", "R U Mine?", "Do I Wanna Know", "Snap Out of it"]
    ]
];


//Function creating array index codes for each song/genre/artist
function flattenArray(library) {
    let codeList = [];
    
    //Assigning Genre index code
    for(let genreIndex = 0; genreIndex < library.length; genreIndex ++) {
        let genre = library[genreIndex];
        
        //Assigning Artist index Code
        for(let artistIndex = 0; artistIndex < genre.length; artistIndex ++) {
            let artist = genre[artistIndex];
            
            //Assigning Song index code
            for(let songIndex = 0; songIndex < artist.length; songIndex ++) {
                let song = artist[songIndex];
                
                //Compiling index codes into list
                codeList.push({
                    genreIndex,
                    artistIndex,
                    songIndex
                });
            }
        }
    }
    //Send codes outside of function
    return codeList;
}

//Playlist generating function
function playlistGenerator(library, count) {
    let completeLibrary = flattenArray(musicLibrary);
    let playlist = [];
    while (playlist.length < count) {
        let randomIndex = Math.floor(Math.random() * completeLibrary.length);
        let newSong = completeLibrary[randomIndex];
        
        //Duplicate song checker
        let duplicateSong = playlist.some(song =>
                                         song.genreIndex === newSong.genreIndex &&
                                         song.artistIndex === newSong.artistIndex &&
                                         song.songIndex === newSong.songIndex
                                         );
        if (duplicateSong === false) {
            playlist.push(newSong);
        }
    }
    //send playlist outside of function
    return playlist;
}

//Changing the song codes in playlist into names
function convertCodeToName (playlist) {
    
    //Mapping index numbers to names
    return playlist.map(song => {
        let genre = genreNames[song.genreIndex];
        let artist = artistNames[song.genreIndex][song.artistIndex];
        let title = musicLibrary[song.genreIndex][song.artistIndex][song.songIndex];
        
        //Sends new values outside of function
        return {
            genre,
            artist,
            title
        };
    });
}

//Display playlist on hmtl
function displayPlaylist () {
    let playlist = playlistGenerator(musicLibrary, 5);
    let namedPlaylist = convertCodeToName(playlist);
    
    //Find the spot in html document for list
    let listElement = document.getElementById("playlistDisplay");
    
    //clear previous lists
    listElement.innerHTML = "";
    
    //Create new list
    namedPlaylist.forEach(song => {
        let li = document.createElement("li");
        li.textContent = `"${song.title}" by ${song.artist} [${song.genre}]`;
        listElement.appendChild(li);
    });
}