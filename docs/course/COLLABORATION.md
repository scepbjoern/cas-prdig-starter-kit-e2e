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
Eigene Änderungen gezielt committen und auf den vorgesehenen GitHub-Branch pushen; den Remote-Stand prüfen. Fremde Änderungen nicht zurücksetzen, überschreiben oder mit einchecken. Bei Konflikten die fachliche Bedeutung klären; keine pauschale Auswahl einer Seite.

Standard: nachvollziehbare direkte Integration mit Issue-/Commit-Bezug und Nachtests. Interessierte Gruppen können zusätzlich Pull Requests nutzen, besonders bei mehreren Personen im selben Repository.

## Werkzeuge wechseln

Die Übergabe verwendet templates/shared/HANDOFF.md: Auftrag, Rolle, Dateipfade, Revisionen, bestätigte Entscheidungen, offene Fragen und Teststand. Der empfangende Agent liest die Quellen selbst.
Die Trennung Planer/Implementierer bleibt auch bei Wechsel zwischen Codex und Antigravity erhalten. Ein frischer Kontext wird bewusst eröffnet; eine neue Skill-Anweisung innerhalb desselben Chats genügt nicht.

## Abschluss

Ein geschlossener Feature-Auftrag verweist auf tatsächliche fachliche Abnahme und integrierten Stand. Technische Fertigstellung allein genügt nicht. E2E-Releases nennen jeden System-Commit, Vertrags- und Testdatenstand sowie ausgeführte Szenarien. Unveränderte Systeme brauchen keinen künstlichen Release.

## Verständlich mit Menschen zusammenarbeiten

Erkläre Ergebnisse in verständlicher, zusammenhängender Fachsprache und verbinde sie mit ihrer Bedeutung für das Projekt. Neue oder mehrdeutige Begriffe kurz im konkreten Zusammenhang erläutern. Gründe und Folgen dort nennen, wo sie eine Entscheidung verständlich machen. Bei Handlungsbedarf klar sagen, wer als Nächstes was tun soll und welche wesentliche Voraussetzung noch fehlt. Technische Ausführung bleibt Aufgabe des Agenten; fachliche Entscheidungen und das Lesen der Ergebnisse bleiben beim Menschen.

Unterscheide tatsächlich geprüfte Ergebnisse, Entwürfe, Annahmen und offene Entscheidungen. Passe die Erklärungstiefe an die Frage an: Ein kleines Beispiel kann bei einem neuen oder komplexen Zusammenhang helfen; eine einfache Frage darf kurz beantwortet werden. Bereits Verstandenes nicht wiederholen. Keine Pflichtüberschriften, Mindestlängen, obligatorischen Beispiele oder Verständnisfragen nach jeder Antwort. Fachliche Präzision und erforderliche Maschinenformate erhalten. Dieser Standard gilt für alle Modelle und Rollen; eigene Vorstellungen der Studierenden vor Empfehlungen bleiben gemäss PLANNING-DIALOGUE.md massgeblich.

## Speichern umfasst Commit und Push

Im eingerichteten Gruppen-Repository umfasst ein Speicherauftrag das Schreiben, passende Prüfen, gezielte Committen und anschliessende Pushen der eigenen Änderungen auf den vorgesehenen GitHub-Branch. Der Agent führt dies ohne separate Aufforderung zum Push selbst aus und prüft, dass der Commit am Remote erreichbar ist. Ausdrücklich beauftragtes Arbeiten nur lokal hat Vorrang. Die Einzelheiten stehen im Skill commit.

Während einer offenen fachlichen Diskussion wird zunächst gesammelt; ein natürlicher Speicherauftrag genügt. Abgeschlossene beauftragte Implementierungs-, Review- und Dokumentationsschritte werden ebenfalls gesichert. Rein lesende Arbeiten erzeugen keinen künstlichen Commit. Fremde Dateien und unklare zusätzliche Commits nicht veröffentlichen. Bei paralleler Arbeit den vereinbarten eigenen Branch verwenden; Push bedeutet weder Integration in main noch Release oder fachliche Abnahme.

Im Abschluss Commit/Branch und tatsächlichen Push-Status knapp nennen, möglichst verlinken. Falls ein Pushproblem nicht sicher lösbar ist, ausdrücklich «nur lokal gesichert», Ursache und nötigen nächsten Schritt angeben. Kein Force-Push und kein Zurücksetzen fremder Arbeit.

## Vorlagen und lesbare Referenzen

Beim Erstellen und Weiterentwickeln von Dokumenten die nummerierten Abschnittsüberschriften der passenden Vorlage übernehmen. Dokumenttitel bleiben ohne Nummer; Kapitel ab 1, Unterkapitel hierarchisch als 1.1 nummerieren. Neue Abschnitte passend einordnen, interne Links nachführen und Fach-, Anforderungs- und Befund-IDs erhalten. Auf Abschnittsnummer und Titel verweisen. Ein Kursdatei-Update schreibt bestehende studentische Fachunterlagen nicht automatisch um.

## Chats wiederfinden

Sinnvolle Titel mit Aufgabe und System sowie dreistelliger Nummer vereinbaren: 000–099 für E2E, 100–199 für Person 1, 200–299 für Person 2 und weitere Hunderterbereiche entsprechend. Die Nummer beim Wiederaufnehmen beibehalten. Ein neuer Skill braucht keinen neuen Chat; unabhängige Reviews und Feature-Implementierung erhalten die methodisch getrennten Kontexte.
