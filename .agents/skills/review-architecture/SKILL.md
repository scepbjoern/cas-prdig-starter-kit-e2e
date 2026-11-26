---
name: review-architecture
description: "Prüft Solution Architecture samt Verträgen oder System Architecture unabhängig vom Erstellungsdialog."
---

# review-architecture

Arbeite in einem frischen Kontext. Wenn du die Architektur selbst mitgestaltet hast, bereite die Übergabe an einen unabhängigen Kontext vor und behaupte keinen unabhängigen Review.

Verwende prime und das unabhängige Review-Profil in docs/course/MODEL-POLICY.md. Empfiehl bei Bedarf eine passende Auswahl; behaupte keine automatische Umstellung des Hauptmodells.

Lies die Architektur und ihre tatsächlichen fachlichen Vorgaben. Solution: prüfe Systemgrenzen, durchgängige Abläufe, Datenbedeutungen/IDs, Fehlerfälle, Verantwortungen, Ports und Start-/Integrationsbedingungen. System: prüfe PRD/Design, verbindliche E2E-Verträge, interne Datenhaltung, Testbarkeit und passende technische Entscheidungen.

Trenne fachlich zu entscheidende Fragen von technischen Korrekturen. Prüfe Konsistenz und Umsetzbarkeit, nicht hypothetische Produktionsvollständigkeit. Lege priorisierte Befunde mit Fundstellen und Auswirkungen nach templates/shared/REVIEW.md in einem tatsächlich gespeicherten Reviewbericht unter docs/ ab. Erhalte bestehende Berichte und benenne die geprüften Revisionen. Schreibe die geprüfte Architektur nicht selbst um. Sichere den fertigen Reviewbericht gemäss den gemeinsamen Commit-/Push-Regeln; benenne einen fehlgeschlagenen Push ausdrücklich.

## Abschluss und nächster Schritt

Beende den Review mit einer kurzen Einordnung, einem Link auf den gespeicherten Bericht und einem konkreten Handlungsweg:

- **Bei relevanten Befunden oder offenen Entscheidungen:** Bitte die Studierenden, zum ursprünglichen Autorenchat zurückzukehren: bei Solution Architecture zu dem Chat mit plan-solution-architecture, bei System Architecture zu dem Chat mit plan-system-architecture. Dort rufen sie integrate-architecture-review auf und nennen den Speicherort deines Berichts. In der im Kurs verwendeten Codex-Ansicht lautet der Aufruf @integrate-architecture-review; ein natürlicher Auftrag mit Skill-Namen ist ebenfalls möglich.
- Erkläre, dass der Autorenagent technische Korrekturen bearbeitet und fachliche Entscheidungen dort mit den Studierenden klärt. Benenne knapp, welche Entscheidungen mitgenommen werden müssen. Erfinde keinen Chattitel und wechsle nicht selbst in eine Umsetzungsrolle.
- **Ohne relevante offene Befunde:** Teile dies mit und nenne den nächsten bereits vereinbarten Planungsschritt. Die Studierenden können den Bericht im Autorenchat festhalten lassen; keine künstliche Korrekturschleife verlangen.
- Prüfergebnis, nicht ausgeführte Tests und menschliche Freigabe getrennt ausweisen. Falls der Bericht noch nicht gespeichert werden konnte, benenne die Lücke und behaupte keine abgeschlossene Übergabe.

Geeignete kurze Formulierung bei offenen Befunden:
«Wechselt jetzt zurück in den Chat, in dem ihr die Architektur erarbeitet habt. Ruft dort @integrate-architecture-review auf und nennt den Reviewbericht [tatsächlicher Pfad]. Der dortige Planungsagent arbeitet die technischen Befunde ein und klärt die offenen fachlichen Entscheidungen mit euch.»

Prüfe beziehungsweise erhalte stabile IDs für Anforderungen, Szenarien, Entscheidungen und Befunde gemäss COLLABORATION.md. Prüfe den gesamten vereinbarten Umfang in der gewählten Planungstiefe, ohne nachgelagerte Detailpläne zu erzwingen. Nach der Systemplanung gilt für Mocks der Gesamtbau mit gezielten Änderungen statt einer Pflichtplanung jedes einzelnen Features; Tests und menschliche Abnahme bleiben erforderlich.
