---
name: integrate-architecture-review
description: "Arbeitet unabhängige Architektur-Befunde in die passende führende Architektur und ihre abhängigen Vorgaben ein."
---

# integrate-architecture-review


Lies Review, gültige Architektur und betroffene Verträge. Der Autor behandelt jeden relevanten Befund: übernommen, begründet verworfen oder offene fachliche Entscheidung. Kläre fachliche Änderungen mit den Verantwortlichen; technische Korrekturen innerhalb des Auftrags ausführen.
Gemeinsame Verträge nur im E2E-Projekt ändern und mit betroffenen Systemverantwortlichen abstimmen. Revision und Auswirkungen auf PRDs, Designs, Feature Plans, Testdaten und Startmanifest nachführen. Keine stillen lokalen Vertragskopien verändern.
Prüfe die geänderten Aspekte. Nur wesentliche Änderungen erneut unabhängig reviewen lassen. Halte Behandlung und verbleibende Entscheidungen knapp fest.

## Ergebnisse lesen und fachlich bestätigen

Halte die Behandlung jedes Befunds in der bestehenden Review-/Behandlungstabelle fest. Erhalte Befund-IDs und ursprüngliche Aussagen. Die rechte Spalte «Behandlung durch Autor / Begründung» nennt konkrete Änderung und Fundstelle, begründete Nichtübernahme oder verbleibende fachliche Entscheidung. Keine widersprüchlichen parallelen Nachweise.

Verlinke im Abschluss die neue Fassung des führenden Dokuments und betroffene fachliche Begleitdokumente sowie den Bericht mit der ausgefüllten Behandlungstabelle. Bitte die Studierenden ausdrücklich, beide Ergebnisse selbst zu lesen, besonders die rechte Spalte. Benenne die fachlich relevanten Änderungen, Nichtübernahmen und offenen Fragen konkret. Bei Markdown-Bedarf auf MarkText in docs/course/TOOLS.md verweisen.

Erkläre die menschliche Prüfung: Die verantwortlichen Personen prüfen, ob diese Aussagen und Entscheidungen ihrer gewünschten Lösung entsprechen, und nennen Korrekturen oder stimmen zu. Technische Tests ersetzt dies nicht; Code oder Portnummern müssen sie dafür nicht beurteilen. Eine natürliche Rückmeldung wie «Wir haben beide Dokumente gelesen und sind mit den Änderungen einverstanden» genügt; kein festes Freigabewort verlangen. Tatsächliche Zustimmung mit Datum, Revisionen und Umfang festhalten, niemals aus bestandenen Tests ableiten.

Sichere Änderungen und später eingehende Bestätigung jeweils gemäss commit samt geprüftem Push. Erkläre bereits vor der Bestätigung, welcher nächste Schritt danach möglich ist. Nach Zustimmung erreichten Planungsstand und konkreten Weiterweg nennen; verbleibende Grenzen sichtbar halten.

## Nächster Schritt nach der Bestätigung

Solution Architecture: Sobald die Architektur und Reviewbehandlung fachlich bestätigt und davon abhängige Entscheidungen geklärt sind, können die einzelnen Systeme geplant werden. Nenne tatsächlich noch fehlende Verantwortlichkeiten, System-Repositories und anschliessend create-prd. Der gemeinsame Integrationslauf folgt, sobald die Systeme zusammen startbar sind; seine aktuelle Nichtausführbarkeit blockiert die Systemplanung nicht pauschal. Architektur-Bestätigung ist keine Abnahme des fertigen Prototyps.

System Architecture: Nach Bestätigung zu slice-features beziehungsweise zum tatsächlich noch offenen Planungsschritt führen. Bereits erarbeitete PRD-/Designgrundlagen nicht nochmals vollständig erstellen. Kritisch offene fachliche Entscheidungen mit ihrer konkreten Folge benennen.
