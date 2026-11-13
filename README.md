# CAS PRDIG – E2E Starter-Kit

Ein gemeinsames Repository pro Gruppe für den durchgängigen Prototyp. Pro gebautem oder gemocktem System kommt ein eigenes [System-Repository](https://github.com/scepbjoern/cas-prdig-starter-kit-system) hinzu.

Startet im Agenten mit: «Richte mit init-project unser E2E-Projekt ein.» Danach übergebt ihr euren vorhandenen Bericht für define-prototype. Wählt im Dialog den Umfang; der Agent baut keine Lösung auf eigene Annahmen über euer Unternehmen.

## Ablage

- docs/prototype-brief.md: tatsächlicher Bauauftrag.
- docs/solution-architecture.md und contracts/: Systemzusammenhang und führende Verträge.
- docs/e2e-scenarios.md und evidence/: fachliche Szenarien, ausgeführte Prüfungen und Abnahmen.
- solution.json: gemeinsam gestartete Systeme, Ports, Abhängigkeiten und konkrete Stände; aus solution.example.json ableiten.
- report/: gesonderter Abweichungsnachweis für den Bericht.
- templates/: ausfüllbare Vorlagen. Eigene Unterlagen entstehen erst im Dialog.

Die Agents nutzen GitHub Issues für gemeinsame Aufgaben. [Workflow](docs/course/PIV-WORKFLOW.md), [Darstellungen](docs/course/DIAGRAMS.md), [Glossar](docs/course/GLOSSARY.md) und [Zusammenarbeit](docs/course/COLLABORATION.md) sind mitgeliefert.

## Gemeinsam starten

Siehe [Multi-Repo-Anleitung](docs/MULTI-REPO.md). tools/solution.mjs prüft das Manifest, kann fehlende festgelegte Repositories herunterladen und startet den Verbund mit Bereitschaftsprüfung. Start installiert nichts, zieht keinen neuen main-Stand und setzt keine Daten zurück.

Dies ist eine erste Kursfassung. Den tatsächlich erprobten Umfang und die noch ausstehende Erprobung vor dem Hackathon nennt [VALIDATION.md](VALIDATION.md).
