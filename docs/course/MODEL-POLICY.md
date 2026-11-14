# Modelle und Denkstufen im PIV

Stand: 14.11.2026 · Common 0.1.0-preview.2

Diese Kursregel hilft bei der Wahl eines geeigneten Modells. Die konkrete Auswahl hängt von verfügbarem Kontingent, Konto und Programmversion ab. Sie ist keine neue Abgabeanforderung und kein gemessener Vergleich aller Modelle.

## Die kurze Empfehlung

| Arbeit | Codex / ChatGPT Desktop | Antigravity |
| --- | --- | --- |
| Unabhängiger Review von PRD, Solution Architecture oder System Architecture | **GPT-6 Astra / Medium**, bei komplexen Verträgen und Abhängigkeiten **High**. Bei knappem Kontingent GPT-6.1 Sol / High als Alternative. | **Gemini 4 Carbon / High**, sofern verfügbar; sonst Gemini 4 Argon / High. |
| Prototypumfang, PRD, Architektur, Designentscheidungen und Feature-Planung | **GPT-6.1 Sol / High**. Bei genügend Kontingent Astra ausdrücklich auch für Erstellung und anspruchsvolle Designentscheidungen verwenden. | **Carbon / High** für anspruchsvolle PRD-Erstellung, Architektur und Designentscheidungen, sofern verfügbar; sonst **Argon / High**. |
| Feature-Implementierung und eigene Validierung | **GPT-6.1 Sol / Medium**. Sparsame Alternative für einen klar abgegrenzten Auftrag: **GPT-6 Luna / High**, bei Bedarf **Extra High**. | **Gemini 4 Hydrogen / Medium**, bei schwieriger Umsetzung oder Fehleranalyse High. |
| Schwierige E2E-Fehleranalyse und Beurteilung widersprüchlicher Ergebnisse | Sol / High, bei besonders anspruchsvollen Fällen Astra. | Carbon oder Argon / High, soweit verfügbar. |

Mit Carbon ist das Modell **Gemini 4 Carbon** gemeint. Es ist laut Google am 14.11. für Google AI Ultra und berechtigte Enterprise-Zugänge vorgesehen. Argon ist ebenfalls tarifabhängig; ein beliebiger kostenloser Studierenden-Trial garantiert keinen Zugriff. Falls beide fehlen, kann Hydrogen / High als Einstieg dienen. Für die Kursteilnahme ist kein Upgrade allein wegen dieser Tabelle erforderlich.

## Welche Skills gehören zu welchem Profil?

- **Planung und fachliche Entscheidungen:** `define-prototype`, `create-prd`, `plan-solution-architecture`, `plan-system-architecture`, `define-system-design`, `slice-features`, `plan-feature` und inhaltlich anspruchsvolle Updates. Auch ein Koordinationsagent verwendet dieses Profil, wenn er schwierige Entscheidungen vorbereitet.
- **Unabhängige Reviews:** `review-prd` und `review-architecture`. Die anschliessende Integration von Befunden erfolgt beim Autor; wesentliche fachliche Änderungen brauchen ebenfalls sorgfältige Beurteilung.
- **Umsetzung und eigene Prüfung:** `bootstrap-system`, `implement-feature` mit `validate-feature` sowie die technische Integration. Schwierigere Integration kann das stärkere Profil benötigen.
- **E2E-Prüfung:** `validate-e2e`. Bekannte Prüfungen ausführen verlangt nicht automatisch einen Modellwechsel; unklare Befunde beurteilen oder einen systemübergreifenden Fehler diagnostizieren kann ihn rechtfertigen.
- **Hilfsschritte:** `prime`, `document`, `commit`, `finish-release` und `reflect-rules` bleiben normalerweise beim laufenden Agenten. Kein zusätzlicher Modellwechsel oder Subagent nur für jeden kleinen Hilfsschritt. Anspruchsvolle Entscheidungen werden nach Inhalt eingeordnet.

## Luna als echte Umsetzungsalternative

Luna ist auch für klar abgegrenzte Feature-Implementierung vorgesehen, nicht nur für Text- oder Dokumentationsarbeiten. Gute Voraussetzungen sind ein gespeicherter, tragfähiger Feature Plan, geklärte Verträge und überprüfbare Szenarien. Beginnt mit High. Extra High ist eine mögliche Steigerung, keine Garantie für das Ergebnis eines grösseren Modells.

Wenn derselbe relevante Test trotz zweier gezielter Korrekturen weiterhin scheitert oder eine ungeklärte Architekturentscheidung auftaucht, empfiehlt der Agent eine stärkere Diagnose mit Sol oder Astra. Zwei Versuche sind ein praktischer Richtwert. Nicht unbegrenzt dieselbe erfolglose Änderung wiederholen; Tests und Akzeptanzkriterien nicht abschwächen.

Der Implementierer bleibt für seine eigene Validierung verantwortlich. Daraus entsteht kein separater obligatorischer Validator. Die fachliche Abnahme bleibt beim Menschen.

## Auswahl und Übergabe

1. **Vor einem neuen Rollenchat:** Rolle und passende Empfehlung bestimmen; Modell und Denkstufe in der Auswahl unter dem Eingabebereich einstellen. In Codex CLI ist dies auch mit `/model` möglich.
2. **Kontexte getrennt halten:** Planer A übergibt einen gespeicherten Plan an Implementierer B in einem frischen Kontext. Unabhängige Reviewer erhalten die Dokumente und nötigen Grundlagen, nicht den Erstellungsdialog. Ein anderer Modellname allein erzeugt keine Unabhängigkeit.
3. **Nicht bei jedem Skill umstellen:** Implementierer B führt `validate-feature` selbst aus. Passende Folge-Skills dürfen innerhalb des Auftrags ohne Modellwechsel weiterlaufen.
4. **Bei nötiger Umstellung:** Der Agent nennt die Empfehlung und bereitet eine kurze Übergabe vor. Er behauptet keinen automatischen Wechsel seines Hauptmodells. Ist die tatsächliche Einstellung nicht zuverlässig sichtbar, nennt er sie als unbekannt statt sie zu erraten.

Ein Skill ist eine Anleitung, keine Modellkonfiguration. Auch ein autonomes Ziel ersetzt die Auswahl und die fachliche Abnahme nicht.

## Optionale Delegation

Ein beauftragter Koordinationsagent kann passende Subagents nutzen, sofern die Umgebung dies unterstützt und der Auftrag oder die Projektanweisungen Delegation vorsehen. Dabei Modell und Denkstufe ausdrücklich konfigurieren, soweit unterstützt, und die tatsächlich zurückgemeldete Auswahl prüfen. Ohne zuverlässige Einstellmöglichkeit bleibt der manuelle Rollenchat der Rückfallweg.

Codex unterstützt Modell- und Reasoning-Vorgaben für Subagents. Die dokumentierten Antigravity-Subagent-Stufen `inherit`, `flash` und `pro` dürfen nicht ohne Nachweis mit einem konkreten Modell wie Carbon gleichgesetzt werden. Frische Kontexte werden über die Umgebung hergestellt; der komplette Eltern-Chat darf nicht ungeprüft an einen unabhängigen Reviewer oder Implementierer vererbt werden.

Antigravity **Orchestrator (Carbon/Argon)** kombiniert Planung und Umsetzung automatisch innerhalb einer Unterhaltung. Das ist eine separate Option, keine automatische Umsetzung unserer Regel für unabhängige Kontexte. Vor einem Einsatz als Kursstandard müssen diese Grenzen praktisch geprüft werden.

## Nutzungslimits bewusst einsetzen

Sichert ein ausreichendes Kontingent für wichtige Reviews und schwierige Entscheidungen. Bei knappen Limits ist Luna High eine Umsetzungsalternative. Mehr Denkaufwand kann mehr Zeit und Tokens kosten. Standardgeschwindigkeit ist sparsamer als Fast/Ultrafast; die aktuelle Nutzungsanzeige ist massgeblich. Ein Modellwechsel setzt bereits ausgeschöpfte gemeinsame Limits nicht zurück.

Die Empfehlungen sind anhand offizieller Dokumentation zusammengestellt; es liegt kein Praxistest sämtlicher Modelle mit den Kursprojekten vor. Die vereinbarten Tests und die menschliche Abnahme gelten bei jeder Modellwahl gleichermassen.

## Quellen

Geprüft am 14.11.2026:

- [OpenAI: Modelle und Denkstufen](https://learn.chatgpt.com/docs/models)
- [OpenAI: Subagents und Modellkonfiguration](https://learn.chatgpt.com/docs/agent-configuration/subagents)
- [OpenAI: Nutzungslimits und Kreditverbrauch](https://learn.chatgpt.com/docs/pricing)
- [Google: Modelle und Verfügbarkeit in Antigravity](https://antigravity.google/docs/models)
- [Google: Carbon für Architektur und anspruchsvolle Verifikation](https://antigravity.google/blog/gemini-4-carbon-in-google-antigravity)
- [Google: Custom Subagents](https://antigravity.google/docs/subagents)
