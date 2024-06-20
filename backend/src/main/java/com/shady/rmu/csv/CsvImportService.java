package com.shady.rmu.csv;

import com.shady.rmu.entities.ProfessionBonus;
import com.shady.rmu.entities.ProfessionSkillCost;
import com.shady.rmu.repositories.ProfessionBonusRepository;
import com.shady.rmu.repositories.ProfessionSkillCostRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

@Service
public class CsvImportService {
  @Autowired
  private ResourceLoader resourceLoader;
  @Autowired
  private ProfessionSkillCostRepository skillsRepository;
  @Autowired
  private ProfessionBonusRepository bonusRepository;

  @PostConstruct
  public void importCsv() {
    importSkillCosts();
    importProfessionBonuses();
  }

  private void importSkillCosts() {
    try {
      Reader reader = new FileReader(resourceLoader.getResource("classpath:skillcost_advanced.csv").getFile());
      CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withDelimiter(';').withFirstRecordAsHeader());
      List<ProfessionSkillCost> skillCosts = new ArrayList<>();
      for (CSVRecord record : csvParser) {
        String category = record.get("Category");
        String skillName = record.get("Skill Name");
        String description = record.get("Description");
        String stats = record.get("Stats");
        for (String header : record.toMap().keySet()) {
          if (!header.equals("Category") && !header.equals("Skill Name") && !header.equals("Description") && !header.equals("Stats")) {
            String cost = record.get(header);
            ProfessionSkillCost skillCost = new ProfessionSkillCost(category, skillName, description, stats, header, cost);
            skillCosts.add(skillCost);
          }
        }
      }
      skillsRepository.saveAll(skillCosts);
      csvParser.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  private void importProfessionBonuses() {
    try {
      Reader reader = new FileReader(resourceLoader.getResource("classpath:profession_bonus.csv").getFile());
      CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withDelimiter(';').withFirstRecordAsHeader());
      List<ProfessionBonus> bonuses = new ArrayList<>();
      for (CSVRecord record : csvParser) {
        String skillName = record.get("Skill Name");
        for (String header : record.toMap().keySet()) {
          if (!header.equals("Skill Name") && record.get(header).equals("1")) {
            ProfessionBonus bonus = new ProfessionBonus(skillName, header);
            bonuses.add(bonus);
          }
        }
      }
      bonusRepository.saveAll(bonuses);
      csvParser.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
