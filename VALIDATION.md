# Prüfstand – E2E

## Nachprüfung 0.1.0-preview.4 – 25.11.2026

Alle zehn automatisierten Tests bestehen: Common 3 (einschliesslich zwei neuer Integritätsprüfungen), E2E 5, System 2. Geprüft: frische Git-Klone mit LF/CRLF, Migration alter Byte-Manifeste, Erkennung und Überschreibschutz echter Änderungen sowie Erhalt eigener Planungsdateien. Beide verteilten Manifeste stimmen für alle 28 Common-Dateien. 43 Skill-Dateien auf Frontmatter geprüft.

Die Dialogänderungen beruhen auf einem menschlichen define-prototype-Praxistest und wurden gegen die bestätigten Regeln gelesen. Kein neuer unabhängiger Verhaltensnachweis der überarbeiteten Planungsskills; der nächste menschliche Durchlauf beginnt bei Solution Architecture. macOS und Antigravity weiterhin nicht nachgetestet.

Windows / Node 24.11.0, 13.11.2026.

Fünf automatisierte Szenarien bestanden: doppelte Ports und zyklische Abhängigkeiten abgewiesen; zwei synthetische Dienste in Abhängigkeitsreihenfolge gestartet und beendet; falsche Health-Identität führt zu Fehler und Aufräumen; belegter fremder Port bleibt unangetastet; Downloadvorschau erhält vorhandene Arbeit und Release verlangt konkrete Commits.

Die Health-Prüfung belegt Bereitschaft und Identität, keinen fachlichen E2E-Prozess. Fachliche E2E-Szenarien, Testdaten und menschliche Gruppenabnahme sind projektspezifisch zu ergänzen.

Zusätzlich wurde das neue private System-Repository über prepare tatsächlich von GitHub in einen neuen temporären Ordner geklont, auf Commit 93693a0530af14f638243e31f68dfdf524bfcced ausgecheckt und mit check verifiziert. Alle 21 mitgelieferten Common-Dateien stimmen nach dem Klonen mit ihren Hashes überein. Noch offen bis zur praktischen Kursfreigabe: mehrere reale Gruppen-Repositories, Mac, Antigravity, native Anwendungen, parallele persönliche Worktrees und fachliche Computer-Use-Prüfung über mehrere Systeme.
