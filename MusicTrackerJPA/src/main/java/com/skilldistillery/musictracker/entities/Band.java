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
	private Integer yearsActive;

	private Integer albums;

	private Integer singles;

	@Column(name = "most_played")
	private String mostPlayed;

	private String origin;

	private Integer members;

	private String label;

	@Column(name = "lead_artist")
	private String leadArtist;

	public Band() {
		super();
	}

	

	public Band(int id, String name, String genre, Integer yearsActive, Integer albums, Integer singles, String mostPlayed,
			String origin, Integer members, String label, String leadArtist) {
		super();
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.yearsActive = yearsActive;
		this.albums = albums;
		this.singles = singles;
		this.mostPlayed = mostPlayed;
		this.origin = origin;
		this.members = members;
		this.label = label;
		this.leadArtist = leadArtist;
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



	public void setYearsActive(Integer yearsActive) {
		this.yearsActive = yearsActive;
	}



	public Integer getAlbums() {
		return albums;
	}



	public void setAlbums(Integer albums) {
		this.albums = albums;
	}



	public Integer getSongs() {
		return singles;
	}



	public void setSongs(Integer singles) {
		this.singles = singles;
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



	public Integer getMembers() {
		return members;
	}



	public void setMembers(Integer members) {
		this.members = members;
	}



	public String getLabel() {
		return label;
	}



	public void setLabel(String label) {
		this.label = label;
	}



	public String getLeadArtist() {
		return leadArtist;
	}



	public void setLeadArtist(String leadArtist) {
		this.leadArtist = leadArtist;
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
		return id == other.id;
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
		builder.append(", singles=");
		builder.append(singles);
		builder.append(", mostPlayed=");
		builder.append(mostPlayed);
		builder.append(", origin=");
		builder.append(origin);
		builder.append(", members=");
		builder.append(members);
		builder.append(", label=");
		builder.append(label);
		builder.append(", leadArtist=");
		builder.append(leadArtist);
		builder.append("]");
		return builder.toString();
	}





}
