package com.shady.rmu.csv;

import com.shady.rmu.entities.ProfessionSkillCost;
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

  @PostConstruct
  public void importCsv() {
    try {
      Reader reader = new FileReader(resourceLoader.getResource("classpath:skillcost.csv").getFile());
      CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withDelimiter(';').withFirstRecordAsHeader());
      List<ProfessionSkillCost> skillCosts = new ArrayList<>();
      for (CSVRecord record : csvParser) {
        String skill = record.get("Skill");
        String stats = record.get("Stats");
        for (String header : record.toMap().keySet()) {
          if (!header.equals("Skill") && !header.equals("Stats")) {
            String cost = record.get(header);
            ProfessionSkillCost skillCost = new ProfessionSkillCost(skill, stats, header, cost);
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
}
