---
name: plan-solution-architecture
description: "Plant aus dem bestätigten Prototype Brief die beteiligten Systeme, gemeinsamen Verträge und Integrationsbedingungen."
---

# plan-solution-architecture

Lies und beachte docs/course/PLANNING-DIALOGUE.md. Die Planung kann im bisherigen E2E-Chat weitergehen. Bereits bestätigte fachliche Ziele und Technologieentscheidungen nicht erneut zur offenen Auswahl stellen. Baue noch keine Fachanwendung.

## Grundlage und Dialog
Lies aktuellen Prototype Brief, vorhandene Architektur/Verträge sowie benötigte bestätigte Quellen. Vertiefe gezielt Prozessregeln, Digitalisierungspotenziale oder Datenanalyse, wenn sie Systemgrenzen oder Verträge beeinflussen. Fehlende Quellenzugriffe und Konflikte benennen; den Bauumfang nicht still erweitern.

Prüfe, ob Gesamtumfang, erste Ausbaustufe und wesentliche Varianten hinreichend klar sind. Kritische Lücken gezielt klären; bei bewusst vorläufiger Planung Annahmen sichtbar halten. Frage nach noch offenen fachlichen Vorstellungen, bevor du sie durch Empfehlungen vorgibst. Technische Ausarbeitung darfst du aus dem bestätigten Auftrag ableiten.

Erarbeite Systemgrenzen, Verantwortungen und Datenflüsse; pro gebautem/gemocktem System ein Repo, unabhängig von Personenzahl. Zeige einen verständlichen Überblick, vorzugsweise als Diagramm. Erkläre fachliche Folgen und wenige relevante Alternativen, ohne Studierende sämtliche technischen Einzelheiten entscheiden zu lassen. Spätere bestätigte Stufen grob berücksichtigen; unentschiedene Ideen nicht vorsorglich vollständig ausbauen.

## Gemeinsame Ergebnisse
Beim vereinbarten Speicherauftrag docs/solution-architecture.md, contracts/interface-*.md, contracts/data-*.md und docs/e2e-scenarios.md nach den Vorlagen konsistent erstellen/aktualisieren. Vereinbare IDs, Datenhoheit, Formate, Fehler- und Wiederholungsverhalten, feste Ports/URLs, Startbedingungen und zusammenpassende synthetische Testdaten. Fachliche Szenario-IDs aus dem Brief weiterverwenden; konkrete systemübergreifende Prüffälle hier ausarbeiten und verlinken, keine widersprüchlichen Doppelpflege.

Leite solution.json aus solution.example.json ab. Unbekannte Commits, Repository-Zugriffe oder ausgeführte Tests nicht erfinden. Plane eine frühe kleine Integrationsprobe; ihre Planung ist noch kein Ausführungsnachweis. Technische Vorgaben müssen für Agents ausreichend sein, ohne Produktionsvollständigkeit zu verlangen.

Zeige Fortschritt, Speicherstand und offene Punkte gemäss Dialogregel. Studierende lesen die abgelegten Ergebnisse selbst, prüfen Systemaufteilung, Datenübergaben und fachliche Folgen und stimmen sie mit der Gruppe ab. Bei Markdown-Bedarf auf MarkText in docs/course/TOOLS.md verweisen.

## Review und nächste Schritte
Prüfe vor getrennter Systemarbeit insbesondere klare Systemaufträge, benötigte gemeinsame Verträge, Datenverantwortung und relevante Fehlerfälle. Restfragen konkret einordnen; Entwurf nicht als freigegebene Vertragsgrundlage ausgeben.
Lasse Architektur samt Verträgen in einem frischen unabhängigen Kontext mit review-architecture prüfen; keinen Erstellungsdialog mitgeben. Der Autor bearbeitet Befunde mit integrate-architecture-review. Danach System-Einrichtung und create-prd. Gemeinsame Aufgaben gehören als führende Issues ins E2E-Repo, keine doppelte Feature-Statusliste.
