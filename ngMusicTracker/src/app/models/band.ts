export class Band {
  id: number;
  name: string;
  genre: string;
  yearsActive: number;
  albums: number;
  mostPlayed: string;
  origin: string;
  singles: number;
  members: number;
  label: string;

  constructor(
    id: number = 0,
    name: string = '',
    genre: string = '',
    yearsActive: number = 0,
    albums: number = 0,
    mostPlayed: string = '',
    origin: string = '',
    singles: number = 0,
    members: number = 0,
    label: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.albums = albums;
    this.yearsActive = yearsActive;
    this.members = members;
    this.label = label;
    this.singles = singles;
    this.mostPlayed = mostPlayed;
    this.origin = origin;
  }
}
