package com.shady.rmu.services;

import com.shady.rmu.entities.ProfessionBonus;
import com.shady.rmu.repositories.ProfessionBonusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessionBonusService {

  @Autowired
  private ProfessionBonusRepository professionBonusRepository;

  public List<ProfessionBonus> findByProfession(String profession) {
    return professionBonusRepository.findByProfession(profession);
  }
}
