# P10 CI/CD
# 1 Neprekinjena integracija
**Neprekinjena integracija (CI)** je dnevni prenos nove, dopolnjene izvorne kode v skupni repozirotij za zgodnje ugotavljanje napak.

v željenem branchu maš na rootu mapco `.github/workflows` kjer imaš datoteko `CI.yml`, ki zgleda približno tkole:

```yaml
name: Neprekinjena integracija

on: # Kdaj se začne izvajanje delovnega toka?
  push:
    branches:
      - testno-okolje # Ob vsaki uveljavitvi na veji testno-okolje.
    paths-ignore:
      - "README.md" # Ignoriramo spremembe v dokumentaciji.

jobs:
  build:
    runs-on: # Okolje, v katerem se testi izvedejo.
      - ubuntu-latest
    strategy:
      matrix:
        node-verzija:
          - 15.x
    steps: # Posamezni koraki testiranja.
      - uses: actions/checkout@v2 # Pridobimo izvorno kodo repozitorija.
      - name: Uporabi Node.js ${{ matrix.node-verzija }} # Nastavi Node.js okolje.
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-verzija }}
      - run: npm install # Namesti knjižnice.
      - run: npm test # Poženi teste.
```

# 2 Neprekinjena postavitev
**Neprekinjena postavitev** je stalna izdaja, namestitev in prilagoditev programske rešitve za delovanje v produkcijskem okolju.

datoteka: `.github/workflows/CD.yml`

```yaml
name: Neprekinjena dostava

on: # Kdaj se začne izvajanje delovnega toka?
  push:
    branches:
      - produkcijsko-okolje # Ob vsaki uveljavitvi na veji produkcijsko-okolje.
    paths-ignore:
      - "docs/**" # Ignoriramo, če uveljavitev spreminja zgolj vsebino mape docs.
      - "README.md" # Ignoriramo spremembe v dokumentaciji.

jobs:
  build:
    runs-on: # Okolje, v katerem se testi izvedejo.
      - ubuntu-latest
    strategy:
      matrix:
        node-verzija:
          - 15.x
    steps: # Posamezni koraki testiranja.
      - uses: actions/checkout@v2 # Pridobimo izvorno kodo repozitorija.
      - name: Uporabi Node.js ${{ matrix.node-verzija }} # Nastavi Node.js okolje.
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-verzija }}
      - run: npm install # Namesti knjižnice.
      - run: npm test # Poženi teste.
      - name: Posredovanje na Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: ${{ secrets.HEROKU_PRODUCTION }}
          heroku_email: ${{ secrets.HEROKU_EMAIL }}
          branch: produkcijsko-okolje
```