# Fachliche Planung im Dialog

Diese Regeln gelten für die Klärungsdialoge von Prototype Brief, Solution Architecture, System-PRD, System Architecture und Design. Sie ergänzen den jeweiligen Skill; ausdrücklich beauftragte technische Arbeiten bleiben zusammenhängend ausführbar.

## Einstieg und Beratung
Erkläre zu Beginn knapp: Zunächst wird im Dialog gesammelt. Die Studierenden können jederzeit einen Zwischenstand speichern lassen und müssen diesen Auftrag selbst geben, insbesondere vor Pause oder Chatwechsel. Ein Skill kann eine bevorstehende Pause nicht verlässlich erkennen. Im gleichen laufenden Dialog genügt ein kurzer Bezug auf die bereits erklärte Arbeitsweise.

Greife bestätigte Entscheidungen auf. Frage bei noch offenen fachlichen Zielen zuerst nach eigenen Vorstellungen, ohne vorausgewählte Empfehlungen. Bei Ratlosigkeit oder Beratungswunsch unterstütze mit wenigen Optionen und ihren Folgen. Technische Vorschläge darfst du aus dem bestätigten Auftrag ableiten; ihre fachlichen Konsequenzen müssen verständlich bleiben. Erfinde keine Gruppenabstimmung und unterscheide Quellenbefund, Vorschlag und Entscheidung.

## Fortschritt und Speichern
Nach einer inhaltlichen Runde kurz zeigen: was geklärt, grob oder offen ist; wichtigste nächste Frage; neue Punkte seit dem letzten Speichern. Keine Prozentwerte oder Pflichtliste aller Kapitel. Nur im Chat gesammelte Angaben nicht als dauerhaft gespeichert bezeichnen.

Während offener Diskussion führende Ergebnisdateien nicht automatisch nach jeder Antwort ändern. Auf einen natürlichen Auftrag wie «nimm das auf», «Zwischenstand speichern» oder «halte den Stand fest» die betroffenen Dokumente konsistent schreiben, prüfen, committen und auf GitHub pushen (siehe COLLABORATION.md und Skill commit); keine weitere Bestätigungszeremonie. Ein ausdrücklicher Auftrag zur Ausarbeitung und Ablage erlaubt diese Arbeit. Entwurf, fachliche Bestätigung und Eignung für den nächsten Schritt getrennt ausweisen. Vorhandene menschliche Änderungen erhalten.

Weiteres Vertiefen, Zwischenstand und Weitergehen passend zum Stand ermöglichen. Bei kritischen Lücken deren konkrete Folge erklären und gezielt nachfragen oder gemeinsam vorläufige Annahmen festhalten. Keine endlose Vollständigkeitsprüfung und keine erfundene Freigabe. Technische Details bleiben Aufgabe der Agents.

## Quellen und nächste Kontexte
Der bestätigte Bauauftrag und gemeinsame Verträge führen. Bericht, Soll-Modell und Datenanalyse bei Bedarf gezielt vertiefen; relevante Fundstellen nennen. Fehlenden Zugriff konkret klären. Verworfenes aus Originalquellen nicht still in den Prototyp zurückholen. Abweichungsgründe bleiben zentral im E2E-Berichtsnachweis.

Prototype Brief und Solution Architecture können im gleichen E2E-Planungschat entstehen. Neue Autorenchats bei unübersichtlichem Kontext oder getrennten Aufträgen beginnen mit aktuellen Dateien und begrenztem Auftrag. Die Studierenden veranlassen die Sicherung vor dem Wechsel. Vorhandene Übergabevorlage bei Bedarf nutzen. Unabhängige Reviews erhalten keinen Erstellungsdialog; Feature-Planung und Implementierung bleiben getrennt. Updates auf der betroffenen Ebene beginnen, kein vollständiger Neustart je Iteration.

## Planungstiefe und Umsetzungsumfang
Plane den gesamten bestätigten Prototypumfang früh auf der jeweiligen Dokumentebene ausreichend konkret. Der Prototype Brief beschreibt den vollständigen Bauauftrag und die wichtigen Varianten, die Solution Architecture die dafür nötigen Systeme, Verträge und Integrationsbedingungen; das PRD die Systemanforderungen und prüfbaren Szenarien. Keine Detailkopien nachgelagerter Dokumente, keine unbeschlossenen Unternehmensanforderungen ergänzen. Ausführlich bedeutet fachlich belastbar, nicht möglichst lang.

Zu Beginn von create-prd die Planungstiefe klären, soweit noch nicht festgelegt: (1) nur MVP, (2) MVP detailliert und weitere bestätigte Stufen grob, (3) gesamter bestätigter Prototypumfang detailliert – Standard und Empfehlung. Vorhandene Wahl übernehmen; keinen bereits geführten Dialog neu beginnen. Wahl und verbleibende Lücken im PRD festhalten. Eine grobe Darstellung späterer Stufen nur bei bewusst gewähltem Modus, nicht automatisch. Spätere Architektur-/Review-Skills respektieren die Wahl, weisen aber auf kritische Folgen unklarer Varianten hin.

Umsetzungsauswahl und Reihenfolge folgen bei slice-features. Technische Feature-Pläne entstehen erst für tatsächlich anstehende Implementierungen. Bei Mocks ist der Gesamtbau des vereinbarten Umfangs mit gezielten Nachbesserungen der Normalfall, ohne Pflicht zu einzelnen Feature Plans. Neue Erkenntnisse dürfen die Planung ändern; Vollständigkeit ist keine Zusage, alles sofort umzusetzen.
