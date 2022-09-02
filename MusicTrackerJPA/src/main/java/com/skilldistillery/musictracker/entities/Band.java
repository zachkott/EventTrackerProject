package com.skilldistillery.musictracker.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Band {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private String genre;

	@Column(name = "years_active")
	private int yearsActive;

	private int albums;

	private int songs;

	@Column(name = "most_played")
	private String mostPlayed;

	private String origin;

	private int members;

	private String label;

	@Column(name = "lead_singer")
	private String leadSinger;

	public Band() {
		super();
	}

	public Band(int id, String name, String genre, int yearsActive, int albums, int songs, String mostPlayed,
			String origin, int members, String label, String leadSinger) {
		super();
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.yearsActive = yearsActive;
		this.albums = albums;
		this.songs = songs;
		this.mostPlayed = mostPlayed;
		this.origin = origin;
		this.members = members;
		this.label = label;
		this.leadSinger = leadSinger;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public int getYearsActive() {
		return yearsActive;
	}

	public void setYearsActive(int yearsActive) {
		this.yearsActive = yearsActive;
	}

	public int getAlbums() {
		return albums;
	}

	public void setAlbums(int albums) {
		this.albums = albums;
	}

	public int getSongs() {
		return songs;
	}

	public void setSongs(int songs) {
		this.songs = songs;
	}

	public String getMostPlayed() {
		return mostPlayed;
	}

	public void setMostPlayed(String mostPlayed) {
		this.mostPlayed = mostPlayed;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public int getMembers() {
		return members;
	}

	public void setMembers(int members) {
		this.members = members;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getLeadSinger() {
		return leadSinger;
	}

	public void setLeadSinger(String leadSinger) {
		this.leadSinger = leadSinger;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Band other = (Band) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Band [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", genre=");
		builder.append(genre);
		builder.append(", yearsActive=");
		builder.append(yearsActive);
		builder.append(", albums=");
		builder.append(albums);
		builder.append(", songs=");
		builder.append(songs);
		builder.append(", mostPlayed=");
		builder.append(mostPlayed);
		builder.append(", origin=");
		builder.append(origin);
		builder.append(", members=");
		builder.append(members);
		builder.append(", label=");
		builder.append(label);
		builder.append(", leadSinger=");
		builder.append(leadSinger);
		builder.append("]");
		return builder.toString();
	}

}
