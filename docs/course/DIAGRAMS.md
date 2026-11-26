# Fünf Ansichten auf den Workflow

Die Ansichten beantworten unterschiedliche Fragen. Orange kennzeichnet menschliche Entscheidungen, Blau Agentenarbeit, Grün gespeicherte Ergebnisse. Die Diagramme sind editierbare Mermaid-Quellen. Die SVG-Ansichten 1, 3 und 5 fassen die aktualisierten Wege kompakt zusammen; ihr SVG ist ebenfalls editierbar.

## 1. Ebenen und Artefakte

[Darstellung als SVG öffnen](diagrams/01-ebenen-und-artefakte.svg)

~~~mermaid
flowchart TB
  R[Vorhandener Bericht und Soll-Konzept] --> B[Prototype Brief]
  subgraph SOL[Solution]
    B --> SA[Solution Architecture]
    SA --> IC[Interface und Data Contracts]
    B --> ES[E2E-Szenarien]
  end
  subgraph SYS[System]
    P[System PRD] --> A[System Architecture]
    P <--> D[Design Brief]
  end
  subgraph FEA[Feature]
    F[Feature Plan] --> I[Implementierung und Validierung]
    I --> H[Fachliche Abnahme]
  end
  B --> P
  IC --> P
  IC --> A
  A --> W{Bauweg wählen}
  D --> W
  P --> W
  W -->|Feature-Weg| F
  W -->|Mock oder Bauversuch| G[build-system: Gesamtbau und Prüfung]
  G --> MH[Mensch: Ergebnis prüfen]
  MH -->|Mock| ES
  MH -->|Versuch: Erkenntnisse| P
  H --> ES
  classDef human fill:#fff0d9,stroke:#ba6b15,color:#432b14
  classDef artifact fill:#e5f4ec,stroke:#348365,color:#183d30
  classDef agent fill:#e7f0fc,stroke:#4378b0,color:#1b3555
  class H,MH,W human
  class R,B,SA,IC,ES,P,A,D,F artifact
  class I,G agent
~~~

## 2. Mensch und Agents im Feature-PIV

[Darstellung als SVG öffnen](diagrams/02-mensch-und-agents-im-feature-piv.svg)

~~~mermaid
flowchart TB
  H1[Mensch: Ziel, Kriterien und Szenarien] --> A[Planer A: Feature Plan]
  A --> X[Gespeicherte Übergabe]
  X --> B[Neuer Kontext B: implementieren]
  B --> V[B: vereinbarte Checks ausführen]
  V -->|Befund| B
  V -->|belegt bereit| H2[Mensch: fachlich abnehmen]
  H2 -->|Nacharbeit| B
  H2 -->|angenommen| K[Koordinator: integrieren und nachtesten]
  K -->|Verhalten verändert| H2
  classDef human fill:#fff0d9,stroke:#ba6b15,color:#432b14
  classDef agent fill:#e7f0fc,stroke:#4378b0,color:#1b3555
  classDef artifact fill:#e5f4ec,stroke:#348365,color:#183d30
  class H1,H2 human
  class A,B,V,K agent
  class X artifact
~~~

Planer und Implementierer sind verschieden. Implementierer und Validator sind derselbe Agent. Ein technischer Erfolg erteilt keine menschliche Abnahme.

## 3. Schneller Bau nach der Featureaufteilung

[Darstellung als SVG öffnen](diagrams/03-freie-visuelle-exploration.svg)

~~~mermaid
flowchart TB
  P[System-Planungschat: PRD, Design, Architektur, slice-features] --> B[Neuer Implementierungschat: build-system]
  B --> H[Mensch: ausprobieren und Rückmeldung geben]
  H --> U[Planung bei Bedarf konsistent nachführen]
  U --> M[Mock: Code behalten und gezielt verbessern]
  U --> E[Versuchsbranch: Erkenntnisse nutzen, regulär neu bauen]
  B -. bei fehlendem Fundament .-> BS[bootstrap-system]
  M --> T[Verträge prüfen, fachlich abnehmen, integrieren]
  classDef human fill:#fff0d9,stroke:#ba6b15,color:#432b14
  classDef agent fill:#e7f0fc,stroke:#4378b0,color:#1b3555
  class H human
  class B,M,E,T,BS agent
~~~

Mocks werden normalerweise insgesamt gebaut und mit gezielten Änderungsaufträgen verbessert, ohne Pflicht zu einzelnen Feature Plans. Ihr Code ist reguläre Umsetzung. Für andere Systeme bleibt der begrenzte Bauversuch optional; Code aus reinen Explorationsexperimenten wird nicht in die systematische Umsetzung übernommen. Beide Wege respektieren bestätigte Verträge; automatische Tests ersetzen keine menschliche Abnahme.

## 4. Integration und gemeinsame Ausbaustufe

[Darstellung als SVG öffnen](diagrams/04-integration-und-gemeinsame-ausbaustufe.svg)

~~~mermaid
flowchart TB
  S1[System A · konkreter Commit] --> M[E2E-Manifest]
  S2[System B oder Mock · konkreter Commit] --> M
  C[Vertragsrevision und Testdaten] --> M
  M --> T[Start: feste Ports und Bereitschaft]
  T --> V[Agents: E2E-Szenarien ausführen]
  V --> H[Gruppe: durchgängigen Ablauf abnehmen]
  H --> R[finish-release: geprüften Verbund sichern]
  classDef human fill:#fff0d9,stroke:#ba6b15,color:#432b14
  classDef agent fill:#e7f0fc,stroke:#4378b0,color:#1b3555
  classDef artifact fill:#e5f4ec,stroke:#348365,color:#183d30
  class H human
  class T,V agent
  class S1,S2,C,M,R artifact
~~~

## 5. Skills, Reihenfolge und Auslöser

[Darstellung als SVG öffnen](diagrams/05-skills-reihenfolge-und-ausloeser.svg)

M = Mensch gibt den Auftrag oder entscheidet fachlich. A = Agent kann den Folgeschritt innerhalb dieses Auftrags wählen. R = frischer unabhängiger Review-Kontext. B = neuer Implementierungskontext.

~~~mermaid
flowchart TB
  subgraph SOL[Solution]
    EI[M: init-project] --> DP[M und A: define-prototype]
    DP --> PS[A mit Gruppe: plan-solution-architecture]
    PS --> RA[R: prime → review-architecture]
    RA --> IA[Autor: integrate-architecture-review]
  end
  subgraph SYS[System]
    SI[M: init-project mit E2E-Zugriff] --> CP[A mit Mensch: create-prd]
    IP --> DD[A mit Mensch: define-system-design]
    DD --> PA[A: plan-system-architecture]
    CP --> RP[R: prime → review-prd]
    RP --> IP[Autor: integrate-prd-review]
    PA --> RS[R: prime → review-architecture]
    RS --> IS[Autor: integrate-architecture-review]
    IS --> SL[A mit Mensch: slice-features]
    SL --> W{M: Bauweg wählen}
  end
  subgraph FEA[Feature]
    FP[Planer A: prime → plan-feature] --> IM[B: prime → implement-feature]
    IM <--> VF[B: validate-feature]
    VF --> DC[B: document und commit nach Bedarf]
    DC --> HA[M: fachliche Abnahme]
    HA --> IF[Koordinator: integrate-feature]
  end
  IA --> SI
  W -->|Feature-Weg| FP
  W -->|Mock oder begrenzter Bauversuch| MB[B: build-system]
  MB -. bei Bedarf .-> BS[B: bootstrap-system]
  IM -. bei Bedarf .-> BS
  MB --> MT[B: Verträge und Szenarien prüfen]
  MT -->|Mock| MH[M: Mock fachlich abnehmen]
  MT -->|Bauversuch| EX[M: Versuch auswerten und Planung nachführen]
  EX --> SL
  MH --> VE
  IF --> VE[A: validate-e2e]
  VE --> GA[M: Gruppenabnahme]
  GA --> FR[A: finish-release]
  classDef human fill:#fff0d9,stroke:#ba6b15,color:#432b14
  classDef agent fill:#e7f0fc,stroke:#4378b0,color:#1b3555
  class EI,DP,SI,CP,DD,SL,HA,GA,MH,W,EX human
  class PS,RA,IA,PA,RP,IP,RS,IS,BS,FP,IM,VF,DC,IF,VE,FR,MB,MT agent
~~~

Mocks verwenden normalerweise build-system statt einzelner Feature Plans. Für andere Systeme ist build-system ein optionaler begrenzter Bauversuch auf eigenem Versuchsbranch; dessen Erkenntnisse führen zurück zur Planung. bootstrap-system ist ein Hilfsschritt bei fehlendem Fundament. slice-features und spätere Planungsänderungen bleiben im bisherigen System-Planungschat, die Umsetzung beginnt in einem neuen Chat. Die Grafik ist eine Orientierung, kein starrer Wasserfall. PRD, Design und Architektur werden bei neuen Erkenntnissen abgestimmt fortgeschrieben. Update-Skills wirken an der passenden Ebene: update-prd, update-design-brief, update-system-architecture, update-solution-architecture und update-feature-plan. define-prototype unterstützt auch Änderungen am Brief.

prime, commit und document unterstützen laufende Aufträge. reflect-rules wird nur bei konkretem Lernbedarf verwendet. Ein Skill-Aufruf allein startet keinen unabhängigen Chat. Keine Pflicht zur manuellen Eingabe jedes Skill-Namens.
