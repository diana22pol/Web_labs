package com.lab5.web.backend.controller;

import com.lab5.web.backend.model.Hotel;
import com.lab5.web.backend.repository.HotelRepository;
import com.lab5.web.backend.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/hotels")
@CrossOrigin(origins = "http://localhost:3000")
public class HotelController {
    @Autowired
    private HotelService hotelService;
    @Autowired
    private HotelRepository hotelRepository;

    @PostMapping
    public Hotel addHotel(@RequestBody Hotel hotel) {
        return hotelService.addHotel(hotel);
    }

    @GetMapping
    public List<Hotel> getAllHotels() {
        return hotelService.findAllHotels();
    }

    @GetMapping("/{id}")
    public Hotel getHotelById(@PathVariable Integer id) {
        return hotelService.findHotelById(id);
    }

    @PutMapping("/{id}")
    public Hotel updateHotel(@PathVariable Integer id, @RequestBody Hotel hotel) {
        return hotelService.updateHotel(id, hotel);
    }

    @GetMapping("/filteredAndSorted")
    public List<Hotel> getFilteredAndSorted(
            @RequestParam(name = "title", required = false, defaultValue = "") String title,
            @RequestParam(name = "sortBy", required = false, defaultValue = "") String sortBy) {
        return hotelService.getFilteredAndSorted(title, sortBy);
    }

    @GetMapping("/search")
    public List<Hotel> searchHotelsByTitle(String title) {
        return hotelRepository.findAll().stream()
                .filter(helicopter -> {
                    String hotelTitle = helicopter.getTitle();
                    return hotelTitle != null && hotelTitle.toLowerCase().contains(title.toLowerCase());
                })
                .collect(Collectors.toList());
    }
}