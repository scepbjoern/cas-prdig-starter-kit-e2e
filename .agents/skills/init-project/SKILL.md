---
name: init-project
description: "Richtet ein neues oder vorhandenes E2E-/System-Projekt ein und prüft Zugänge, ohne bestehende Projektkonfiguration zu überschreiben."
---

# init-project

Lies die Regeln des tatsächlichen Zielrepositorys, README, Git-Status, vorhandene project.json und project.example.json. Kläre Rolle E2E/System, Projektname, Repository, Verantwortliche und Kursversion. Erzeuge project.json nur, wenn noch keine Konfiguration besteht. Bestehende Projektidentität, System-ID, E2E-Zuordnung und gemeinsame Angaben erhalten; fehlende Angaben gezielt ergänzen. Beim Einstieg weiterer Gruppenmitglieder nicht erneut initialisieren. Personenbezogene Echtdaten nicht als Kursbeispiele übernehmen.

Im System-Projekt muss das E2E-Repository tatsächlich lesbar sein: lokaler Checkout oder verfügbarer GitHub-Zugang. Lies Prototype Brief, bestätigte Solution Architecture und betroffene Verträge. Halte E2E-Repo, brauchbare Quellenpfade, System-ID und tatsächliche Vertragsrevision fest; erfinde keine Revision. Prüfe bei Bedarf den Zugriff auf Bericht und Anhänge. Ein auf einem anderen Rechner gespeicherter lokaler Pfad ist kein Zugriffsbeleg: nutze einen vorhandenen zugänglichen Ort oder frage konkret danach. Fehlenden Zugriff klar benennen; Einrichtung kann vorbereitet, aber create-prd/bootstrap nicht als abgeschlossen behandelt werden.

Prüfe Lese-/Schreibzugriff mit dem tatsächlich verwendeten Konto und geeignete private Ablage. Pro System gibt es eine gemeinsame Planung: Bei mehreren beteiligten Personen führt eine Person den Planungsdialog und stimmt die fachlichen Ergebnisse mit den anderen ab. Koordinationschats organisieren die späteren persönlichen Aufträge. Lege nur benötigte eigene Projektregeln an. Beginne weder fachliche Planung noch Anwendungsbau ohne entsprechenden Auftrag.

Sichere eigene Einrichtungsänderungen gemäss commit samt geprüftem Push; vorhandene fremde Planung nicht mitcommitten. Nenne zum Abschluss tatsächlichen Repository-/Arbeitsordner, Projekt- und Quellenzuordnung, geprüfte Zugänge, offene Einrichtungslücken und verfügbaren nächsten Skill: E2E define-prototype, System create-prd. Beim System führt der nächste Schritt zur gemeinsamen PRD-Planung in diesem System-Chat; Fachentscheidungen bleiben bei den Studierenden.

## Eindeutiger Einstieg im gemeinsamen Projektordner

Ein neuer System-Planungschat darf im übergeordneten Codex-Projekt starten; der ursprüngliche E2E-Chat ist nicht erforderlich. Bei entsprechendem Auftrag das bereits angelegte System-Repository in einem eigenen Unterordner neben der E2E-Arbeitskopie klonen oder die passende vorhandene Kopie weiterverwenden. Keine zusätzlichen Repositories/Forks anlegen oder vorhandene Dateien überschreiben. Fehlende Git-Anmeldung mit dem persönlichen Konto geführt einrichten lassen.

Vor dem Initialisieren Zielrepository, project.example.json.kind und den tatsächlich gelesenen Skillpfad abgleichen. E2E und System enthalten gleichnamige init-project-Skills: Für Systemarbeit ausdrücklich die SKILL.md aus dem System-Unterordner und dessen Regeln verwenden. Den tatsächlichen Pfad nennen, bei unklarer Auswahl einen direkten Dateipfadauftrag ermöglichen. Eine zweite sichtbare Auswahl ist kein zweites auszuführendes Init.

Systemname aus der Solution Architecture, Repository-URL, Verantwortliche und erreichbare E2E-Pfade/URL gemeinsam aufnehmen. Quellen lesen statt alten Chat voraussetzen. Auf Auftrag einen Titel wie «100 Webportal – Systemplanung» setzen, soweit ein passendes Werkzeug verfügbar ist; sonst den Titel zur manuellen Benennung nennen. Erst nach geprüftem Quellenzugriff zu create-prd führen.
