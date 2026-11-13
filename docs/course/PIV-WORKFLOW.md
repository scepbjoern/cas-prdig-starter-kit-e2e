# PIV für die Prototyp-Planung und Realisierung

Prototyping hilft, eine fachliche Lösung zu verstehen und zu demonstrieren. Studierende steuern Ziele, Anforderungen, relevante Testszenarien und Abnahme. Agents planen technische Einzelheiten, implementieren und führen Tests aus. Code lesen ist keine Voraussetzung.

## Drei Ebenen

| Ebene | Führende Unterlagen | Verantwortung |
| --- | --- | --- |
| Solution | Prototype Brief, Solution Architecture, Interface/Data Contracts, E2E-Szenarien, gemeinsame Startkonfiguration | Ganze Gruppe, mit benannter Koordination |
| System | Ein fortgeschriebenes PRD, System Architecture, bei GUI ein Design Brief | Eine oder mehrere Personen |
| Feature | Feature Plan, führendes GitHub Issue, Testnachweise | Eine klar verantwortliche Person |

Systeme sind Anwendungen oder Mocks. Technische Komponenten liegen innerhalb eines Systems. Ein persönlicher Verantwortungsbereich wird durch Features abgegrenzt; er ist kein zusätzliches Pflichtartefakt. Ein Epic ist ebenfalls keine obligatorische Kategorie.

## Von vorhandenen Ergebnissen ausgehen

Im E2E-Projekt beginnt init-project, anschliessend define-prototype beim bestehenden Bericht, Soll-Konzept und den Datenunterlagen. Die Gruppe entscheidet im Dialog, was unverändert, vereinfacht, gemockt, technisch ersetzt, ergänzt oder begründet ausgelassen wird. Normalfall ist der ganze E2E-Prozess. Der Agent entscheidet die Auswahl nicht vorweg.

Der Prototype Brief beschreibt ausschliesslich den tatsächlich zu bauenden Prototyp und seine übergreifenden Szenarien. Ein separater Abweichungsnachweis dient dem Bericht und der Beurteilung; er wird nicht an jeden späteren Arbeitsagenten mitgegeben.

plan-solution-architecture konkretisiert Systeme, Datenflüsse, Verträge, Verantwortlichkeiten, feste Ports, gemeinsame Testdaten und Startbedingungen. Ein unabhängiger review-architecture prüft diese Grundlage in einem frischen Kontext. Der Autor bearbeitet die Befunde mit integrate-architecture-review.

## System planen

init-project prüft den realen Zugriff auf das E2E-Projekt und dessen Quellen. create-prd leitet daraus das System-PRD ab. Die erste Ausbaustufe wird konkret, spätere Erweiterungen zunächst grob beschrieben. define-system-design und plan-system-architecture ergänzen Gestaltungsgrundsätze und technische Realisierung. Die Architektur enthält einen für Studierende verständlichen Überblick und die technischen Details für Agents.

PRD und Architektur werden unabhängig vom Erstellungsdialog geprüft. review-prd / review-architecture liefern Befunde; die Autoren integrieren sie mit den passenden integrate-Skills. Es braucht keine vollständige Wiederholung nach rein redaktionellen Änderungen.

slice-features leitet fachlich prüfbare Features, Eigentümer, Abhängigkeiten und Ausbaustufen ab. Issues halten den Arbeitsstatus, das PRD die Anforderungen. bootstrap-system baut erst danach eine passende minimale Anwendung aus dem empfohlenen Profil oder einem begründeten Alternativstack auf. Datenbank und Authentifizierung sind optional.

## Frei erkunden, dann systematisch bauen

Nach einem ersten PRD kann ein separater Chat ohne PIV-Skills in ungefähr einer halben Stunde einen visuellen Entwurf erstellen. Er bekommt PRD und Designkontext und arbeitet frei. Screenshots, Erfahrungen und präzisierte Anforderungen fliessen zurück.
Explorationscode wird nie in die eigentliche Umsetzung kopiert oder gemergt. Er kann inspirieren. Ein bewusst als Liefergegenstand gebauter Mock ist davon zu unterscheiden: Auch ein rasch erstellter Mock erfüllt die vereinbarten Schnittstellen und Datenverträge.

## Der Feature-PIV

1. Mensch und Planer A klären Ziel, Akzeptanzkriterien, relevante Szenarien, Testdaten und erwartete Ergebnisse. A verwendet prime und plan-feature.
2. Ein anderer Agent B übernimmt in einem frischen Kontext den gespeicherten Feature Plan. Er verwendet prime und implement-feature. Ein Skill-Wechsel allein ist kein Kontextwechsel.
3. B führt mit validate-feature die vereinbarten Checks aus, behebt Fehler und testet erneut. Implementierung und Validierung gehören in denselben Arbeitskontext. Es gibt keine obligatorischen Task-Stopps, kein Pflichtreview jedes Feature Plans und keinen separaten Validator C.
4. document und commit sichern passende Hinweise, Testnachweise und eigene Änderungen. Der Status lautet Abnahme ausstehend.
5. Die verantwortliche Person spielt das Ergebnis aus Anwendersicht durch und entscheidet über Annahme oder Nacharbeit. Automatische Tests dürfen diese Entscheidung nicht vorwegnehmen.
6. Der Koordinationsagent integriert mit integrate-feature und prüft den zusammengeführten Stand. Verändertes Verhalten braucht eine erneute fachliche Abnahme.

Für systemübergreifende Abnahmen kann schon vorher eine gemeinsame Testumgebung mit den Kandidatenständen aufgebaut werden. Technisch integriert und fachlich abgenommen sind verschiedene Zustände.

## Tests gemeinsam fachlich steuern

Akzeptanzkriterien allein garantieren keine relevanten Tests. Besprecht konkrete Szenarien: Ausgangsdaten, Aktionen, erwartete Ergebnisse und wichtige Fehlerfälle. Feature-GUI-Tests gehören in den Feature Plan; featureübergreifende Systemtests ins PRD; systemübergreifende E2E-Szenarien ins E2E-Projekt.

Agents wählen geeignete Prüfmittel, etwa automatisierte Schnittstellentests, Playwright und ergänzend Computer Use für visuelle, explorative oder systemübergreifende Abläufe. Sie dokumentieren tatsächliche Ausführung und Grenzen. Studierende müssen nicht jeden technischen Einzeltest manuell wiederholen.

## Koordinieren und abschliessen

Ein Koordinationschat pro Person und System kann über mehrere Durchläufe bestehen bleiben. Er kennt nächste Schritte und organisiert Übergaben. Die gemeinsame Wahrheit liegt in Dateien, Issues, Kommentaren und festgehaltenen Entscheidungen, nicht nur im Chat.
prime liest bei Start, Wiederaufnahme und vor Integration die benötigten aktuellen System- und E2E-Quellen. Vertragsdiskussionen sind noch keine freigegebene Vertragsänderung.

Agents dürfen passende Folge-Skills innerhalb des vereinbarten Auftrags selbst auswählen. Grössere Ziele können mehrere unabhängige Features umfassen; Planung und Implementierung bleiben getrennt. Ein autonom erreichter technischer Zielzustand bedeutet noch keine menschliche Abnahme.

Parallele Arbeit verwendet getrennte Branches/Worktrees und getrennte lokale Testports. Die Integration in den gemeinsamen Zielbranch erfolgt nacheinander. Pull Requests sind freiwillig, insbesondere bei mehreren Personen im selben Repo.

validate-e2e prüft den Verbund. finish-release hält die geprüften System-Commits, Vertragsrevisionen, Testdaten und Abnahmen fest. Ein gemeinsamer Milestone-Name ist hilfreich, ersetzt aber keinen Nachweis kompatibler Stände.

## Werkzeuge und Nachweise

Codex/ChatGPT Desktop ist der Kursstandard, Antigravity eine fakultative Option. Beide arbeiten mit denselben gespeicherten Quellen; die Übergabe nennt Auftrag, Revisionen, Prüfstand und offene Entscheidungen. Die konkrete Antigravity-Einrichtung und der kompatible Chat-Export werden separat bereitgestellt.
Markdown kann mit MarkText gelesen und von Hand ergänzt werden. Danach betroffene Anforderungen, Architektur oder Pläne konsistent aktualisieren lassen. VS Code gehört nicht zur erforderlichen Werkzeugausstattung.

Die Aufgabenstellung auf Moodle bleibt für Abgaben und Beurteilung verbindlich. Dieses Dokument erläutert das Vorgehen und schafft keine zusätzlichen Fristen.

Inspiration: [Cole Medins Skills](https://github.com/coleam00/skills). Der Kurs ergänzt den dortigen Ablauf um die gruppenweite Solution-Ebene und eine ausdrücklich menschliche fachliche Abnahme.
