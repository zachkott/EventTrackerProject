package com.skilldistillery.musictracker.services;

import java.util.List;

import com.skilldistillery.musictracker.entities.Band;

public interface BandService {

	List<Band> getAllBands();
	Band findById(Integer id);
	Band create(Band band);
	Band update(Integer id,Band band);
	boolean delete (Integer id);
	List<Band> findByGenre(String genre);

}
