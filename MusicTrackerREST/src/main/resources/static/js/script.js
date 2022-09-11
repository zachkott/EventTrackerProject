window.addEventListener('load', function(e){
	console.log('script.js loaded');
	init();
});

function init(){
	
	loadAllArtists();
	
	document.artistForm.lookup.addEventListener('click', function(e){
		e.preventDefault();
		let artistId = document.artistForm.artistId.value;
		if(!isNaN(artistId) && artistId > 0){
			getArtist(artistId);
		}
	});
	
	
	
	document.addArtistForm.addArtist.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Adding artist');
		let artist = {
			name: addArtistForm.name.value,
			genre: addArtistForm.genre.value,
			label: addArtistForm.label.value,
			origin: addArtistForm.origin.value,
			mostPlayed: addArtistForm.mostPlayed.value,
			leadArtist: addArtistForm.leadArtist.value,
			yearsActive: addArtistForm.yearsActive.value,
			songs: addArtistForm.songs.value,
			albums: addArtistForm.albums.value,
			members: addArtistForm.members.value
		}
		addNewArtist(artist);
	});
	
	
	
	
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
	removeUpdateForm();
	removeClickTable();
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
	
let updateBtn = document.createElement('button');
updateBtn.textContent = 'Update Artist';
dataDiv.appendChild(updateBtn);
updateBtn.addEventListener('click', function(e){
	e.preventDefault();
	updateArtistForm(artist);
})
	
	
	let deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Delete Artist';
	dataDiv.appendChild(deleteBtn);
	deleteBtn.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Deleting Artist');
		let artistId = document.artistForm.artistId.value;
		deleteArtist(artistId);
		
	});
		
	
	
	
}


//Add new artist
function addNewArtist(artist){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/bands');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status == 200 || xhr.status === 201){
				console.log('Artist added')
				let newArtist = JSON.parse(xhr.responseText);
				displayArtist(newArtist);
			}
			else if (xhr.status === 404){
				displayError('Invalid data');
			}
			else {
				displayError('Error creating artist' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let artistJson = JSON.stringify(artist);
	xhr.send(artistJson);
}

//Update artist
function updateArtist(artist){
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/bands/' + artist.id);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status == 200 || xhr.status === 202){
				console.log('Artist updated')
				let updatedArtist = JSON.parse(xhr.responseText);
				displayArtist(updatedArtist);
			}
			else if (xhr.status === 404){
				displayError('Invalid data');
			}
			else {
				displayError('Error updating artist' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let artistJson = JSON.stringify(artist);
	xhr.send(artistJson);
}


//Delete artist
function deleteArtist(artistId){
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/bands/' + artistId);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 204){
				console.log('Arist succesfully deleted')
				displaySuccess('Arist succesfully deleted ' + xhr.status)
			}
			else{
				displayError('Error deleting artist ' + xhr.status)
			}
		}
	}
	xhr.send();
}






//Display all artists
function displayArtists(artistList){
	let tbody = document.querySelector('#artistList>table>tbody');
	tbody.textContent = '';
	for (let artist of artistList) {
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		let td = document.createElement('td');
		td.textContent = artist.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = artist.name;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = artist.label;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = artist.genre;
		tr.appendChild(td);
		
		tr.addEventListener('click', function(evt){
			let profile = document.getElementById('artistProfile');
			profile.textContent = '';
			let name = document.createElement('h1');
			name.textContent =  artist.name;
			profile.appendChild(name);
			
			let label = document.createElement('blockquote');
			label.textContent = artist.label;
			profile.appendChild(label);
			
			let ul = document.createElement('ul')
			profile.appendChild(ul);
	
			
			let origin = document.createElement('li');
			origin.textContent = 'Origin: ' +artist.origin;
			ul.appendChild(origin);
			
			let leadArtist = document.createElement('li');
			leadArtist.textContent = 'Lead Artist: ' + artist.leadArtist;
			ul.appendChild(leadArtist);
			
			let mostPlayed = document.createElement('li');
			mostPlayed.textContent = 'Most Played: ' + artist.mostPlayed;
			ul.appendChild(mostPlayed);
			
			let members = document.createElement('li');
			members.textContent = 'Members: ' +  artist.members;
			ul.appendChild(members);
			
			let albums = document.createElement('li');
			albums.textContent = 'Albums: '  + artist.albums;
			ul.appendChild(albums)
			
			let songs = document.createElement('li');
			songs.textContent = 'Singles: '  + artist.songs;
			ul.appendChild(songs)
			
			let yearsActive = document.createElement('li');
			yearsActive.textContent = 'Albums: '  + artist.yearsActive;
			ul.appendChild(yearsActive)
			
			console.log('Selected artist ' + artist.id);
		
			

		});
	}
	
	
}





//Update 
updateArtistForm = function(artist){
	displayArtist(artist);
	
	let dataDiv =document.getElementById('update');
	dataDiv.textContent = '';
	let updateForm = document.createElement('form');
	dataDiv.appendChild(updateForm);
	
	let hidden = document.createElement('input');
	hidden.type = "hidden";
	hidden.value = artist.id;
	hidden.name = 'artistId';
	updateForm.appendChild(hidden);
	
	let br = document.createElement('br');
	updateForm.appendChild(br);
	
	let label1 = document.createElement('label');
	label1.textContent= "Name: "
	updateForm.appendChild(label1);
	let name = document.createElement('input');
	name.type = "text";
	name.value = artist.name;
	name.name = "name";
	updateForm.appendChild(name);
	
	let br1 = document.createElement('br');
	updateForm.appendChild(br1);
	
	let label2 = document.createElement('label');
	label2.textContent= "Genre: "
	updateForm.appendChild(label2);
	let genre = document.createElement('input');
	genre.type = "text";
	genre.value = artist.genre;
	genre.name = "genre";
	updateForm.appendChild(genre);
	
	
	let br3 = document.createElement('br');
	updateForm.appendChild(br3);

	let label3 = document.createElement('label');
	label3.textContent= "Label: "
	updateForm.appendChild(label3);
	let label = document.createElement('input');
	label.type = "text";
	label.value = artist.label;
	label.name = "label";
	updateForm.appendChild(label);
	
	let br4 = document.createElement('br');
	updateForm.appendChild(br4);
	
	let label4 = document.createElement('label');
	label4.textContent= "Most Played: "
	updateForm.appendChild(label4);
	let mostPlayed = document.createElement('input');
	mostPlayed.type = "text";
	mostPlayed.value = artist.mostPlayed;
	mostPlayed.name = "mostPlayed";
	updateForm.appendChild(mostPlayed);
	
	let br5 = document.createElement('br');
	updateForm.appendChild(br5);

	let label6 = document.createElement('label');
	label6.textContent= "Origin: "
	updateForm.appendChild(label6);
	let origin = document.createElement('input');
	origin.type = "text";
	origin.value = artist.origin;
	origin.name = "origin";
	updateForm.appendChild(origin);
	
	let br6 = document.createElement('br');
	updateForm.appendChild(br6);
	
	let label7 = document.createElement('label');
	label7.textContent= "Lead Artist: "
	updateForm.appendChild(label7);
	let leadArtist = document.createElement('input');
	leadArtist.type = "text";
	leadArtist.value = artist.leadArtist;
	leadArtist.name = "leadArtist";
	updateForm.appendChild(leadArtist);
	
	let br7 = document.createElement('br');
	updateForm.appendChild(br7);
	
	let label8 = document.createElement('label');
	label8.textContent= "Years Active: "
	updateForm.appendChild(label8);
	let yearsActive = document.createElement('input');
	yearsActive.type = "number";
	yearsActive.value = artist.yearsActive;
	yearsActive.name = "yearsActive";
	updateForm.appendChild(yearsActive);
	
	let br8 = document.createElement('br');
	updateForm.appendChild(br8);

	let label9 = document.createElement('label');
	label9.textContent= "Albums: "
	updateForm.appendChild(label9);
	let albums = document.createElement('input');
	albums.type = "number";
	albums.value = artist.albums;
	albums.name = "albums";
	updateForm.appendChild(albums);
	
	let br9 = document.createElement('br');
	updateForm.appendChild(br9);

	let label10 = document.createElement('label');
	label10.textContent= "Singles: "
	updateForm.appendChild(label10);
	let songs = document.createElement('input');
	songs.type = "number";
	songs.value = artist.songs;
	songs.name = "singles";
	updateForm.appendChild(songs);
	
	let br10 = document.createElement('br');
	updateForm.appendChild(br10);

	let label11 = document.createElement('label');
	label11.textContent= "Members: "
	updateForm.appendChild(label11);
	let members = document.createElement('input');
	members.type = "number";
	members.value = artist.members;
	members.name = "members";
	updateForm.appendChild(members);
	
	let br11 = document.createElement('br');
	updateForm.appendChild(br11);
	
	let update = document.createElement('button');
	update.name="update";
	update.textContent='Update';
	updateForm.appendChild(update);
	
	update.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Updating artist');
		let updatedArtist = {
			id: hidden.value,
			name: name.value,
			genre: genre.value,
			label: label.value,
			origin: origin.value,
			mostPlayed: mostPlayed.value,
			leadArtist: leadArtist.value,
			yearsActive: yearsActive.value,
			songs: songs.value,
			albums: albums.value,
			members: members.value
		};
		updateArtist(updatedArtist);
	});
	
}

//Function removes update form when searching for new artist
function removeUpdateForm(){
    let dataDiv=document.getElementById("update");
    dataDiv.textContent= '';
    while(dataDiv.lastElementChild){
    dataDiv.removeChild(dataDiv.firstElementChild);
    }
}

function removeClickTable(){
    let dataDiv=document.getElementById("artistProfile");
    dataDiv.textContent= '';
    while(dataDiv.lastElementChild){
    dataDiv.removeChild(dataDiv.firstElementChild);
    }
}



//Success message
function displaySuccess(msg){
	let  dataDiv = document.getElementById('artistData');
	dataDiv.textContent = '';
	dataDiv.textContent = msg;
}


//Error message
function displayError(msg){
	let  dataDiv = document.getElementById('artistData');
	dataDiv.textContent = '';
	dataDiv.textContent = msg;
}

