package com.shady.rmu.controllers;

import com.shady.rmu.entities.ProfessionSkillCost;
import com.shady.rmu.services.ProfessionSkillCostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skill-costs")
public class ProfessionSkillCostController {

  @Autowired
  private ProfessionSkillCostService professionSkillCostService;

  @GetMapping("/{profession}")
  public ResponseEntity<List<ProfessionSkillCost>> getSkillCostsByProfession(@PathVariable String profession) {
    List<ProfessionSkillCost> skillCosts = professionSkillCostService.findByProfession(profession);
    return ResponseEntity.ok(skillCosts);
  }
}
