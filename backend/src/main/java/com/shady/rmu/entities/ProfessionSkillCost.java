package com.shady.rmu.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProfessionSkillCost {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String category;

  @Column(nullable = false)
  private String skillName;

  @Column(nullable = true)
  private String description;

  @Column(nullable = false)
  private String stats;

  @Column(nullable = false)
  private String profession;

  @Column(nullable = false)
  private String cost;

  public ProfessionSkillCost() {
  }

  public ProfessionSkillCost(String category, String skillName, String description, String stats, String profession, String cost) {
    this.category = category;
    this.skillName = skillName;
    this.description = description;
    this.stats = stats;
    this.profession = profession;
    this.cost = cost;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getSkillName() {
    return skillName;
  }

  public void setSkillName(String skillName) {
    this.skillName = skillName;
  }

  public String getStats() {
    return stats;
  }

  public void setStats(String stats) {
    this.stats = stats;
  }

  public String getProfession() {
    return profession;
  }

  public void setProfession(String profession) {
    this.profession = profession;
  }

  public String getCost() {
    return cost;
  }

  public void setCost(String cost) {
    this.cost = cost;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
