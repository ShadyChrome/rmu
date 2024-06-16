package com.shady.rmu.services;

import com.shady.rmu.entities.Character;
import com.shady.rmu.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {
  @Autowired
  private CharacterRepository characterRepository;

  public Character saveCharacter(Character character) {
    return characterRepository.save(character);
  }

  public List<Character> getAllCharacters() {
    return characterRepository.findAll();
  }
}

