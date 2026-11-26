# Werkzeuge und Übergaben

Öffnet den Projektordner in eurem Agentenwerkzeug. Bittet den Agenten beim Einstieg, README und AGENTS.md zu lesen und init-project zu verwenden. Prüft gemeinsam, welche lokalen Projekt-Skills gefunden werden. Ein neuer Skill-Wechsel ist kein neuer unabhängiger Arbeitskontext.

Für die Auswahl vor einem Rollenchat gilt [Modelle und Denkstufen](MODEL-POLICY.md), mit aktuellen Empfehlungen, Alternativen und Verfügbarkeit für Codex und Antigravity. Stellt Modell und Denkstufe selbst ein. Modellwechsel und Kontextwechsel sind unterschiedliche Dinge.

In der im Kurs erprobten Codex-Ansicht öffnet @ die Skill-Auswahl. Alternativ den Skill namentlich beauftragen und seine SKILL.md lesen lassen. Fachliche Planungsdialoge folgen [diesen Regeln](PLANNING-DIALOGUE.md); Zwischenstände vor Pausen selbst zum Speichern beauftragen.

Kursdateien prüfen: node tools/course/course-integrity.mjs im Projektordner. Das Manifest verwendet SHA-256 mit LF-normalisierten UTF-8-Textdateien (hashPolicy); Binärdateien bleiben bytegenau. Die Prüfung erkennt auch ältere Manifeststände mit reinen LF/CRLF-Abweichungen. Echte Inhaltsänderungen bleiben sichtbar und werden bei der Verteilung nicht überschrieben.

Die Skills liegen in .agents/skills. Dieser gemeinsame Pfad ist auch in der aktuellen [Antigravity-Dokumentation](https://antigravity.google/docs/skills) beschrieben. Der konkrete Erststart und der Wechsel zwischen den beiden Kurswerkzeugen müssen im verwendeten System erprobt werden.

Übergaben funktionieren über gespeicherte Dokumente, konkrete Revisionen und templates/shared/HANDOFF.md. Der empfangende Agent liest die benötigten Quellen selbst. Planung und Implementierung bleiben getrennte Kontexte; Implementation und Validierung bleiben zusammen.

Für manuelles Lesen und Ergänzen von Markdown empfehlen wir [MarkText](https://github.com/marktext/marktext). Öffnet die tatsächlichen Projektdateien; vermeidet unbemerkte parallele Kopien. Nach einer Änderung den Agenten betroffene Vorgaben und Pläne auf Konsistenz prüfen lassen.

Codex/ChatGPT Desktop ist der Kursstandard, Antigravity fakultativ. Der mit der Abgabe kompatible Antigravity-Chat-Export wird separat bis 27.11. bereitgestellt. Diese Kit-Version enthält noch keinen solchen Exporter. Die Nachweisregeln der Aufgabenstellung gelten unabhängig vom Werkzeug.

Für die Featureaufteilung bleibt ihr im System-Planungschat und verwendet slice-features. Für den anschliessenden Mock-Gesamtbau oder optionalen Nicht-Mock-Bauversuch startet ihr einen neuen Implementierungschat und ruft @build-system aus dem System-Repository auf. Der Skill liest die gespeicherten Quellen selbst; er erzeugt keinen neuen Chat. Der System-Planungschat bleibt für fachliche Änderungen und Koordination zuständig.
