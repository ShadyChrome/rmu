package com.shady.rmu.repositories;

import com.shady.rmu.entities.ProfessionBonus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfessionBonusRepository extends JpaRepository<ProfessionBonus, Long> {
  List<ProfessionBonus> findByProfession(String profession);
}

