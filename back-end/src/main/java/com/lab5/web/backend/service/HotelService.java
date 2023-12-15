package com.lab5.web.backend.service;

import com.lab5.web.backend.model.Hotel;
import com.lab5.web.backend.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class HotelService {
    @Autowired
    private HotelRepository hotelRepository;
    public List<Hotel> findAllHotels() {
        return hotelRepository.findAll();
    }
    public Hotel findHotelById(Integer id) {
        return hotelRepository.findById(id).orElse(null);
    }
    public Hotel addHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }
    public Hotel updateHotel(Integer id, Hotel hotel) {
        if (hotelRepository.existsById(id)) {
            hotel.setId(id);
            return hotelRepository.save(hotel);
        }
        return null;
    }
    public List<Hotel> getFilteredAndSorted(String title, String sortBy) {
        List<Hotel> filteredModels = hotelRepository.findAll();

        if ("A_to_Z".equals(title)) {
            filteredModels.sort(Comparator.comparing(Hotel::getTitle, Comparator.nullsLast(Comparator.naturalOrder())));
        } else if ("Z_to_A".equals(title)) {
            filteredModels.sort(Comparator.comparing(Hotel::getTitle, Comparator.nullsLast(Comparator.reverseOrder())));
        }

        if ("old_to_new".equals(sortBy)) {
            filteredModels.sort(Comparator.comparing(Hotel::getId));
        } else if ("new_to_old".equals(sortBy)) {
            filteredModels.sort(Comparator.comparing(Hotel::getId).reversed());
        }
        return filteredModels;
    }
}
