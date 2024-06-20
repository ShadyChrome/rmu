package com.shady.rmu.controllers;

import com.shady.rmu.entities.Character;
import com.shady.rmu.services.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {

  @Autowired
  private CharacterService characterService;

  @PostMapping("/save")
  public ResponseEntity<Character> saveCharacter(@RequestBody Character character) {
    Character savedCharacter = characterService.saveCharacter(character);
    return ResponseEntity.ok(savedCharacter);
  }

  @GetMapping("/all")
  public ResponseEntity<List<Character>> getAllCharacters() {
    List<Character> characters = characterService.getAllCharacters();
    return ResponseEntity.ok(characters);
  }
}
