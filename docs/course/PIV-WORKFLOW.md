# PIV für die Prototyp-Planung und Realisierung

Prototyping hilft, eine fachliche Lösung zu verstehen und zu demonstrieren. Studierende steuern Ziele, Anforderungen, relevante Testszenarien und Abnahme. Agents planen technische Einzelheiten, implementieren und führen Tests aus. Code lesen ist keine Voraussetzung.

## Modellwahl vor dem Rollenchat

Die [Modellrichtlinie](MODEL-POLICY.md) ordnet Planung, Reviews und Umsetzung passenden Modellen und Denkstufen zu. Wählt vor dem jeweiligen Rollenchat die passende Einstellung. Astra beziehungsweise verfügbares Carbon sind für unabhängige PRD-/Architekturreviews bevorzugt; Luna ist eine sparsame Codex-Alternative für klar abgegrenzte Implementierung. Der Implementierer validiert weiterhin selbst. Ein Skill-Wechsel stellt das Modell nicht automatisch um; ein Modellwechsel erzeugt keinen unabhängigen Kontext.

## Drei Ebenen

| Ebene | Führende Unterlagen | Verantwortung |
| --- | --- | --- |
| Solution | Prototype Brief, Solution Architecture, Interface/Data Contracts, E2E-Szenarien, gemeinsame Startkonfiguration | Ganze Gruppe, mit benannter Koordination |
| System | Ein fortgeschriebenes PRD, System Architecture, bei GUI ein Design Brief | Eine oder mehrere Personen |
| Feature | Feature Plan, führendes GitHub Issue, Testnachweise | Eine klar verantwortliche Person |

Systeme sind Anwendungen oder Mocks. Technische Komponenten liegen innerhalb eines Systems. Ein persönlicher Verantwortungsbereich wird durch Features abgegrenzt; er ist kein zusätzliches Pflichtartefakt. Ein Epic ist ebenfalls keine obligatorische Kategorie.

## Fachlich planen und Zwischenstände sichern

Für fachliche Klärung gilt [Planung im Dialog](PLANNING-DIALOGUE.md): eigene Vorstellungen zuerst, Fortschritt und offene Punkte sichtbar, Speicherung auf Auftrag. Die Studierenden veranlassen das Sichern vor Pausen oder Chatwechseln. Prototype Brief und Solution Architecture können im gleichen E2E-Planungschat entstehen; unabhängige Reviews und getrennte Feature-Kontexte bleiben bestehen.

## Von vorhandenen Ergebnissen ausgehen

Im E2E-Projekt beginnt init-project, anschliessend define-prototype beim bestehenden Bericht, Soll-Konzept und den Datenunterlagen. Die Gruppe entscheidet im Dialog, was unverändert, vereinfacht, gemockt, technisch ersetzt, ergänzt oder begründet ausgelassen wird. Normalfall ist der ganze E2E-Prozess. Der Agent entscheidet die Auswahl nicht vorweg.

Der Prototype Brief beschreibt ausschliesslich den tatsächlich zu bauenden Prototyp und seine übergreifenden Szenarien. Ein separater Abweichungsnachweis dient dem Bericht und der Beurteilung; er wird nicht an jeden späteren Arbeitsagenten mitgegeben.

plan-solution-architecture konkretisiert Systeme, Datenflüsse, Verträge, Verantwortlichkeiten, feste Ports, gemeinsame Testdaten und bereits in der ersten Fassung den gemeinsamen Start der ganzen Solution für die E2E-Szenarien. Der E2E-Planungsagent führt solution.json anhand der später tatsächlich eingerichteten Systeme nach; die Gruppe bringt diese Rückmeldung in den Planungschat. Ein unabhängiger review-architecture prüft diese Grundlage in einem frischen Kontext. Der Autor bearbeitet die Befunde mit integrate-architecture-review.

## System planen

init-project prüft den realen Zugriff auf das E2E-Projekt und dessen Quellen. Pro System entsteht eine gemeinsame Planung; bei mehreren beteiligten Personen führt eine Person den Dialog und stimmt die Ergebnisse mit den anderen ab. create-prd klärt die Planungstiefe: nur MVP, MVP detailliert mit weiteren Stufen grob oder standardmässig den gesamten bestätigten Prototypumfang detailliert. Früh vollständig planen, den tatsächlichen Umsetzungsumfang erst später auswählen. Danach folgen unabhängiger PRD-Review und Integration im Autorenchat. Bei GUI ergänzt define-system-design die Gestaltungsgrundsätze; anschliessend konkretisiert plan-system-architecture die technische Realisierung. Die Architektur enthält einen verständlichen Überblick und technische Details für Agents. Es folgen unabhängiger Architekturreview und Integration, bevor Features aufgeteilt werden. Neue Design-Erkenntnisse gezielt ins PRD zurückführen; vorhandene aktuelle Ergebnisse nicht nochmals erstellen.

PRD und Architektur werden unabhängig vom Erstellungsdialog geprüft. review-prd / review-architecture liefern Befunde; die Autoren integrieren sie mit den passenden integrate-Skills. Es braucht keine vollständige Wiederholung nach rein redaktionellen Änderungen.

slice-features bleibt im bisherigen System-Planungschat und leitet fachlich prüfbare Features, Eigentümer, Abhängigkeiten und Ausbaustufen ab. Die Menschen lesen die verlinkten Issues und wählen den Bauweg. Issues halten den Arbeitsstatus, das PRD die Anforderungen. bootstrap-system baut erst danach eine passende minimale Anwendung aus dem empfohlenen Profil oder einem begründeten Alternativstack auf. Datenbank und Authentifizierung sind optional.

## Schneller Bau nach der Featureaufteilung

Nach PRD, Design soweit nötig, bestätigter Systemarchitektur und slice-features kann ein neuer Implementierungschat im System-Repository mit @build-system den ausgewählten Umfang zusammenhängend bauen. Der Skill nutzt bootstrap-system nur bei fehlendem Fundament; kein zusätzlicher langer Übergabeprompt nötig. Er liest diese Dokumente, relevante E2E-Verträge und die gewählten Features; einzelne Feature Plans sind für diesen Weg nicht erforderlich. Kleine offene Details als sichtbare Annahmen behandeln, bestätigte Schnittstellen und fachliche Kernregeln einhalten. Menschen erproben das Ergebnis; Erkenntnisse und nötige Änderungen im System-Planungschat in die führenden Dokumente zurückführen.

Für normale Anwendungen ist dieser schnelle Bauversuch optional, zeitlich begrenzt und als Experiment auf einem eigenen Versuchsbranch im selben Repository zu führen; bei Parallelität einen eigenen Worktree verwenden. Dessen Explorationscode nicht in die anschliessende systematische Umsetzung übernehmen.

Für Mocks ist der schnelle Gesamtbau dagegen der Normalfall: Im System-Repository den vereinbarten Mockumfang auf einmal implementieren, Code behalten und durch konkrete Änderungsaufträge verbessern. Keine Pflicht zu einer plan-feature-/implement-feature-Schleife für jedes einzelne Feature. Planung und Implementierung bleiben getrennte Kontexte. Der Implementierer prüft Start, fachliche Szenarien und Verträge; Menschen nehmen fachlich ab. Ein schneller Mock ist ein regulärer Teil der Solution und benötigt passende Integrationsnachweise. Status und Aufträge weiterhin nachvollziehbar in GitHub halten.

## Der Feature-PIV

1. Mensch und Planer A klären Ziel, Akzeptanzkriterien, relevante Szenarien, Testdaten und erwartete Ergebnisse. A verwendet prime und plan-feature.
2. Ein anderer Agent B übernimmt in einem frischen Kontext den gespeicherten Feature Plan. Er verwendet prime und implement-feature. Ein Skill-Wechsel allein ist kein Kontextwechsel.
3. B führt mit validate-feature die vereinbarten Checks aus, behebt Fehler und testet erneut. Implementierung und Validierung gehören in denselben Arbeitskontext. Es gibt keine obligatorischen Task-Stopps, kein Pflichtreview jedes Feature Plans und keinen separaten Validator C.
4. document und commit sichern passende Hinweise, Testnachweise und eigene Änderungen samt geprüftem Push auf den vorgesehenen GitHub-Branch. Der Status lautet Abnahme ausstehend.
5. Die verantwortliche Person spielt das Ergebnis aus Anwendersicht durch und entscheidet über Annahme oder Nacharbeit. Automatische Tests dürfen diese Entscheidung nicht vorwegnehmen.
6. Der Koordinationsagent integriert mit integrate-feature und prüft den zusammengeführten Stand. Verändertes Verhalten braucht eine erneute fachliche Abnahme.

Für systemübergreifende Abnahmen kann schon vorher eine gemeinsame Testumgebung mit den Kandidatenständen aufgebaut werden. Technisch integriert und fachlich abgenommen sind verschiedene Zustände.

## Tests gemeinsam fachlich steuern

Akzeptanzkriterien allein garantieren keine relevanten Tests. Besprecht konkrete Szenarien: Ausgangsdaten, Aktionen, erwartete Ergebnisse und wichtige Fehlerfälle. Feature-GUI-Tests gehören in den Feature Plan; featureübergreifende Systemtests ins PRD; systemübergreifende E2E-Szenarien ins E2E-Projekt.

Agents wählen geeignete Prüfmittel, etwa automatisierte Schnittstellentests, Playwright und ergänzend Computer Use für visuelle, explorative oder systemübergreifende Abläufe. Sie dokumentieren tatsächliche Ausführung und Grenzen. Studierende müssen nicht jeden technischen Einzeltest manuell wiederholen.

## Koordinieren und abschliessen

Der bisherige System-Planungschat übernimmt auch die Koordination und kann über mehrere Durchläufe bestehen bleiben; ein zusätzlicher Chat dafür ist nicht erforderlich. Er kennt nächste Schritte und organisiert Übergaben. Die gemeinsame Wahrheit liegt in Dateien, Issues, Kommentaren und festgehaltenen Entscheidungen, nicht nur im Chat.
prime liest bei Start, Wiederaufnahme und vor Integration die benötigten aktuellen System- und E2E-Quellen. Vertragsdiskussionen sind noch keine freigegebene Vertragsänderung.

Agents dürfen passende Folge-Skills innerhalb des vereinbarten Auftrags selbst auswählen. Grössere Ziele können mehrere unabhängige Features umfassen; Planung und Implementierung bleiben getrennt. Ein autonom erreichter technischer Zielzustand bedeutet noch keine menschliche Abnahme.

Parallele Arbeit verwendet getrennte Branches/Worktrees und getrennte lokale Testports. Die Integration in den gemeinsamen Zielbranch erfolgt nacheinander. Pull Requests sind freiwillig, insbesondere bei mehreren Personen im selben Repo.

validate-e2e prüft den Verbund. finish-release hält die geprüften System-Commits, Vertragsrevisionen, Testdaten und Abnahmen fest. Ein gemeinsamer Milestone-Name ist hilfreich, ersetzt aber keinen Nachweis kompatibler Stände.

## Werkzeuge und Nachweise

Codex/ChatGPT Desktop ist der Kursstandard, Antigravity eine fakultative Option. Beide arbeiten mit denselben gespeicherten Quellen; die Übergabe nennt Auftrag, Revisionen, Prüfstand und offene Entscheidungen. Die konkrete Antigravity-Einrichtung und der kompatible Chat-Export werden separat bereitgestellt.
Markdown kann mit MarkText gelesen und von Hand ergänzt werden. Danach betroffene Anforderungen, Architektur oder Pläne konsistent aktualisieren lassen. VS Code gehört nicht zur erforderlichen Werkzeugausstattung.

Die Aufgabenstellung auf Moodle bleibt für Abgaben und Beurteilung verbindlich. Dieses Dokument erläutert das Vorgehen und schafft keine zusätzlichen Fristen.

Inspiration: [Cole Medins Skills](https://github.com/coleam00/skills). Der Kurs ergänzt den dortigen Ablauf um die gruppenweite Solution-Ebene und eine ausdrücklich menschliche fachliche Abnahme.
