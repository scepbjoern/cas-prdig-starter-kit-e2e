# CAS PRDIG – e2e

Lies beim Einstieg README, project.json (falls vorhanden), Git-Status und den zum Auftrag passenden Skill. Normale deutsche Texte mit Umlauten und Schweizer Rechtschreibung. docs/course/PIV-WORKFLOW.md beschreibt die verbindliche Arbeitsweise dieser Vorlage.
Die Gruppe steuert fachliche Ziele, Szenarien und Abnahmen; Agents übernehmen technische Tasks. Arbeite innerhalb des bestätigten Auftrags zusammenhängend ohne Task-Pflichtstopps. Passende Folge- und Hilfsskills dürfen selbst gewählt werden.
Feature-Planer und Implementierer sind getrennte Agentenkontexte. Der Implementierer validiert selbst. PRD und Solution/System Architecture erhalten unabhängige Reviews ohne Erstellungsdialog. Kein obligatorisches Feature-Plan-Review, kein Validator C.
Ein Koordinationschat pro Person/System organisiert Aufträge, Entscheidungen und Integration. Gemeinsame Wahrheit sind aktuelle Dokumente und Issues, nicht der Chat. Bei Wiederaufnahme und vor Integration relevante eigene und E2E-Issues samt Kommentaren und gültige Verträge lesen.
Feature-Status: geplant → Umsetzung → Abnahme ausstehend → menschlich abgenommen → integriert. Abnahme kann nur aus tatsächlicher menschlicher Entscheidung entstehen. Bei Abnahme im Verbund eine Testumgebung herstellen, ohne technische Integration mit Annahme zu verwechseln.
Parallel arbeitende Agents verwenden getrennte Branches/Worktrees und eigene Testports. Integration in den gemeinsamen Zielbranch nacheinander koordinieren. Pull Requests sind freiwillig. Fremde Arbeit erhalten; eigene Änderungen gezielt sichern.
Interface/Data Contracts im E2E-Projekt sind führend. Im System-Projekt muss vor PRD/Bootstrap realer Lesezugriff bestehen. Architekturänderungen auf abhängige Dokumente, Tests und Systeme prüfen.
Explorative visuelle Prototypen entstehen in einem separaten Chat ohne PIV-Skills. Deren Code niemals übernehmen. Erkenntnisse und Referenzbilder dürfen die Anforderungen präzisieren.
Common-Kursdateien bleiben möglichst eingefroren. Eigene Regeln in docs/project-rules.md pflegen. Keine geheimen oder personenbezogenen Echtdaten in Beispiele oder öffentliche Repositories übernehmen.
