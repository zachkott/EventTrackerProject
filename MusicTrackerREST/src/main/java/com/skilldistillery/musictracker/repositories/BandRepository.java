package com.skilldistillery.musictracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.musictracker.entities.Band;

public interface BandRepository extends JpaRepository<Band, Integer> {

}
