# Werkzeuge und Übergaben

Öffnet den Projektordner in eurem Agentenwerkzeug. Bittet den Agenten beim Einstieg, README und AGENTS.md zu lesen und init-project zu verwenden. Prüft gemeinsam, welche lokalen Projekt-Skills gefunden werden. Ein neuer Skill-Wechsel ist kein neuer unabhängiger Arbeitskontext.

Für die Auswahl vor einem Rollenchat gilt [Modelle und Denkstufen](MODEL-POLICY.md): Astra für unabhängige Reviews, Sol für Planung und Umsetzung, Luna als sparsame Umsetzungsalternative. In Antigravity Carbon für PRD/Architektur und Reviews, sofern verfügbar, sonst Argon. Modellwechsel und Kontextwechsel sind unterschiedliche Dinge.

Die Skills liegen in .agents/skills. Dieser gemeinsame Pfad ist auch in der aktuellen [Antigravity-Dokumentation](https://antigravity.google/docs/skills) beschrieben. Der konkrete Erststart und der Wechsel zwischen den beiden Kurswerkzeugen müssen im verwendeten System erprobt werden.

Übergaben funktionieren über gespeicherte Dokumente, konkrete Revisionen und templates/shared/HANDOFF.md. Der empfangende Agent liest die benötigten Quellen selbst. Planung und Implementierung bleiben getrennte Kontexte; Implementation und Validierung bleiben zusammen.

Für manuelles Lesen und Ergänzen von Markdown empfehlen wir [MarkText](https://github.com/marktext/marktext). Öffnet die tatsächlichen Projektdateien; vermeidet unbemerkte parallele Kopien. Nach einer Änderung den Agenten betroffene Vorgaben und Pläne auf Konsistenz prüfen lassen.

Codex/ChatGPT Desktop ist der Kursstandard, Antigravity fakultativ. Der mit der Abgabe kompatible Antigravity-Chat-Export wird separat bis 27.11. bereitgestellt. Diese Kit-Version enthält noch keinen solchen Exporter. Die Nachweisregeln der Aufgabenstellung gelten unabhängig vom Werkzeug.
