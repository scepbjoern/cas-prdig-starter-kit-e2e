# Mehrere Systeme gemeinsam vorbereiten, starten und prüfen

Die Gruppe vereinbart System-IDs und feste Ports früh in der Solution Architecture. Das E2E-Projekt enthält solution.json; die Agents tragen echte Repository-Adressen, lokale Pfade, Startbefehle, Abhängigkeiten und Health-Pfade ein. Jeder Health-Endpunkt gibt JSON mit seiner systemId zurück.

## Getrennte Vorgänge

| Vorgang | Wirkung |
| --- | --- |
| node tools/solution.mjs prepare solution.json | Zeigt fehlende Downloads; verändert nichts |
| prepare solution.json --apply | Klont nur fehlende Repositories und checkt den angegebenen unveränderlichen Commit aus |
| Einrichtung je System | Abhängigkeiten bewusst installieren, beispielsweise npm ci; benötigte Konfiguration und Testdaten nach Systemanleitung vorbereiten |
| check solution.json | Prüft Manifest, Abhängigkeiten und vorhandene Checkouts |
| start solution.json | Prüft Ports, startet in Abhängigkeitsreihenfolge und wartet je System auf passende Systemidentität |
| Strg+C im Startfenster | Beendet nur die vom Starter selbst gestarteten Prozesse samt Prozessbaum |
| Datenreset | Nur ausdrücklich und separat nach Systemanleitung; niemals beim normalen Start |

Vorhandene Checkouts werden beim Download nicht verändert. Ein falscher Commit wird bei check/start gemeldet; der Agent klärt den gewünschten Stand und erhält lokale Arbeit. Ein Downloadfehler lässt den unvollständigen Checkout zur Diagnose stehen, statt ihn automatisch zu löschen.
Der Starter führt kein git pull, keine Installation, Migration oder Datenlöschung aus. Startbefehle sind Programm plus Argumente, ohne Shell. Beim Webprofil wird Node direkt verwendet. Vertrauliche Umgebungswerte gehören nicht ins Manifest, sondern in zulässige lokale Konfiguration.

## Entwicklung und gemeinsame Ausbaustufen

In development darf ref null sein. Für einen gemeinsamen geprüften Stand mode auf release setzen und alle System-Commits als vollständige 40-stellige Hashes, Vertragsrevision, Testdatenstand und Nachweise festhalten. Release-Checkouts müssen unverändert sein. Tags können ergänzend benannt werden, ersetzen im Manifest aber nicht den konkreten Commit.
Gleiche Milestone-Namen allein belegen keine Kompatibilität. validate-e2e prüft fachliche Abläufe; eine erfolgreiche Bereitschaftsprüfung ist noch kein E2E-Test und keine Abnahme.

Parallel arbeitende Agents nutzen andere Ports und isolierte veränderliche Testdaten. Die festen Ports des gemeinsamen Verbunds bleiben davon unabhängig.

Diese erste Fassung wird mit synthetischen Systemen geprüft. Die Erprobung mit mehreren realen Gruppen-Repositories, Antigravity und weiteren Betriebssystemen bleibt vor dem Hackathon erforderlich.
