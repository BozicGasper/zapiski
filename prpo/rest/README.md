# REST storitve

**Re**presentational **S**tate **T**ransfer predstavlja *arhitekturni stil* ter temelji na *abstrakciji* arhitekturnih elemenotv znotraj distribuiranih hipermedijskih sistemov.
Predstavlja način komunikacije med odjemalcem in strežnikom. Ponujaja *pomenljive*,*preproste* in *naslovljive* in je **brez stanja**.

Prednosti REST:
- Skalabilnost
- Splošnost
- Neodvisnost
- Odzivnost na spremembe
- Latenca
- Varnost
- Enkapsulacija

## HATEOAS
**H**ypermedia **A**s **T**he **E**ngine **O**f **A**pplication **S**tate predstavlja dodatno omejitev REST arhitekture, kjer je ideja taka:

V principu naj bi odjemalec komuniciral z aplikacijo preko omrežja *zgolj preko hipermedija*, ki ga dinamično streže strežnik.

V realnosti si *odjemalec* in *strežnik* izmenjujeta **reprezentacijo virov**, kjer je **oblika** same reprezentacije pomembna. Vir je v postopku izmenjave **enolično naslovljen**, njegova reprezentacija pa odjemalczadošča za potrebno manipulacijo** le tega. Reprezentacije sporočil so **samoopisne**, kjer sporočila vsebujejo vsa potrebna **navodila za procesiranje**

## Oblikovanje RESTFUL storitev
RESTful spletni API (RESTful spletna storitev) temelji na osvoni REST arhitekture in **HTTP** protokola. Podatki zapisani v *hipertekst* obliki in se prenašajo preko internetnega medija. 

### Viri
Oblikovanje virov je pomembno! Viri morajo biti oblikovani **enostavno** in **učinkovito**!

Če je vir zbirke enak ```/razmerja```, potem naj bo vir instance iz te zbirke ```/razmerja/{instancaId}```.

Za določanje akcij na virih se uporabljajo standardne HTTP metode:
- GET - *pomeni branje*
  > ```GET /razmerja``` vrne seznam razmerij
  > ```GET /razmerja/{id}``` vrne razmerje, ki z podanim id-jem
- POST - *pomeni ustvarjanje novega vira*
  > ```POST /razmerja``` z nekim predoločenim telesom zahteve ustvari novo razmerje
- PUT - *pomeni posodabljanje celotnega obstoječega vira*
  > ```PUT /razmerja/{id}``` z ekim predoločenim telesom zahteve posodobi razmerje s podanim id-jem
- DELETE - *pomeni brisanje/deaktiviranje*
  > ```DELETE /razmerja/{id}``` izbriše razmerje s podanim id-jem
- HEAD - *pomeni branje HTTP zaglavja brez vsebine*
- PATCH - *pomeni delno posodablanje obsotječega vira*

Akcije, ki ne spadajo v standardne CRUD operacije lahko vključimo na več različnih načinov
- restrukturiranje akcije, da jo predstavimo kot polje na viru
- obravnavamo akcijo kot nek pod-vir
  > ```POST /razmerja/242/skleni``` ali npr. ```POST /razmerja/242/prekini```
- ustvarimo nov navidezni vir
  > ```POST /iskanje```

#### Odgovori na zahteve
Na uspešno ```GET``` zahtevo se vrne odgovor s statusom **200** in telesom, ki vsebuje podatke.

Na uspešno ```POST``` zahtevo se vrne odgovor s statusom **201** (in poljubno telesom, ki vsebuje podatke).

Na uspešno ```PUT``` zahtevo se vrne odgovor s statusom **200** (in poljubno telesom, ki vsebuje podatke).

Na uspešno ```DELETE``` zahtevo se vrne odgovor s statusom **204(No Content)** brez telesa.

### Verzioniranje
- Verzijo lahko izražamo preko poti API-ja
  > *my.api.domain<b>/v1</b>/razmerja*
- Verzioniramo lahko tudi s pomočjo MIME formata sporočila
  > ```Content-Type: application/si.ts.tipi.v1.razmerje+json``` ali ```Content-Type: application/si.ts.tipi.razmerje+json;v=1```
- Verzioniranje je možno tudi s pomočjo poljubnega polja v HTTP glavi
  > ```X-API-Version: 1```

V dobrih praksah se verzionira le *major* verzija.
### Iskanje med zbirkami
#### Filtriranje rezultatov
vsako polje v objektu, ki ga iščemo je svoj parameter, ki ga lahko uporabimo v URL naslovu kot parameter poizvedbe.

```GET https://api.ts.si/razmerja?prioriteta=5```

Z bolj fleksibilnim in močnim iskanjem lahko definiramo dodatno sintakso z uporabo parametra "**where**"

```GET https://api.ts.si/razmerja?where=vrednost:gte:521```

#### Sortiranje rezultatov
uporabimo lahko generičen parameter "**order**", mu podamo seznam polj in smer(i).

```GET https://api.ts.si/razmerja?order=naziv ASC,prioriteta DESC```

#### Splošno iskanje
Za namene splošnega iskanja lahko dodamo iskalni parameter (npr generični "q")

```GET https://api.ts.si/razmerja?q=alta```

#### Alias
Za poizvedbe, za katere vemo, da se izvajajo bolj pogosto, lahko ustvarimo tudi aliase

```GET https://api.ts.si/novice/danes```

#### Kombiniranje
Vse zgodnje principe iskanja, sortiranja in filtriranja lahko v URL-ju kombiniramo z uporabo operatorja **&**.
```
GET /razmerja?q=tilen&order=naziv DESC&status=aktiven
GET /razmerja?status=zakljucen&order=ustvarjeno DESC
GET /razmerja?order=posodobljeno ASC,naziv DESC&q=dan
GET /razmerja?where=vrednost:gte:1223&q=telefon
GET /razmerja?where=naziv:in:[naziv1,naziv2]&order=status
```
#### Delne predstavitve virov
Lahko smo v situaciji, ko za prikaz le splošnih informacij o nekem viru ne potrebujemo celotnega objekta, saj bi to predstavljalo neko dodatno obremenitev, ki je morda nočemo. V ta namen lahko s pomočjo poizvedbe "**fields**" pridobimo le določena polja entitete, po kateri poizvedujemo.
```
GET https://api.ts.si/razmerja/1223?fields=naziv,aktiven,ustvarjeno
vrne:
{
  "id": 1223,
  "naziv": "Razmerje2",
  "aktiven": true,
  "ustvarjeno": "2015-02-10T13:00:33.000Z"
}
```
### Formati sporočil
V splošnem se uporabljajo uveljavleni **MIME** formati definicije vsebine sporočil
- application/json
- application/xml
- application/pdf
- image/jpeg
- image/gif
- video/mp4
- text/html
- ...

Format zapisa podatkov v zahtevi/odgovoru podamo v zaglavju HTTP in sicer z headerjem **Content-Type**
```
Content-Type: application/json
```
Podamo lahko tudi header **Accept**, ki sporoči pošiljatelju/prejemniku, katere MIME formate sprejemamo/zahtevamo v zahtevku.
```
Accept: application/json,applicatio/xml,image/png,...
```
Zgodi se lahko tudi, da je **format podan** kar **v URL naslovu**, v tem primeru ima tip podan v naslovu **večjo** prioriteto kot format podan v zagalvju
> my.api.url/v1/entity/blabla.json <br> my.api.url/v1/entity/blabla.csv

#### JSON ( JavaScript Object Notation ) - applicaton/json
Najpogosteje uporabljen MIME format v REST storitvah, enostaven za račlenjevanje, dobro podprt v vseh okoljih, lahko berljiv in učinkovit z poravo prostora.
```json
{
  "id": 3,
  "naziv": "Razmerje3",
  "oznaka": "S3",
  "sektor": {
    "id": 19,
    "naziv": "Razviti trgi"
  },
  "tveganje": 2,
  "zadnjaVrednost": {
    "datum": "2013-10-11T00:00:00.000",
    "id": 0,
    "valuta": "EUR",
    "vrednost": 54.24,
  }
}
```
#### XML (Extensible Markup Language) - application/xml
Najpogosteje uporabljen v trenutnih integracijskih rešitvah, dobro integriran v obstoječih integracijskih okoljih ter nudi podporo validaciji sporočila glede na shemo.
```xml
<razmerje xmlns="http://api.ts.si/v1/razmerja">
  <id>3</id>
  <naziv>Razmerje3</naziv>
  <oznaka>S3</oznaka>
  <sektor>
  <id>19</id>
  <naziv>Razviti trgi</naziv>
  </sektor>
  <tveganje>2</tveganje>
  <zadnjaVrednost>
    <datum>2013-10-11T00:00:00.000</datum>
    <id>0</id>
    <valuta>EUR</valuta>
    <vrednost>54.24</vrednost>
  </zadnjaVrednost>
</razmerje>
```
#### Zapis imen polj
Ločimo dva načina zapisa imen polj, in sicer
- snake_case
  ```
  {
    ...
    "zadnja_vrednost": 54.24,
    ...
  }
  ```
- camelCase
  ```
  {
    ...
    "zadnjaVrednost": 54.24,
    ...
  }
  ```
 
