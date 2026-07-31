# Ølsmakerorkesteret

Statisk Astro-nettsted for Ølsmakerorkesteret. Testresultatene
ligger som validerte YAML-filer i `src/content/tester/`, mens bilder ligger i
`public/images/`.

## Lokal utvikling

```sh
npm install
npm run dev
```


## Kontroll og produksjonsbygg

```sh
npm run build
```

Bygget havner i `dist/`. Push til `main` utløser automatisk publisering til
GitHub Pages. Under **Settings → Pages** i GitHub må kilden settes til
**GitHub Actions**. Domenet `pils.kreni.no` er konfigurert i `public/CNAME`.

## Legge til en test

Kopier en eksisterende fil i `src/content/tester/`, oppdater metadata og legg
resultatene i `results`. Astro lager automatisk oversiktskort og en egen testside.
Datamodellen valideres ved bygging.
