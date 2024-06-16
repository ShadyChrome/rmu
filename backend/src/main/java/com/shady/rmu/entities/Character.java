package com.shady.rmu.entities;

import jakarta.persistence.*;
import java.util.Map;

@Entity
public class Character {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String characterName;
  private String playerName;
  private String campaign;
  private String sex;
  private String age;
  private String height;
  private String weight;
  private String build;
  private String skin;
  private String hair;
  private String eyes;
  private String race;
  private String culture;
  private String profession;
  private String realm;
  private String level;
  private String currentEP;
  private String epNextLevel;

  // Stats
  private int agilityTemp;
  private int agilityPot;
  private int constitutionTemp;
  private int constitutionPot;
  private int empathyTemp;
  private int empathyPot;
  private int intuitionTemp;
  private int intuitionPot;
  private int memoryTemp;
  private int memoryPot;
  private int presenceTemp;
  private int presencePot;
  private int quicknessTemp;
  private int quicknessPot;
  private int reasoningTemp;
  private int reasoningPot;
  private int selfDisciplineTemp;
  private int selfDisciplinePot;
  private int strengthTemp;
  private int strengthPot;

  @ElementCollection
  @CollectionTable(name = "character_skills", joinColumns = @JoinColumn(name = "character_id"))
  @MapKeyColumn(name = "skill")
  @Column(name = "times_learned")
  private Map<String, Integer> skills;

  // Getters and Setters
  // ... (omitted for brevity)
}
