package com.shady.rmu.services;

import com.shady.rmu.entities.ProfessionSkillCost;
import com.shady.rmu.repositories.ProfessionSkillCostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessionSkillCostService {

  @Autowired
  private ProfessionSkillCostRepository repository;

  public List<ProfessionSkillCost> findByProfession(String profession) {
    return repository.findByProfession(profession);
  }
}

