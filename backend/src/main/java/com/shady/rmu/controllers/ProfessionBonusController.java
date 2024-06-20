package com.shady.rmu.controllers;

import com.shady.rmu.entities.ProfessionBonus;
import com.shady.rmu.services.ProfessionBonusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profession-bonuses")
public class ProfessionBonusController {

  @Autowired
  private ProfessionBonusService professionBonusService;

  @GetMapping("/{profession}")
  public ResponseEntity<List<ProfessionBonus>> getBonusesByProfession(@PathVariable String profession) {
    List<ProfessionBonus> bonuses = professionBonusService.findByProfession(profession);
    return ResponseEntity.ok(bonuses);
  }
}
