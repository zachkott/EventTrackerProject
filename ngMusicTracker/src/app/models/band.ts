export class Band {
  id: number;
  name: string;
  genre: string;
  yearsActive: number;
  albums: number;
  mostPlayed: string;
  origin: string;
  songs: number;
  members: number;
  label: string;
  leadArtist: string;

  constructor(
    id: number = 0,
    name: string = '',
    genre: string = '',
    yearsActive: number = 0,
    albums: number = 0,
    mostPlayed: string = '',
    origin: string = '',
    songs: number = 0,
    members: number = 0,
    label: string = '',
    leadArtist: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.albums = albums;
    this.yearsActive = yearsActive;
    this.members = members;
    this.label = label;
    this.songs = songs;
    this.mostPlayed = mostPlayed;
    this.origin = origin;
    this.leadArtist = leadArtist;
  }
}
