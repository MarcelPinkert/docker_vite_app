# React + Vite in Docker Container

Dieses Template bietet ein minimales Setup, um React mit Vite und HMR sowie einigen ESLint-Regeln zum Laufen zu bringen.

Derzeit sind zwei offizielle Plugins verfügbar:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) verwendet [Babel](https://babeljs.io/) für Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) verwendet [SWC](https://swc.rs/) für Fast Refresh

## Erweiterung der ESLint-Konfiguration

Wenn du eine Produktionsanwendung entwickelst, empfehlen wir, TypeScript mit aktivierten typbasierten Lint-Regeln zu verwenden. Sieh dir das [TS-Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) an, um Informationen darüber zu erhalten, wie du TypeScript und [`typescript-eslint`](https://typescript-eslint.io) in dein Projekt integrieren kannst.



## Reflexion vom 21.08.2025

### Namensräume
Das Format `<username>/<repository>` ist auf Docker Hub so wichtig, weil ich damit eindeutig festlege, dass ein Image von mir stammt.  
Wenn jeder sein Image einfach nur `meine-webseite` nennen könnte, gäbe es sofort Namenskollisionen und niemand wüsste mehr, von wem das Image wirklich kommt. Durch den Namensraum wird klar, dass es mein Repository ist.

### Tag vs. Build
Mit `docker build -t neuer-name .` baue ich ein neues Image aus meinem Dockerfile im aktuellen Verzeichnis und gebe ihm direkt einen Namen und Tag.  
Mit `docker tag alter-name neuer-name` erstelle ich dagegen **kein neues Image**, sondern nur einen zusätzlichen Verweis (Alias) auf ein bereits bestehendes Image. Das heißt: Es wird nichts neu gebaut, sondern ich vergebe nur einen weiteren Namen.

### Versionierung
Wenn ich einen kleinen Fehler (Bugfix) behoben habe, würde ich mein Image mit einem **Patch-Tag** wie `:1.0.1` versehen.  
Eine saubere Versionierung ist mir wichtig, weil:
- ich sofort erkennen kann, ob es sich um Bugfixes, neue Features oder größere Änderungen handelt.  
- ich ältere Images jederzeit reproduzierbar nutzen kann.  
- ich Klarheit und Transparenz im Deployment-Prozess habe.  

### Öffentlich vs. Privat
Ein öffentliches Repository nutze ich, wenn ich mein Projekt mit anderen teilen oder Open Source bereitstellen möchte.  
Ein privates Repository würde ich unbedingt verwenden, wenn:
- mein Code vertraulich oder nur für den internen Gebrauch gedacht ist.  
- ich Images mit sensiblen Daten oder Konfigurationen speichern muss.  
- nur bestimmte Teams Zugriff auf die Images haben sollen.  

# My Vite App (Dockerized)

Dieses Projekt zeigt, wie ich eine React/Vite-App mit Docker containerisiere und auf Docker Hub veröffentliche.

## Nutzung des Docker Images

Mein Repository findest du auf Docker Hub:  
[marcelpinkert/my-vite-app](https://hub.docker.com/r/marcelpinkert/my-vite-app)

### Image herunterladen
### bash 
docker pull marcelpinkert/my-vite-app:latest

