window.addEventListener('load', function(e){
	console.log('script.js loaded');
	init();
});

function init(){
	document.artistForm.lookup.addEventListener('click', function(e){
		e.preventDefault();
		let artistId = document.artistForm.artistId.value;
		if(!isNaN(artistId) && artistId > 0){
			getArtist(artistId);
		}
	});
	loadAllArtists();
}

function loadAllArtists(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/bands");
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				displayArtists(JSON.parse(xhr.responseText));
			}
			else{
				console.error('Error loading artists: ' + xhr.status);
			}
		}
	};
	xhr.send();
}


//Find a single artist by Id
function getArtist(artistId){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/bands/' +  artistId);
	xhr.onreadystatechange  = function(){
		if(xhr.readyState ===  4){
			if(xhr.status === 200){
				console.log('Artist found')
				let artist = JSON.parse(xhr.responseText);
				displayArtist(artist);
			}
			else{
				console.log('Not found')
				displayError('File '+ artistId + ' not found')
			}
		}
	}
	xhr.send();
}

//Display Arist details
function displayArtist(artist){
	let dataDiv = document.getElementById('artistData');
	dataDiv.textContent ='';
	
	let name= document.createElement('h1');
	name.textContent = artist.name;
	dataDiv.appendChild(name);
	
	let label = document.createElement('blockquote');
	label.textContent = artist.label;
	dataDiv.appendChild(label);
	
	let  ul = document.createElement('ul');
	
	let origin = document.createElement('li');
	origin.textContent = 'Origin: ' +artist.origin;
	ul.appendChild(origin);
	
	let genre = document.createElement('li');
	genre.textContent  = 'Genre: ' + artist.genre;
	ul.appendChild(genre);
	
	let leadArtist = document.createElement('li');
	leadArtist.textContent = 'Lead Artist: ' + artist.leadArtist;
	ul.appendChild(leadArtist);
	
	let mostPlayed = document.createElement('li');
	mostPlayed.textContent = 'Most Played: '+ artist.mostPlayed;
	ul.appendChild(mostPlayed);
	
	let albums = document.createElement('li');
	albums.textContent = 'Albums: ' + artist.albums;
	ul.appendChild(albums);
	
	let songs = document.createElement('li');
	songs.textContent = 'Singles: ' + artist.songs;
	ul.appendChild(songs);
	
	
	let yearsActive = document.createElement('li');
	yearsActive.textContent = 'Years Active: ' + artist.yearsActive;
	ul.appendChild(yearsActive);
	
	let members = document.createElement('li');
	members.textContent = 'Members: ' + artist.members;
	ul.appendChild(members);
	
	
	dataDiv.appendChild(ul);
}

//Display all artists
function displayArtists(artistList){
	let dataDiv = document.getElementById("artistList");
	dataDiv.textContent = '';
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	for (let artist of artistList){
		let li = document.createElement('li');
		li.textContent = artist.name;
		
		ul.appendChild(li);
	}
}





//Error message
function displayError(msg){
	let  dataDiv = document.getElementById('artistData');
	dataDiv.textContent = '';
	dataDiv.textContent = msg;
}