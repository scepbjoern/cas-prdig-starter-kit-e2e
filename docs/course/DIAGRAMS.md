# Fünf Ansichten auf den Workflow

Die Ansichten beantworten unterschiedliche Fragen. Orange kennzeichnet menschliche Entscheidungen, Blau Agentenarbeit, Grün gespeicherte Ergebnisse. Die Diagramme sind editierbare Mermaid-Quellen.

## 1. Ebenen und Artefakte

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
  A --> F
  D --> F
  P --> F
  H --> ES
  classDef human fill:#fff0d9,stroke:#ba6b15,color:#432b14
  classDef artifact fill:#e5f4ec,stroke:#348365,color:#183d30
  classDef agent fill:#e7f0fc,stroke:#4378b0,color:#1b3555
  class H human
  class R,B,SA,IC,ES,P,A,D,F artifact
  class I agent
~~~

## 2. Mensch und Agents im Feature-PIV

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

## 3. Freie visuelle Exploration

~~~mermaid
flowchart TB
  P[Erstes PRD: MVP konkret] --> V[Separater Chat: frei vibe coden]
  V --> M[Visueller Entwurf]
  M --> H[Mensch: ausprobieren und Anforderungen schärfen]
  H --> U[PRD und Design Brief aktualisieren]
  U --> S[Systematischer PIV: neu implementieren]
  M -. nur Screenshots und Erkenntnisse .-> U
  classDef human fill:#fff0d9,stroke:#ba6b15,color:#432b14
  classDef agent fill:#e7f0fc,stroke:#4378b0,color:#1b3555
  class H human
  class V,S agent
~~~

Im Explorationschat keine PIV-Skills. Explorationscode wird niemals übernommen. Ein später gelieferter Mock erfüllt trotzdem Interface und Data Contracts.

## 4. Integration und gemeinsame Ausbaustufe

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
    CP --> DD[A mit Mensch: define-system-design]
    DD --> PA[A: plan-system-architecture]
    CP --> RP[R: prime → review-prd]
    RP --> IP[Autor: integrate-prd-review]
    PA --> RS[R: prime → review-architecture]
    RS --> IS[Autor: integrate-architecture-review]
    IP --> SL[A mit Mensch: slice-features]
    IS --> SL
    SL --> BS[A: bootstrap-system]
  end
  subgraph FEA[Feature]
    FP[Planer A: prime → plan-feature] --> IM[B: prime → implement-feature]
    IM <--> VF[B: validate-feature]
    VF --> DC[B: document und commit nach Bedarf]
    DC --> HA[M: fachliche Abnahme]
    HA --> IF[Koordinator: integrate-feature]
  end
  IA --> SI
  BS --> FP
  IF --> VE[A: validate-e2e]
  VE --> GA[M: Gruppenabnahme]
  GA --> FR[A: finish-release]
  classDef human fill:#fff0d9,stroke:#ba6b15,color:#432b14
  classDef agent fill:#e7f0fc,stroke:#4378b0,color:#1b3555
  class EI,DP,SI,CP,DD,SL,HA,GA human
  class PS,RA,IA,PA,RP,IP,RS,IS,BS,FP,IM,VF,DC,IF,VE,FR agent
~~~

Die Grafik ist eine Orientierung, kein starrer Wasserfall. PRD, Design und Architektur werden bei neuen Erkenntnissen abgestimmt fortgeschrieben. Update-Skills wirken an der passenden Ebene: update-prd, update-design-brief, update-system-architecture, update-solution-architecture und update-feature-plan. define-prototype unterstützt auch Änderungen am Brief.

prime, commit und document unterstützen laufende Aufträge. reflect-rules wird nur bei konkretem Lernbedarf verwendet. Ein Skill-Aufruf allein startet keinen unabhängigen Chat. Keine Pflicht zur manuellen Eingabe jedes Skill-Namens.
