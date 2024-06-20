package com.shady.rmu.entities;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Map;

@Entity
public class Character {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
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
  private int level;
  private int currentEP;
  private int epNextLevel;

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
  private Map<String, Integer> skills;

  @ElementCollection
  private Map<String, String> descriptions;

  public Character() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getCharacterName() {
    return characterName;
  }

  public void setCharacterName(String characterName) {
    this.characterName = characterName;
  }

  public String getPlayerName() {
    return playerName;
  }

  public void setPlayerName(String playerName) {
    this.playerName = playerName;
  }

  public String getCampaign() {
    return campaign;
  }

  public void setCampaign(String campaign) {
    this.campaign = campaign;
  }

  public String getSex() {
    return sex;
  }

  public void setSex(String sex) {
    this.sex = sex;
  }

  public String getAge() {
    return age;
  }

  public void setAge(String age) {
    this.age = age;
  }

  public String getHeight() {
    return height;
  }

  public void setHeight(String height) {
    this.height = height;
  }

  public String getWeight() {
    return weight;
  }

  public void setWeight(String weight) {
    this.weight = weight;
  }

  public String getBuild() {
    return build;
  }

  public void setBuild(String build) {
    this.build = build;
  }

  public String getSkin() {
    return skin;
  }

  public void setSkin(String skin) {
    this.skin = skin;
  }

  public String getHair() {
    return hair;
  }

  public void setHair(String hair) {
    this.hair = hair;
  }

  public String getEyes() {
    return eyes;
  }

  public void setEyes(String eyes) {
    this.eyes = eyes;
  }

  public String getRace() {
    return race;
  }

  public void setRace(String race) {
    this.race = race;
  }

  public String getCulture() {
    return culture;
  }

  public void setCulture(String culture) {
    this.culture = culture;
  }

  public String getProfession() {
    return profession;
  }

  public void setProfession(String profession) {
    this.profession = profession;
  }

  public String getRealm() {
    return realm;
  }

  public void setRealm(String realm) {
    this.realm = realm;
  }

  public int getLevel() {
    return level;
  }

  public void setLevel(int level) {
    this.level = level;
  }

  public int getCurrentEP() {
    return currentEP;
  }

  public void setCurrentEP(int currentEP) {
    this.currentEP = currentEP;
  }

  public int getEpNextLevel() {
    return epNextLevel;
  }

  public void setEpNextLevel(int epNextLevel) {
    this.epNextLevel = epNextLevel;
  }

  public int getAgilityTemp() {
    return agilityTemp;
  }

  public void setAgilityTemp(int agilityTemp) {
    this.agilityTemp = agilityTemp;
  }

  public int getAgilityPot() {
    return agilityPot;
  }

  public void setAgilityPot(int agilityPot) {
    this.agilityPot = agilityPot;
  }

  public int getConstitutionTemp() {
    return constitutionTemp;
  }

  public void setConstitutionTemp(int constitutionTemp) {
    this.constitutionTemp = constitutionTemp;
  }

  public int getConstitutionPot() {
    return constitutionPot;
  }

  public void setConstitutionPot(int constitutionPot) {
    this.constitutionPot = constitutionPot;
  }

  public int getEmpathyTemp() {
    return empathyTemp;
  }

  public void setEmpathyTemp(int empathyTemp) {
    this.empathyTemp = empathyTemp;
  }

  public int getEmpathyPot() {
    return empathyPot;
  }

  public void setEmpathyPot(int empathyPot) {
    this.empathyPot = empathyPot;
  }

  public int getIntuitionTemp() {
    return intuitionTemp;
  }

  public void setIntuitionTemp(int intuitionTemp) {
    this.intuitionTemp = intuitionTemp;
  }

  public int getIntuitionPot() {
    return intuitionPot;
  }

  public void setIntuitionPot(int intuitionPot) {
    this.intuitionPot = intuitionPot;
  }

  public int getMemoryTemp() {
    return memoryTemp;
  }

  public void setMemoryTemp(int memoryTemp) {
    this.memoryTemp = memoryTemp;
  }

  public int getMemoryPot() {
    return memoryPot;
  }

  public void setMemoryPot(int memoryPot) {
    this.memoryPot = memoryPot;
  }

  public int getPresenceTemp() {
    return presenceTemp;
  }

  public void setPresenceTemp(int presenceTemp) {
    this.presenceTemp = presenceTemp;
  }

  public int getPresencePot() {
    return presencePot;
  }

  public void setPresencePot(int presencePot) {
    this.presencePot = presencePot;
  }

  public int getQuicknessTemp() {
    return quicknessTemp;
  }

  public void setQuicknessTemp(int quicknessTemp) {
    this.quicknessTemp = quicknessTemp;
  }

  public int getQuicknessPot() {
    return quicknessPot;
  }

  public void setQuicknessPot(int quicknessPot) {
    this.quicknessPot = quicknessPot;
  }

  public int getReasoningTemp() {
    return reasoningTemp;
  }

  public void setReasoningTemp(int reasoningTemp) {
    this.reasoningTemp = reasoningTemp;
  }

  public int getReasoningPot() {
    return reasoningPot;
  }

  public void setReasoningPot(int reasoningPot) {
    this.reasoningPot = reasoningPot;
  }

  public int getSelfDisciplineTemp() {
    return selfDisciplineTemp;
  }

  public void setSelfDisciplineTemp(int selfDisciplineTemp) {
    this.selfDisciplineTemp = selfDisciplineTemp;
  }

  public int getSelfDisciplinePot() {
    return selfDisciplinePot;
  }

  public void setSelfDisciplinePot(int selfDisciplinePot) {
    this.selfDisciplinePot = selfDisciplinePot;
  }

  public int getStrengthTemp() {
    return strengthTemp;
  }

  public void setStrengthTemp(int strengthTemp) {
    this.strengthTemp = strengthTemp;
  }

  public int getStrengthPot() {
    return strengthPot;
  }

  public void setStrengthPot(int strengthPot) {
    this.strengthPot = strengthPot;
  }

  public Map<String, Integer> getSkills() {
    return skills;
  }

  public void setSkills(Map<String, Integer> skills) {
    this.skills = skills;
  }

  public Map<String, String> getDescriptions() {
    return descriptions;
  }

  public void setDescriptions(Map<String, String> descriptions) {
    this.descriptions = descriptions;
  }
}
