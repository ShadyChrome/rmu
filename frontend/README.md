Komponenten Diagramm der App
``` mermaid
graph TD 
    A[Hauptkomponente App] --> B[Router]
    A[Hauptkomponente App] --> C[Layout]
    C[Layout] --> B
    B --> HomePage
    B --> D[Wizard]
    B --> Characters
    D --> CharacterDetailsPage
    D --> E[StatsPage]
    D --> ProfessionBonusesPage
    D --> SkillsPage
    E --> BoostSection
    E --> StatTable
    E --> SwapSection
```
Sequenzdiagramm von Client-Server bei der Charaktererstellung

``` mermaid
sequenceDiagram
    participant GUI    
    participant Server   
    GUI->>Server: ProfessionBonusesPage fragt Daten mit getProfessionBonuses() an 
    Server->>GUI: Server liefert ProfessionBonus für den ausgewählten Beruf 
    GUI->>Server: SkillsPage fragt Daten mit getSkillCost() an 
    Server->>GUI: Server liefert ProfessionSkillCost für den ausgewählten Beruf
    GUI->>Server: Wizard sendet nach dem letzten Schritt den neuen Charakter  
    Server->>GUI: Server bestätigt die Speicherung oder schickt Fehlermeldung  
```