package com.skilldistillery.musictracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.musictracker.entities.Band;
import com.skilldistillery.musictracker.services.BandService;

@RestController
@RequestMapping("api")
public class BandController {

	@Autowired
	private BandService service;
	
	@GetMapping("bands")
	public List<Band> index(){
	  return service.getAllBands();
	}

	@GetMapping(path = "bands/{id}")
	public Band show(@PathVariable int id, HttpServletResponse response) {
		Band band = service.findById(id);

		if (band == null) {
			response.setStatus(404);
		}

		return band;
	}
	
	@PostMapping("bands")
	public Band create(@RequestBody Band band, HttpServletRequest request, HttpServletResponse response) {
		Band created = null;
		try {
			created = service.create(band);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(band.getId());
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}

		return created;
	}
	
	@PutMapping(path = "bands/{id}")
	public Band update(@PathVariable int id, HttpServletResponse response, @RequestBody Band band) {
		Band updated = null;
		try {
			updated = service.update(id, band);
			response.setStatus(202);
		

		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(404);
			
		}

		return updated;
	}
	
	@DeleteMapping(path = "bands/{id}")
	public void delete(@PathVariable int id, HttpServletResponse response) {

		try {
			boolean deleted = service.delete(id);
			if (deleted) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}

		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		
	}

}
