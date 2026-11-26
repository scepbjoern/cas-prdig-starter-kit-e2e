---
name: plan-solution-architecture
description: "Plant aus dem bestätigten Prototype Brief die beteiligten Systeme, gemeinsamen Verträge und Integrationsbedingungen."
---

# plan-solution-architecture

Lies und beachte docs/course/PLANNING-DIALOGUE.md. Die Planung kann im bisherigen E2E-Chat weitergehen. Bereits bestätigte fachliche Ziele und Technologieentscheidungen nicht erneut zur offenen Auswahl stellen. Baue noch keine Fachanwendung.

## Grundlage und Dialog
Lies aktuellen Prototype Brief, vorhandene Architektur/Verträge sowie benötigte bestätigte Quellen. Vertiefe gezielt Prozessregeln, Digitalisierungspotenziale oder Datenanalyse, wenn sie Systemgrenzen oder Verträge beeinflussen. Fehlende Quellenzugriffe und Konflikte benennen; den Bauumfang nicht still erweitern.

Prüfe, ob Gesamtumfang, erste Ausbaustufe und wesentliche Varianten hinreichend klar sind. Kritische Lücken gezielt klären; bei bewusst vorläufiger Planung Annahmen sichtbar halten. Frage nach noch offenen fachlichen Vorstellungen, bevor du sie durch Empfehlungen vorgibst. Technische Ausarbeitung darfst du aus dem bestätigten Auftrag ableiten.

Erarbeite Systemgrenzen, Verantwortungen und Datenflüsse; pro gebautem/gemocktem System ein Repo, unabhängig von Personenzahl. Zeige einen verständlichen Überblick als Diagramm. Erkläre fachliche Folgen und wenige relevante Alternativen, ohne Studierende sämtliche technischen Einzelheiten entscheiden zu lassen. Alle bestätigten Stufen auf Architekturebene konkret berücksichtigen: betroffene Systeme, Datenflüsse, gemeinsame Verträge und wesentliche Varianten. Bewusst vereinbarte geringere Planungstiefe respektieren und daraus folgende kritische Lücken benennen. Unentschiedene Ideen nicht vorsorglich vollständig ausbauen; keine PRD-/Feature-Plan-Details duplizieren.

## Gemeinsame Ergebnisse
Beim vereinbarten Speicherauftrag docs/solution-architecture.md, contracts/interface-*.md, contracts/data-*.md und docs/e2e-scenarios.md nach den Vorlagen konsistent erstellen/aktualisieren. Vereinbare IDs, Datenhoheit, Formate, Fehler- und Wiederholungsverhalten, feste Ports/URLs, Startbedingungen und zusammenpassende synthetische Testdaten. Fachliche Szenario-IDs aus dem Brief weiterverwenden; konkrete systemübergreifende Prüffälle hier ausarbeiten und verlinken, keine widersprüchlichen Doppelpflege.

Bereits die erste Architektur-Arbeitsfassung enthält einen konkreten Plan, wie die gesamte Solution mit allen beteiligten Systemen gemeinsam startet und die E2E-Szenarien durchgespielt werden. Leite solution.json aus solution.example.json ab. Plane System-IDs, feste Ports/Adressen, Abhängigkeiten und Startreihenfolge, nötige Konfiguration/Testdaten, Bereitschaftsprüfungen und den Einstieg in den E2E-Ablauf. Bei feststehendem Stack konkrete geplante Startbefehle angeben. Architekturprägende Versions-/Betriebsform- und Auslöserentscheidungen rechtzeitig vor davon abhängiger Systemarbeit klären.

Du als E2E-Planungsagent führst Architektur und solution.json zusammenhängend nach. Noch nicht angelegte Repository-Adressen, unbekannte Befehle oder Commits nicht erfinden. Notwendige offene Werte mit Zuständigkeit und Nachführzeitpunkt in der Architektur kennzeichnen. Ein unvollständiges Manifest bleibt ausdrücklich Entwurf; nicht als lauffähig oder erfolgreich geprüft darstellen. Die erste Planung darf nicht pauschal auf «später vervollständigen» verschoben werden.

Nach Systemeinrichtung/-planung übernehmen die Studierenden die Rückmeldung in diesen E2E-Planungschat: reale Repositories und gespeicherte Systemarchitekturen lesen, Startvorgaben abgleichen und solution.json konkretisieren. Nach Bootstrap die tatsächlichen Startbefehle und Bereitschaft prüfen. Keine automatische Beobachtung anderer Chats versprechen. docs/MULTI-REPO.md beschreibt vorbereiten, prüfen und starten. Plane eine frühe kleine Integrationsprobe; Startplan, tatsächlich gemeinsam startbare Systeme und ausgeführter fachlicher E2E-Test sind verschiedene Nachweise. Technische Vorgaben müssen für Agents ausreichend sein, ohne Produktionsvollständigkeit zu verlangen.

Zeige Fortschritt, Speicherstand und offene Punkte gemäss Dialogregel. Studierende lesen die abgelegten Ergebnisse selbst, prüfen Systemaufteilung, Datenübergaben und fachliche Folgen und stimmen sie mit der Gruppe ab. Bei Markdown-Bedarf auf MarkText in docs/course/TOOLS.md verweisen.

## Review und nächste Schritte
Prüfe vor getrennter Systemarbeit insbesondere klare Systemaufträge, benötigte gemeinsame Verträge, Datenverantwortung und relevante Fehlerfälle. Restfragen konkret einordnen; Entwurf nicht als freigegebene Vertragsgrundlage ausgeben.
Lasse Architektur samt Verträgen in einem frischen unabhängigen Kontext mit review-architecture prüfen; keinen Erstellungsdialog mitgeben. Der Autor bearbeitet Befunde mit integrate-architecture-review. Danach System-Einrichtung und create-prd. Gemeinsame Aufgaben gehören als führende Issues ins E2E-Repo, keine doppelte Feature-Statusliste.

Beauftragte eigene Ergebnisänderungen gemäss den gemeinsamen Sicherungsregeln und Skill commit passend prüfen, gezielt committen und auf den vorgesehenen GitHub-Branch pushen; Remote-Stand prüfen. Offene fachliche Klärung und rein lesende Arbeit erzeugen keinen automatischen Speicherauftrag.
