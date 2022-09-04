package com.skilldistillery.musictracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.musictracker.entities.Band;
import com.skilldistillery.musictracker.repositories.BandRepository;

@Service
public class BandServiceImpl implements BandService {

	@Autowired
	private BandRepository repo;

	@Override
	public List<Band> getAllBands() {
		return repo.findAll();
	}

	@Override
	public Band findById(Integer id) {
		Optional<Band> bandOpt = repo.findById(id);
		Band band = null;

		if (bandOpt.isPresent()) {
			band = bandOpt.get();
		}
		return band;
	}

	@Override
	public Band create(Band band) {

		if (band.getName() == null) {
			band.setName("Untitled");
		}

		return repo.saveAndFlush(band);
	}

	@Override
	public Band update(Integer id, Band band) {
		Optional<Band> bandOpt = repo.findById(id);
		Band updated = null;
		if (bandOpt.isPresent()) {
			updated = bandOpt.get();

			if (band.getName() != null) {
				updated.setName(band.getName());
			}
			if (band.getGenre() != null) {
				updated.setGenre(band.getGenre());
			}
			if (band.getYearsActive() != 0) {
				updated.setYearsActive(band.getYearsActive());
			}
			if (band.getSongs() != null) {
				updated.setSongs(band.getSongs());
			}
			if (band.getOrigin() != null) {
				updated.setOrigin(band.getOrigin());
			}
			if (band.getMembers() != 0) {
				updated.setMembers(band.getMembers());
			}
			if (band.getLeadArtist() != null) {
				updated.setLeadArtist(band.getLeadArtist());
			}
			repo.saveAndFlush(updated);
		}
		return updated;
	}

	@Override
	public boolean delete(Integer id) {
		boolean deleted = false;
		Optional<Band> bandOpt = repo.findById(id);
		if (bandOpt.isPresent()) {
			repo.delete(bandOpt.get());
			deleted = true;
		}
		return deleted;
	}

}
