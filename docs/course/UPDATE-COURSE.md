# Kursdateien bestehender Gruppen-Repositories aktualisieren

**Zielversion: 0.1.0-preview.6 · 26.11.2026.**

Neue Repositories aus **Use this template** enthalten den zu diesem Zeitpunkt aktuellen Kursstand. Bereits erstellte Gruppen-Repositories brauchen ein gezieltes Update der Kursdateien. Eure bisherigen Planungsunterlagen und eure Anwendung werden dabei erhalten.

## 1. Zuständigkeit vereinbaren

Bestimmt für euer E2E-Repository und jedes bereits vorhandene System-Repository jeweils eine Person, die das Update übernimmt. Währenddessen bearbeiten die anderen dort keine Kursdateien. Das Update wird pro gemeinsamem Repository einmal durchgeführt.

## 2. Update im bestehenden Projekt beauftragen

Öffnet den bisherigen Projektchat für das betreffende Repository. Falls dort mehrere Repositories bearbeitet werden, nennt zusätzlich das gewünschte Repository. Gebt folgenden Auftrag:

> Aktualisiere die Kursdateien dieses bestehenden Gruppen-Repositories auf die Kursversion **0.1.0-preview.6**.
>
> Lies README.md und AGENTS.md. Prüfe Git-Status, vorhandene lokale Änderungen und den Stand unseres eigenen GitHub-Repositories. Erhalte auch unversionierte Dateien und bereits vorbereitete Commits; sichere das Update nachvollziehbar getrennt von unserer eigenen Arbeit.
>
> Ermittle aus der Projektkonfiguration, ob dies ein E2E- oder System-Repository ist. Nutze die passende offizielle Quelle:
> E2E: https://github.com/scepbjoern/cas-prdig-starter-kit-e2e
> System: https://github.com/scepbjoern/cas-prdig-starter-kit-system
>
> Ermittle den bisherigen Kursstand und den zur Zielversion gehörenden Quellcommit. Vergleiche beide Kursstände mit unserer Arbeitskopie. Nutze course-manifest.json für die gemeinsamen Kursdateien und berücksichtige zusätzlich die kitspezifischen Skills, Vorlagen, Anleitungen und Werkzeuge. Führe das kompatible Kursupdate aus; kläre echte Konflikte mit mir. Falls sich der bisherige Stand nicht verlässlich bestimmen lässt, benenne die betroffenen Dateien konkret.
>
> Erhalte unsere Planungsunterlagen, Verträge, Anforderungen, Projektregeln, Anwendung, Daten und Zugangskonfiguration. Übernimm bei gemeinsam genutzten Dateien wie package.json gezielt die erforderlichen Kursänderungen und erhalte unsere eigenen Ergänzungen. Erhalte auch selbst ergänzte Skills. Unser Repository, seine Historie und origin bleiben bestehen.
>
> Prüfe die aktualisierten Kursdateien mit dem mitgelieferten Integritätsprüfer und den zur Änderung passenden Prüfungen. Der Integritätsprüfer erfasst die Common-Dateien; gleiche die übrigen aktualisierten Kursdateien ebenfalls mit dem Zielstand ab. Prüfe den abschliessenden Diff auf erhaltene Projektarbeit.
>
> Sichere ausschliesslich das Kursupdate mit nachvollziehbarem Commit in unserem Gruppen-Repository auf GitHub. Melde Quellversion/-commit, Update-Commit, Ergebnis der Prüfungen und verbleibende Konflikte. Lies anschliessend die für unseren aktuellen Arbeitsschritt relevanten aktualisierten Skills und Kursregeln neu ein. Die fachliche Planung wird durch diesen Auftrag nicht überarbeitet.

Der Agent nennt die übernommenen Änderungen und das Prüfergebnis. Bei einem Konflikt beschreibt er die betroffene Datei und welche Entscheidung nötig ist.

## 3. Weitere Gruppenmitglieder beziehen den Stand

Sobald das Update im gemeinsamen Repository auf GitHub gesichert ist, geben die übrigen Gruppenmitglieder in ihrem Projektchat folgenden Auftrag:

> Beziehe den von unserer Gruppe gesicherten Kursupdate-Stand aus unserem gemeinsamen Repository. Prüfe vorher Branch, Git-Status und eigene lokale Änderungen und erhalte meine gesamte Arbeit. Synchronisiere meine Arbeitskopie mit dem passenden Gruppenstand; kläre tatsächliche Konflikte mit mir. Prüfe den übernommenen Kursstand und lies die für meinen aktuellen Arbeitsschritt relevanten aktualisierten Skills und Kursregeln neu ein.

Danach arbeitet ihr mit euren bisherigen Projektunterlagen weiter. Wiederholt den Ablauf für jedes weitere bereits bestehende System-Repository.

## 4 Prüfstand dieser Anleitung

Der beschriebene dateiweise Updateweg wurde am 26.11.2026 an einer bestehenden E2E-Arbeitskopie mit eigenen Planungsdateien ausgeführt: 32 Kursdateien übernommen, 31 übrige Dateien per Prüfsumme unverändert, fünf Tests und Common-Manifestprüfung bestanden. Dies prüft den Updateweg, nicht die selbständige Befolgung des Prompts durch alle Modelle. Ein entsprechender Durchlauf an einem bereits implementierten studentischen System-Repository ist noch nicht erfolgt. Der Auftrag verlangt deshalb den Vergleich der einzelnen Dateien und den Erhalt projektspezifischer Ergänzungen; er ist kein blindes Kopierkommando.

## 5 Webprofil und bestehende Anwendungen

preview.6 enthält ein neu geprüftes Webprofil unter profiles/web-next. Bei noch nicht aufgebauten Systemen genügt das Kursupdate; bootstrap-system verwendet später dieses Profil. Eine bereits aufgebaute Anwendung hat eigene Paketdateien an der Repository-Wurzel. Diese niemals pauschal durch das Profil ersetzen. Ein Kursupdate allein migriert ihre Abhängigkeiten und ihre fachliche Architektur nicht. Der zuständige Projektagent gleicht auf ausdrücklichen Auftrag die gespeicherte Architektur, lokale Node-/npm-Version, zusätzliche Bibliotheken und Paketdateien ab, erneuert das Lockfile passend und prüft Typen, Build, Start, Schnittstellen und Oberfläche. PROFILE.md enthält die getestete Kombination und ihre Grenzen.
