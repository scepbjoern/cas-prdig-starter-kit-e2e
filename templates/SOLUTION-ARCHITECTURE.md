# Solution Architecture

Status / Revision / zugrunde liegender Prototype Brief / bestätigte Entscheidungen und offene Annahmen:
Gesamter bestätigter Prototypumfang auf Architekturebene, erste Ausbaustufe und weitere bestätigte Stufen; Systemgrenzen und Verträge früh konkret, Umsetzungsreihenfolge getrennt festhalten.

## 1 Verständlicher Überblick
Systemgrenzen und Datenflüsse als Diagramm. Welches System tut was? Welche fachlichen Folgen haben die Entscheidungen?

| System-ID | Zweck / Mock oder neues System | Repository | Verantwortliche | Port / Adresse |
| --- | --- | --- | --- | --- |

## 2 Gemeinsame Verträge
Verweise auf Interface/Data Contracts mit Revision. Richtung, Verantwortlichkeit, Fehlerverhalten und Datenhoheit.

## 3 Gemeinsamer Start der gesamten Solution
Bereits in der ersten Arbeitsfassung: Wie werden alle beteiligten Systeme gemeinsam gestartet, damit die E2E-Szenarien durchgespielt werden können? Übersicht über Abhängigkeiten, Reihenfolge und den fachlichen Einstieg in den Ablauf.

### 3.1 Start- und Bereitschaftsplan für Agents
Pro System: festgelegte ID, Port/Adresse, Abhängigkeiten, benötigte Konfiguration, Testdaten, geplanter Startbefehl bei bekanntem Stack und Bereitschaftsprüfung. Architekturprägende Versionen, Betriebsformen und Auslöserentscheidungen klären. Verweis auf solution.json; keine Geheimnisse eintragen.

### 3.2 Offene Werte und Nachführung
Noch fehlende reale Repositories/Befehle mit Zuständigkeit und Zeitpunkt der Klärung benennen. Der E2E-Planungsagent führt solution.json anhand der tatsächlichen System-Repositories und gespeicherten Systemarchitekturen nach; die Gruppe veranlasst diese Rückmeldung. Entwurfsstand, geprüfte Startfähigkeit und fachlicher E2E-Test getrennt ausweisen.

## 4 Technische Vorgaben für Agents
Austauschformate, Datenhoheit, Fehler-/Wiederholungsverhalten und weitere Integrationsbedingungen. Details passend zum Umfang; keine Produktionsvollständigkeit verlangen.

## 5 Integration und Änderungen
Kleine frühe Integrationsprobe; gemeinsame Szenarien. Betroffene Systeme bei Vertragsänderungen abstimmen. Offene Entscheidungen und unabhängige Review-Befunde.

Referenzen: Abschnittsnummern und stabile IDs für einzeln besprochene Anforderungen, Kriterien, Szenarien, Fähigkeiten, Entscheidungen und Befunde verwenden. Bestehende IDs erhalten; natürliche eindeutige Schlüssel nicht unnötig duplizieren. Siehe COLLABORATION.md (im Kit docs/course/).
