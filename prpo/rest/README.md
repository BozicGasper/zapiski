# REST storitve

**Re**presentational **S**tate **T**ransfer predstavlja *arhitekturni stil* ter temelji na *abstrakciji* arhitekturnih elemenotv znotraj distribuiranih hipermedijskih sistemov.
Predstavlja način komunikacije med odjemalcem in strežnikom. Ponujaja **pomenljive**,**preproste** in **naslovljive** vire in je **brez stanja**.

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

V realnosti si *odjemalec* in *strežnik* izmenjujeta **reprezentacijo virov**, kjer je **oblika** same reprezentacije pomembna. Vir je v postopku izmenjave **enolično naslovljen**, njegova reprezentacija pa odjemalcu zadošča za potrebno **manipulacijo** le tega. Reprezentacije sporočil so **samoopisne**, kjer sporočila vsebujejo vsa potrebna **navodila za procesiranje**.

## Oblikovanje RESTFUL storitev
RESTful spletni API (RESTful spletna storitev) temelji na osvoni REST arhitekture in **HTTP** protokola. Podatki so zapisani v *hipertekst* obliki in se prenašajo preko internetnega medija. 

### Viri
Oblikovanje virov je pomembno! Viri morajo biti oblikovani **enostavno** in **učinkovito**!

Če je vir zbirke določen kot ```/razmerja```, potem naj bo vir instance iz te zbirke določen kot ```/razmerja/{instancaId}```.

Za določanje akcij na virih se uporabljajo standardne HTTP metode:
- GET - *pomeni branje*
  > ```GET /razmerja``` vrne seznam razmerij
  > ```GET /razmerja/{id}``` vrne razmerje, s podanim id-jem
- POST - *pomeni ustvarjanje novega vira*
  > ```POST /razmerja``` z dodanim telesom zahteve ustvari novo razmerje
- PUT - *pomeni posodabljanje celotnega obstoječega vira*
  > ```PUT /razmerja/{id}``` z dodanim telesom zahteve posodobi razmerje s podanim id-jem
- DELETE - *pomeni brisanje/deaktiviranje*
  > ```DELETE /razmerja/{id}``` izbriše razmerje s podanim id-jem
- HEAD - *pomeni branje HTTP zaglavja brez vsebine*
- PATCH - *pomeni delno posodablanje obsotječega vira*

Akcije, ki ne spadajo v standardne CRUD operacije lahko vključimo na več različnih načinov:
- **restrukturiranje** akcije, da jo predstavimo kot polje na viru
- obravnavamo akcijo kot nek **pod-vir**
  > ```POST /razmerja/242/skleni``` ali npr. ```POST /razmerja/242/prekini```
- ustvarimo nov **navidezni vir**
  > ```POST /iskanje```

#### Odgovori na zahteve
Na uspešno ```GET``` zahtevo se vrne odgovor s statusom **200** in telesom, ki vsebuje podatke.

Na uspešno ```POST``` zahtevo se vrne odgovor s statusom **201** (in poljubnim telesom, ki vsebuje podatke).

Na uspešno ```PUT``` zahtevo se vrne odgovor s statusom **200** (in poljubnim telesom, ki vsebuje podatke).

Na uspešno ```DELETE``` zahtevo se vrne odgovor s statusom **204(No Content)** brez telesa.

### Verzioniranje
- Verzijo lahko izražamo preko poti API-ja ("/v1")
  > ```my.api.domain/v1/razmerja```
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
Zgodi se lahko tudi, da je **format podan** kar **v URL naslovu**, v tem primeru ima tip podan v naslovu **večjo** **prioriteto** kot format podan v zagalvju
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
#### Ostranjevanje zbirk *(paginacija)*
Način podajanja parametrov v URL
```
GET https://api.ts.si/razmerja?offset=50&limit=25
```
V namen sledenja offseta se v glavi vrnjene zahteve doda polje **X-Total-Count**.
Lahko pa se uporabi naprimer tudi metoda count na samem viru: **GET /razmerja/count**.
#### Povezovanje virov
Vsak dostopen vir ima unikaten URL, kar pomeni, da ga lahko nastavimo kot identifikator pri povezovanju virov
```json
GET https://api.ts.si/razmerja/1223
{
  "id": 1223,
  "naziv": "Razmerje2",
  "oznaka": "S2",
  "sektor": {
    "id": 123123
    "link": "https://api.skladiapp.si/sektorji/123123"
  },
  "tveganje": 2
}
```
v primerju verzioniranja je to slaba integracija, med drugim odjemalec potrebuje tudi več klicov na strežnik, da dobi vse podatke o določenem viru.

API lahko omogoči razširjanje določenih delov povezanih virov. To lahko dosežemo z naštevanjem parametrov vira v URL parametru "**expand**"
```json
GET https://api.ts.si/razmerja/1223?expand=sektor
{
  "id": 1223,
  "naziv": "Razmerje2",
  "oznaka": "S2",
  "sektor": {
    "id": 123123
    "link": "https://api.ts.si/sektorji/123123",
    "naziv": "Razviti trgi",
    "tveganje": 2,
    ...
  },
  "tveganje": 4
}
```
### Omejevanje dostopa
Dostop želimo v določenih primerih omejiti, da preprečimo možne zlorabe sistema. To lahko storimo z omejevanjem posameznih odjemalcev, omejitvijo števila zahtevkov na časovno enoto...

V primeru prekoračitve postavljene omejitve se odjemalcu vrne HTTP status **429** - "Too Many Requests"

Skladno z zgornjim se odjemalca sproti ob vsakem zahtevku obvesti o omejitvah s pomočjo polj v glavi odgovora:
- **X-Rate-Limit-Limit** - št. dovoljenih zahtevkov v trenutni časovni enoti
- **X-Rate-Limit-Remaining** - št. preostalih zahtevkov v trenutni časovni enoti
- **X-Rate-Limit-Reset** - št. preostalih sekund v trenutni častovni enoti
### Napake
Dobra praksa je, da so informacije o napakah čim bolj **informativne**. Moramo podati dovolj informacij, da lahko odjemalec pravilno odreagira, hkrati pa moremo paziti, da ne podamo *preveč* informacij, ki bi lahko morebitnemu napadalcu posredovale občutljive informacije.
### Varnost
REST je **stateless**, kar pomei, da se **izogiba sejam**, če je le to mogoče.

Avtentikacija je priporočljiva preko obstoječih protokolov:
- Vedno SSL
- HTTP Basic avtentikacija
- OAuth2
- Zunanji ali notranji ponudnik

> V posebnih primerih lahko manufakturiramo tudi lastno avtentikacijsko shemo
### HTTP kode
seznam "uporabnih" HTTP kod za uspešno procesiranje:
- **200 OK** - Odgovor na uspešno akcijo
- **201 Created** - Odgovor na uspešno akcijo, ki rezultira v kreiranje vira.
- **204 No Content** - Odgovor na uspešno akcijo brez vsebine odgovora
- **304 Not Modified** - Informacija odjemalcu, da drži aktualno medpomnjeno instanco

seznam "uporabnih" HTTP kod za napake:
- **400 Bad Request** - Zahteva je neustrezno oblikovana, vsebine ni mogoče razčleniti, podatki manjkajo...
- **401 Unauthorized** - Avtentikacija uporabnika ni uspešna
- **403 Forbidden** - Avtorizacija uporabnikda do vira ni uspešna
- **404 Not Found** - Zahteva po viru, ki ne obstaja
- **405 Method Not Allowed** - zahteva po HTTP metodi, ki uprabniku ni dovoljena
- **410 Gone** - Vir na URL ne obstaja več *(uporabno za verzioniranje)*
- **415 Unsupported Media Type** - Tip vsebine zahtee ni veljaven
- **422 Unprocessable Entity** - Validacijska napaka
- **429 Too Many Requests** - Zahteva zavrnjena zaradi preobrementive strežnika
- **500 Internal Server Error** - Generalna napaka na strani strežnika

### HTTP medpomnenje
Uporabno, saj lahko odjemalcu po poizvedbi po viru, ki se ni spremenil, sporočimo, da je vir, do katerega želi dostopati, še vedno enak kot je bil prej, torej ni potrebno prenašanje nikakršnih koli podatkov. Če je vir po katerem sprašuje odjemalec od zadnje zahteve ostal nespremenjen, bo strežnik vrnil odgovor **304 Not Modified**.

### Kompresiranje vsebine
Podatke, ki se prenašajo preko HTTP zahtev lahko kompresiramo z različnimi algoritmi, ki jih morata za uspešno kompresijo in dekompresijo podpirati odjemalec in strežnik. Ta funckionalnost je opcijska, a zelo priročna, saj z njo pridobimo na hitrosti prenosa.

V glavi lahko definiramo kompresijski algoritem, ki ga želimo uporabljati.
```
Content-Encoding: gzip
```
Definiramo lahko tudi sprejemljive tipe, s katerimi bomo dekompresirali.
```
Accept-Encoding: gzip, deflate
```
## Storitve REST v Javi

REST storitve v **Javi** Implementiramo s pomočjo JAX-RS (Java API for RESTful Web Services) s trenutnimi implementacijami:
- Jersey
- RESTeasy

JAX-RS API uporablja **anotacije** za dekodiranje programske kode

### REST aplikacija

Da aplikacijo v Javi onzačimo kot REST, jo moramo definirati z **aplikacijskim razredom**. Anotiramo ga z **@ApplicationPath**, ki definira **relativno pot namestitve** rest aplikacije
```java
@ApplicationPath("/v1")
public class RestStoritve extends javax.ws.rs.core.Application
{
  @Override
  public Set<Class<?>> getClasses() {
    Set<Class<?>> resources = new
    java.util.HashSet<Class<?>>();
    resources.add(RazmerjaStoritev.class);
    return resources;
  }
}
```
> pot primera: **api.skladi.si/v1**
### Pot do virov
Pot do virov umestimo z anotacijo **@Path**
```java
@Path("razmerja")
public class RazmerjaStoritev{
  public Response vrniRazmerja(...){...}
  
  @Path("{id}")
  public Response vrniRazmerje(...){...}

  @Path("{id}/vrednosti")
  public Response vrniVrednosti(...){...}

  @Path("{id}/vrednosti/{idVrednosti}")
  public Response vrniVrednost(...){...}
}
```
> primer poti: **api.ts.si/v1/razmerja/1212/vrednosti/123441**

### Navezovanje na HTTP metode
HTTP metode označujemo s sledečimi anotacijami:
- **@GET** 
- **@POST**
- **@PUT**
- **@DELETE**
- **@HEAD**
```java
  @GET
  @Path("{id}")
  public Response vrniRazmerje(...) {... }

  @POST
  public Response dodajRazmerje(...) {... }

  @PUT
  @Path("{id}")
  public Response posodobiRazmerje(...) {... }

  @DELETE
  @Path("{id}")
  public Response odstraniRazmerje (...) {... }
```
Metode označene z anotacijama **@HEAD** in **@OPTIONS** vračata informacije o viru, a brez vsebine vira.
### Parametri poti
Parameter poti anotiramo z anotacijo **@PathParam**
```java
@Path("{id}/vrednosti/{idVrednosti: \d{4}-\d{2}-\d{2}}")
public Response vrniVrednost(
  @PathParam("id") String skladId,
  @PathParam("idVrednosti") String vrednostId
) {... }
```
Obstajajo tudi druge anotacije za *vsatvljanje vrednosti* **parametrov zahteve**
```java
@QueryParam("filter") //../skladi?filter=naziv
@HeaderParam("header-name") //za vrednost HTTP zaglavja
@MatrixParam("name") //../skladi;filter=aktivni/vrednosti;items=6
@CookieParam("cookie-name") //piskotki 
@FormParam("form-field-name") //za vrednost spletnih obrazcev
```
Za dodajanje privzete vrednosti lahko pred anotacijo parametrov dodamo se  ```@DefaultValue("*") @QueryParam("filter") String filter```.
#### Parametri poti virov
Parametre poti moramo nekako prebrati. lahko jih preslikamo v :
- Primitivne javanske tipe
- Tipe s konstruktorjem, ki sprejeme samo 1 ```String``` argument
- Tipe z registriranim konverterjem nadtipa **ParamConverter**
- Tipe s statično metodo ```valueOf()``` **ali** ```fromString()```, ki sprejme samo 1 ```String``` argument
```java
public Response vrniRazmerja(
  @QueryParam("filter") FilterParam filter
) {... }
```
Z anotacijo **@Encoded** na metodi ali razredu **onemogočimo** preslikavo parametrov.
### Atributi (argumenti) metod
Atribut metode vira, ki ne uporablja **nobene anotacije parametrov**, je **entitetni parameter** (pridobimo ga iz **telesa** zahteve).
```java
public Response zapisiRazmerje(
  Razmerje razmerje
) 
{
   return razmerje; 
}
```
Te metode so lahko tipa:
- ```void``` - odgovor vrne **204 No Content**
- ```Response``` - odgovor vrne entiteto in poljubni status
- ```GenericEntity``` - zavije entiteto v atribut **entitity**
- ```PoljubniRazred``` - vrne **vsebino** entitete

Metode vračajo **HTTP 200** kadar je vsebina entitete definirana, in **HTTP 204**, kadar ni.

### Formati sporočil
Za to, da povemo kaksen format sporočila prejemamo po metodi, uporablajmo anotaciji **@Consumes** in **@Produces** nad metodo/razredom
```java
@Path("skladi")
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Produces({ "application/json"})
public class RazmerjaStoritev {
    @GET
    @Path("{id}")
    public Response vrniRazmerje(...) {... }
    
    @GET
    @Path("{id}")
    @Produces({ "application/xml"})
    public Response vrniRazmerje (...) {... }
    
    @POST
    @Consumes({"application/si.ts.v1.razmerje+json"})
    public void dodajRazmerje(...) {... }
}
```
### Ponudniki formatov entitet
Anotacija **@Provider** določa programsko kodo, ki služi kot **razširitev** aplikacije
- ```MessageBodyReader``` za razčlenjevanje ```InputStreama``` v ```Entiteto```
- ```MessageBodyWriter``` za preslikovanje ```Entitete``` v ```OutputStream```
- ```ContextResolver<T>``` za zagotavljanje **konteksta** drugim virom in ponudnikom
- ```ExceptionMapper<T>``` za preslikavo proženih izjem v ```Response``` objekt, ki se vrne odjemalcu

Lahko bi naprimer uporabili ponudnik konteksta ```ContextResolver<ObjectMapper>``` in bi z njim nastavili format datuma JSON serializacije
```java
@Provider
public class JacksonProvider implements ContextResolver<ObjectMapper> {

  final ObjectMapper defaultObjectMapper;

  public JacksonProvider () {
    defaultObjectMapper = new ObjectMapper();
  }

  @Override
  public ObjectMapper getContext(Class<?> type) {
    SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd HH:mm a z");
    defaultObjectMapper.setDateFormat(df);
    return defaultObjectMapper;
  }
}
```
### Izjeme
Prožiti moramo:
- izjemo ```WebApplcationException```, ki nosi objekt ```Response```
- izjemo, ki ima definiran ponudnika ```ExceptionMapper```
```java
@Provider
public class SkladiIzjema implements ExceptionMapper<SkladiIzjema> {
  @Override
  public Response toResponse(SkladiIzjema izjema) {
  return Response.status(
    Response.Status.BAD_REQUEST).build();
  }
}
```
### Filtri in prestrezniki
#### Vmesniki filtrov (metoda ```filter```):
- ```ClientRequestFilter```
- ```ClientResponseFilter```
- ```ContainerRequestFilter```
- ```ContainerResponseFilter```
> filtre najpogosteje uporabljamo za **manipulacijo** **glave** sporočil

filtre lahko registriramo z anotacijo **@NameBinding**
```java
@NameBinding
public @interface PoljubenFilter {}
```
Nato jo lahko uporabimo na poljubnih metodah
```java
@PoljubenFilter
public class MojFilter implementts containerRequestFilter { ... }

@Path
public class MyResource {
  @GET
  @PoljubenFilter
  public String get() {...}˙
}
```
#### Vmesniki interceptorjev entitet:
- ```ReaderInterceptor``` (metoda ```aroundReadFrom```)
- ```WriterInterceptor``` (metoda ```aorundWriteTo```)

> Prestrezniki se uporabljajo za **manipuliranje** **teles** sporočil

```java
@Provider
public class GZIPEncoder implements WriterInterceptor {
  public void aroundWriteTo(WriterInterceptorContext ctx) throws IOException, WebApplicationException {
    GZIPOutputStream os = new
    GZIPOutputStream(ctx.getOutputStream());

    try {
      ctx.setOutputStream(os);
      return ctx.proceed();
    } finally {
      os.finish();
    }
  }
}
```

### Kontekst Storitve
z anotacijo **@Context** lahko vstavimo odvisnost v objekte tipov:
- ```UriInfo``` - informacije o komponentah zahteve (URI, ipd.)
- ```HttpHeaders``` - informacije o HTTP zaglavju zahteve
- ```SecurityContext``` - informacije o varnostnem kontekstu(poverilnica vloge, uporabljen način avtentikacije)
- ```Request``` - celotno zahtevo (če želimo ročno odločati o vrsti procesiranja)
- ```Providers``` - vsi registrirani ponudniki funkcionalnosti
- ```ResourceContext``` - Kontekst priprave vira
- ```Configuration``` - konfiguracija strežnika / odjemalca

### Asinhrono izvajanje
Sprošča niti, ki upravljajo s HTTP povezavami in povečuje efektivnost strežnika pri veliki količini povezav medtem ko djemalec časovnih razlik ne opazi.

Asihnrono izvajanje omogoča uprabo ```Promise``` vzorca in nudi podporo "*reactive*" stila programiranja.

### Integracija v Java EE
JAX-RS *lahko sodeluje z* 
- Enterprise Java Beans (EJB)
- Context and Dependency Injection (CDI) zrni
```java
/* EJB */
@Stateless
@Path("skladi")
public class SkladiStoritev{...}
```
```java
@RequestScoped
@path("skladi")
public class SkladiStoritev{...}
```

### Podatkovne preslikave
JAX-RS podpira preslikave:
- med XML in Java Objekti
- med JSON in Java Objekti

### API za gradnjo odjemalcev
Za izvajanje klicev se uporablja ```ClientBuilder```, z ```WebTarget``` pa definiramo končno točko vira, kamor vključimo spremenljivke poti

Klient se lahko izvaja tudi asinhrono s pomočjo objekta ```ComparableFuture```, ki implementira ```promise``` vzorec.

Alternativno se lahko uporablja tudi ```callback``` vzorec.

Podobno kot na strežniku, lahko na klientu registriramo **filter** in **interceptorje**

## Procesiranje JSON  FORMATA V JAVI Z JSON-P

JSON strukturo lahko predstavlja:
- Kolekcija ```"ključ":"vrednost"``` parov
- Urejen seznam vrednosti
```json
{
 "ime": "Sara",
 "priimek": "Jakopič",
 "naslov": {
  "ulica": "Pod lipami 01",
  "mesto": "Ljubljana",
  "postnaStevilka": 1000,
  "drzava": "Slovenija"
 },
 "telefonskeStevilke": [
  "031 344 112",
  "031 133 312"
 ]
}
```
### Streaming API

Predstavlja način **generiranja** in **parsanja** JSON-a, pri katerem se za dostop do podatkov uporabljajo **tokovi**.

Beremo oz. pišemo lahko vedno samo "naprej".

2 glavni abstrakciji:
- ```JsonParser``` - omogoča branje **toka** JSON datoteke
  > za ustvarjanje objekta uporabimo ```JsonParserFactory```
- ```JsonGenerator``` - omogoča zapis JSON-a v **tok**
  > za ustvarjanje objekta uporabimo ```JsonGeneratorFactory```

#### Kako se dejansko bere JSON?
```json
[START_ARRAY
 {START_OBJECT
 "tip"KEY_NAME : "domaci"VALUE_STRING,
 "stevilka"KEY_NAME : "(01) 11 11 111"VALUE_STRING
 }END_OBJECT,
 {START_OBJECT
 "tip"KEY_NAME : "mobilni"VALUE_STRING,
 "stevilka"KEY_NAME : "(02) 22 22 222"VALUE_STRING
 }END_OBJECT,
 {START_OBJECT
 "tip"KEY_NAME : "sluzbeni"VALUE_STRING,
 "stevilka"KEY_NAME : "(03) 33 33 333"VALUE_STRING
 }END_OBJECT
]END_ARRAY
```
#### Object Model API
Nam olajšuje branje in pisanje JSON-a. je enostaven in preporst za uporabo in temelji na 2 abstrakcijah:
- ```JsonObject``` - ponudi **Map** vmesnik za dostop do kolekcije ```"ključ":"vrednost"``` parov
  > objekt zgradimo z ```JsonObjectBuilder```
- ```JsonArray``` - ponudi **List** vmesnik za dostop do seznama vrednosti
  > objekt zgradimo z ```JsonArrayBuilder```

Objekt lahko **zapišemo** va datoteki s pomočjo razreda ```JsonWriter```, podobno pa ga lahko **preberemo** iz datoteke s pomočjo razreda ```JsonReader```


