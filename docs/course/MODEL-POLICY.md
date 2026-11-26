# Modelle und Denkstufen im PIV

Stand: 26.11.2026.

Wählt vor einer Aufgabe ein geeignetes Modell und eine passende Denkstufe. Prüft die tatsächliche Auswahl selbst im Agentenwerkzeug. Ein Skill beschreibt das Vorgehen; er stellt das Modell nicht automatisch um. Verfügbare Modelle und Nutzungslimits hängen vom Konto und Werkzeug ab.

Die folgende Tabelle ist eine Kursempfehlung. Sie verbindet die bisherige Kursmethodik mit den aktuellen Modellrollen; ein vollständiger Vergleich aller Modelle an Kursprojekten liegt nicht vor.

## Empfehlung nach Aufgabe

| Aufgabe | Codex / ChatGPT Desktop | Antigravity |
| --- | --- | --- |
| Prototypumfang, PRD, Architektur, Design und Feature-Planung | **GPT-6.2 Sol / High**. Bewährte Alternative: **GPT-6.1 Sol / High**. Für besonders anspruchsvolle Entscheidungen Astra. | **Gemini 4 Neon / High**. Für komplexe Architektur und weitreichende Entscheidungen **Carbon / High**. |
| Unabhängiger PRD- oder Architekturreview | **GPT-6.2 Astra / High**; bewährte Alternative **GPT-6 Astra / Medium**, bei komplexen Verträgen High. Bei knappem Zugang Sol / High. | **Carbon / High**, sofern verfügbar; **Neon / High** als Alternative. |
| Feature-Implementierung und eigene Validierung | **GPT-6.2 Sol / Medium**, bei schwierigen Fehlern High. **GPT-6.1 Sol** bleibt eine Alternative. Für klar abgegrenzte Aufträge **Luna / High**. | **Hydrogen / Medium**, bei schwieriger Umsetzung High; bei komplexer Diagnose Neon oder Carbon. |
| Schwierige systemübergreifende Fehleranalyse | **Sol / High**, bei besonders anspruchsvollen Fällen **Astra / High**. | **Neon / High**, bei tiefgreifenden Architekturproblemen **Carbon / High**. |

Die Empfehlungen für Antigravity leiten sich aus Googles Positionierung ab: Neon für anspruchsvolle tägliche Arbeit, Carbon für tiefe Architektur- und Verifikationsaufgaben, Hydrogen für zügige Umsetzung. Sie sind keine eigene Rangliste aus Kurs-Benchmarks. [Neon](https://antigravity.google/blog/gemini-4-neon-in-google-antigravity), [Carbon](https://antigravity.google/blog/gemini-4-carbon-in-google-antigravity), [Hydrogen](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity).

## Codex: neue und bewährte Modelle

Die Kursleitung hat den aktuellen eigenen Durchlauf vor allem mit **GPT-6.2 Sol / High** und für Reviews mit **GPT-6.2 Astra** erprobt. Bei ausreichendem Nutzungslimit nutzt sie weiterhin gerne **GPT-6.1 Sol** und **GPT-6 Astra**. Dies ist eine persönliche Arbeitserfahrung; neuere Modelle werden dadurch weder pauschal als besser noch als schlechter bewertet.

**GPT-6.1 Terra** eignet sich besonders für visuelles Verständnis, Screenshots, verständliche Texte und Bedienaufgaben in unterstützten Anwendungen. Im Kurs ist es eine sinnvolle Option für visuelle UI-Prüfungen und Browser-/Computerarbeit. Für die inhaltliche Prüfung komplexer Architekturen bleibt das Review-Profil oben der Ausgangspunkt. [OpenAI: Modellrollen](https://learn.chatgpt.com/docs/models).

Für die Modellwahl zählen **Nutzungsverbrauch und Kosten pro erfolgreich erledigter Aufgabe**, einschliesslich nötiger Korrekturrunden. OpenAI gibt an, dass **GPT-6.2 Sol mehr Aufgaben im gleichen bezahlten Abo ermöglicht als GPT-6.1 Sol**. Das spricht für einen geringeren Verbrauch pro Aufgabe; eine allgemeingültige prozentuale Ersparnis oder einen festen Preis pro Planungsauftrag nennt der Hersteller dafür nicht. [OpenAI: GPT-6.2 Sol](https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol).

Als Orientierung nennt OpenAI für **typische Codex-Aufgaben mit GPT-6.2 Sol etwa 2–15 Credits**. Ein entsprechender aktueller Aufgabenrichtwert für GPT-6.1 Sol fehlt in dieser Tabelle; deshalb lässt sich daraus kein belastbarer direkter Zahlenvergleich ableiten. Die Angabe stammt aus der Rate Card für Business/Enterprise/Edu und ist kein Festpreis für eine Kursaufgabe. Ein Preis in Franken hängt zusätzlich vom Tarif beziehungsweise Credit-Preis ab. [OpenAI: Credit-Verbrauch](https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing).

Vergleicht nach Möglichkeit ähnliche Aufträge bei gleicher Denkstufe und Geschwindigkeit und beurteilt Ergebnisqualität, nötige Nacharbeit und tatsächlichen Verbrauch zusammen. Gleiche Tokenpreise bedeuten nicht gleiche Kosten pro erledigter Aufgabe. Die angezeigten Nachrichtenkontingente sind ebenfalls keine Zahl vollständig erledigter Aufgaben. [OpenAI: Preise und Nutzung](https://learn.chatgpt.com/docs/pricing).

## Antigravity: Verfügbarkeit und Orchestrator

**Argon wird laut Google am 30.11.2026 entfernt** und ist deshalb keine Empfehlung für neue Kursaufgaben mehr. Neon und Carbon sind je nach Tarif verfügbar; ein gewöhnlicher kostenloser Pro-Trial garantiert ihren Zugang nicht. Hydrogen ist die verfügbare Grundoption auf allen Tarifen. Fehlen Neon und Carbon, beginnt mit Hydrogen / High und prüft schwierige Entscheidungen entsprechend sorgfältig. Ein Upgrade nur wegen dieser Tabelle ist keine Kursvoraussetzung. [Google: Modelle und Verfügbarkeit](https://antigravity.google/docs/models).

Der **Orchestrator** kombiniert einen Planer, beispielsweise Neon oder Carbon, mit einem Ausführer wie Hydrogen in derselben Unterhaltung. Es handelt sich nicht um drei gleichartige «Orchestrator-Versionen» der Einzelmodelle. In der App lassen sich je nach Konto Planer/Ausführer und Denkstufen wählen; die CLI bietet andere Einstellmöglichkeiten. [Google: Orchestrator](https://antigravity.google/docs/models#orchestrator).

Für den Kurs ist Orchestrator eine optionale technische Arbeitsweise innerhalb eines abgegrenzten Auftrags. Unsere methodische Trennung bleibt bestehen: Feature-Planung und Implementierung starten in getrennten Kontexten; unabhängige Reviews erhalten keinen Erstellungsdialog. Die interne Rückprüfung eines Orchestrators ist kein Ersatz für diesen unabhängigen Review. Vor Verwendung die tatsächliche Konfiguration und den Kursauftrag prüfen.

## Luna für abgegrenzte Umsetzung

Luna kann auch Features implementieren, wenn ein tragfähiger gespeicherter Feature Plan, geklärte Verträge und überprüfbare Szenarien vorliegen. Beginnt mit High; Extra High ist bei Bedarf eine Steigerung.

Scheitert derselbe relevante Test trotz zweier gezielter Korrekturen weiter oder taucht eine ungeklärte Architekturentscheidung auf, empfiehlt der Agent eine Diagnose mit Sol oder Astra. Zwei Versuche sind ein praktischer Richtwert. Tests und Akzeptanzkriterien bleiben verbindlich.

Der Implementierer validiert seine Änderungen selbst. Die fachliche Abnahme bleibt beim Menschen.

## Skills und Rollen

- **Planung:** define-prototype, create-prd, plan-solution-architecture, plan-system-architecture, define-system-design, slice-features, plan-feature und anspruchsvolle Updates.
- **Unabhängiger Review:** review-prd und review-architecture. Befunde werden danach im ursprünglichen Autorenchat integriert.
- **Umsetzung:** bootstrap-system, implement-feature und validate-feature; Integration nach Schwierigkeit.
- **E2E-Prüfung:** validate-e2e. Bekannte Prüfungen ausführen braucht nicht automatisch einen Modellwechsel; schwierige Befunde können das Diagnoseprofil erfordern.
- **Hilfsschritte:** prime, document, commit, finish-release und reflect-rules bleiben normalerweise beim laufenden Agenten. Kein zusätzlicher Rollenwechsel für jeden Hilfsskill.

## Auswahl und Übergabe

1. Vor dem Rollenstart Rolle, Modell und Denkstufe bestimmen und selbst in der Modellauswahl einstellen. In Codex CLI ist die Auswahl über /model möglich. [OpenAI: Modellauswahl](https://learn.chatgpt.com/docs/models).
2. Im laufenden Auftrag passende Folge-Skills verwenden, ohne für jeden Schritt das Modell zu wechseln.
3. Für einen unabhängigen Review einen neuen Chat mit aktuellen Dokumenten und fachlichen Grundlagen starten. Den Erstellungsdialog nicht übergeben. Dasselbe Modell in einem neuen Kontext kann unabhängig prüfen; ein blosser Modellwechsel im bisherigen Chat schafft diese Unabhängigkeit nicht.
4. Für die Integration der Reviewbefunde in den ursprünglichen Autorenchat zurückkehren.
5. Kann der Agent eine andere Einstellung empfehlen, benennt er sie. Er behauptet keine tatsächlich nicht überprüfte Modellumstellung. Vor einem nötigen Chatwechsel den Arbeitsstand speichern lassen.

Optionale Subagents setzen einen entsprechenden Auftrag beziehungsweise passende Projektregeln und eine unterstützende Umgebung voraus. Modellkonfiguration und Kontextübergabe prüfen; nicht ungeprüft die ganze Unterhaltung an einen unabhängigen Reviewer weitergeben. Bei Antigravity bezeichnen inherit, flash und pro Modellstufen; daraus nicht automatisch ein konkretes Modell ableiten. [Google: Subagents](https://antigravity.google/docs/subagents).

## Prüfstand dieser Empfehlung

Offizielle Quellen am 26.11.2026 gelesen. OpenAI-Abgleich bewusst kurz: Modellrollen, Preisübersicht und Verbrauch pro Aufgabe; ergänzend lokale Modellbeschreibungen geprüft. Antigravity-Modellübersicht und Herstellerbeiträge zu Neon, Carbon und Hydrogen abgeglichen. Der persönliche Teststand der Kursleitung ersetzt keinen vollständigen Vergleich sämtlicher Modelle und Werkzeuge.
