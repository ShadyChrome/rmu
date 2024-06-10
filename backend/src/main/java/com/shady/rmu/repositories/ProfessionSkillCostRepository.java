package com.shady.rmu.repositories;

import com.shady.rmu.entities.ProfessionSkillCost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfessionSkillCostRepository extends JpaRepository<ProfessionSkillCost, Long> {
  List<ProfessionSkillCost> findByProfession(String profession);
}
