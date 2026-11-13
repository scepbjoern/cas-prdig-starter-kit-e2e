# GitHub und Zusammenarbeit

Die Agents bedienen Git. Studierende entscheiden fachlich und sehen Aufträge, Fortschritt, Tests und Abnahmen.

## Gemeinsam starten

Eine Person erstellt das gemeinsame E2E-Repository aus der E2E-Vorlage und lädt die Gruppenmitglieder als Mitarbeitende ein. Pro gebautem oder gemocktem System entsteht ein System-Repository. Daran dürfen mehrere Personen arbeiten. Prüft Lese- und Schreibzugriffe mit den tatsächlich verwendeten Konten.
Für vertrauliche Unternehmensunterlagen geeignete private Repositories und zulässige KI-Umgebungen wählen. Öffentliche Kursbeispiele enthalten nur fiktive Daten.

## Was liegt wo?

Markdown enthält die führenden Anforderungen und Architekturvorgaben. Issues enthalten ausführbare Aufträge, Verantwortung, Abhängigkeiten, Status und Diskussionen. Kein paralleles TASKS.md mit demselben Arbeitsstatus führen.
System-Issues beschreiben Features; E2E-Issues beschreiben gemeinsame Planung, Verträge, Integration und E2E-Prüfung. Verweise verbinden die Repositories.
Milestones gelten pro Repository. Gleiche Namen wie 1.0.0 sind eine nützliche Konvention, aber kein automatischer gemeinsamer Release.

Wird ein Issue zu gross, verbleibt der aktuelle Umfang im ursprünglichen Issue. Ein neues Issue übernimmt den ausdrücklich abgegrenzten Rest mit Kriterien, Verweisen und gegebenenfalls späterem Milestone. Plan und Priorität nachführen; fachliche Verschiebungen mit der verantwortlichen Person abstimmen.

## Parallel entwickeln

Jeder Arbeitsagent nutzt eine eigene Änderungslinie und bei gleichzeitiger Arbeit ein eigenes Arbeitsverzeichnis. Git-Worktrees teilen die Historie, nicht die laufenden Dateien. Testinstanzen erhalten eigene Ports und veränderliche Testdaten.
Vor Integration lesen die Agents neue System- und relevante E2E-Issue-Kommentare sowie die aktuellen Verträge. Zusammenführungen in denselben Zielbranch werden nacheinander koordiniert.
Eigene Änderungen gezielt committen. Fremde Änderungen nicht zurücksetzen, überschreiben oder mit einchecken. Bei Konflikten die fachliche Bedeutung klären; keine pauschale Auswahl einer Seite.

Standard: nachvollziehbare direkte Integration mit Issue-/Commit-Bezug und Nachtests. Interessierte Gruppen können zusätzlich Pull Requests nutzen, besonders bei mehreren Personen im selben Repository.

## Werkzeuge wechseln

Die Übergabe verwendet templates/shared/HANDOFF.md: Auftrag, Rolle, Dateipfade, Revisionen, bestätigte Entscheidungen, offene Fragen und Teststand. Der empfangende Agent liest die Quellen selbst.
Die Trennung Planer/Implementierer bleibt auch bei Wechsel zwischen Codex und Antigravity erhalten. Ein frischer Kontext wird bewusst eröffnet; eine neue Skill-Anweisung innerhalb desselben Chats genügt nicht.

## Abschluss

Ein geschlossener Feature-Auftrag verweist auf tatsächliche fachliche Abnahme und integrierten Stand. Technische Fertigstellung allein genügt nicht. E2E-Releases nennen jeden System-Commit, Vertrags- und Testdatenstand sowie ausgeführte Szenarien. Unveränderte Systeme brauchen keinen künstlichen Release.
