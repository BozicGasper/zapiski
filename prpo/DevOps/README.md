# DevOps: razvoj in uporaba

**DevOps** se uporablja pri razvoju programske opreme, da *zmanjšujemo tveganja* kot npr:
- Pozno odkrivanje napak (*drago*)
- Pomanjkljivosti povezanosti ekip
- Slab kodni nabor
- Pomanjkanje preglednosti projektov
- Pomanjkanje verzij, pripravljenih za namestitev

Bolj natančno je DevOps **metodologija procesa razvoja programske opreme ki podarja soodivnost razvoja programske opreme** in se odraža v principih *iterativnosti*, *inkrementalnosti*, *zveznosti*, *avtomatizaciji*, *samopostrežnosti*, *sodelovanju* in *celovitosti*.

## Prakse DevOps
- **Samopostrežna konfiguracija** (*Self-service configuration*)
- **Avtomatska preskrba** (*Automated provisioning*)
- **Zvezna gradnja** (*Continuous build*)
- **Zvezna integracija** (*Continuous integration*)
- **Zvezna dobava** (*Continuous delivery*)
- **Avtomatsko upravljanje izdaj** (*Automated release management*)
- **Inkrementalno testiranje** (*Incremental testing*)

## Aspekti DevOps
Metodologija **usklajuje** razvijalca z ostalimi sodelujočimi na projekti, skrbi za **zagotavljanje kakovosti produkta** in se ukvarja z **odkrivanjem napak** in *hitrimi*, *ustreznimi* in *učinkovitimi odzivi* na le-te.

Med drugim skrbi za **ustrezno komunikacijo** vseh vpletenih v razvoju projekta

## Sestavne komponente DevOps
1. **Verzioniranje** izvone kode (*Git, Svn, ...*)
2. Ponastavitev odorja s podporo za avtomazitirano gradnjo aplikacij (*Maven*)
3. **Orodja za avtomatizacijo gradnje** (*Jenkins*)
4. Skladišče za odlaganje paketov, knjižnic (*Nexus*)
5. **Orodja za samodejno testiranje** (*JUnit*)

## Kategorije ovrednostenja ciljev DevOps
Pomembno je da se v naprej zavedamo, koliko resursov in časa bomo porabili za razvoj projekta. V ta namen se DevOps ukvarja z ovrednotenjem 
- časa in napora, ki bosta potrebna za **vzpostavitev nove aplikacije**,
- časa, potrebnega za **ponovno namestitev aplikacije** in
- časa, potrebnega za **prestavitev aplikacije** v naslednjo fazo.

Ovrednotiti je potrebno tudi optimizacije, kot so
- **dinamično skaliranje infrastrukture** na primerno velikost in
- **ponovna uporaba** obstoječih sotrite namesto ponovnega razvoja.

Smiselno je tudi oceniti
- čas in napor, ki bosta potrebna za **integracijo s poslovnimi storitvami**,
- čas in napor, ki bosta potrebna za **vpeljavo pravic uporabnikom** ter
- stroške izvajanja aplikacije, glede na uporabnika ali transakcijo.

# Zvezna integracija (*Continous Integration - CI*)
Predstavlja dobro prasko za *zmanjševanje tveganj pri razvoju programske opreme*, kjer je glvni cilj **ČIM HITREJŠTE PRIDOBIVANJE POVRATNIH INFORMACIJ**

<aimg src="https://www.mendix.com/evaluation-guide/app-lifecycle/attachments/devops-cycle.png" style="margin:1rem;border-radius:0.5rem;">

## Pristop
Namen je doseči **popolno avtomatizacijo build-ov**, kjer je **avtomatizirano** tudi **testiranje**. 

Brezpogojna je **pogosta objava sprememb v repozitorij izvorne kode (*git*)**, kjer se ob objavi sproži avtomatiziran build s testiranjem integracijo.

> **Build != compile**! Z *build-anjem* se najprej projekt **prevede** za vse ciljne platforme, nato se **izvedejo testi** nad novim buildom, sledi **testiranje integracij** in **pregled kode** - zagotoviti je potrebno *zdravo* kodo, kjer identifikacija problemov sili v najboljše prakse. Naslednji korak je **avtomatizirana namestitev** in na koncu sledi **priprava dokumentacije**

# Zvezna dostava (*Continous delivery*)
Tipičen cikel zvezne dostave zajema
1. Definicijo
2. Razvoj
3. Grandjo (*build*)
4. Testiranje
5. Dostavo (*namestitev*)

<aimg src="ci.png" width="50%" style="margin:1rem;border-radius:0.5rem">

## Načela zvezne dostave
- **ponovljiv in zanesljiv proces izdaje in namestitev**
- **avtomatizacijo celotnega postopka**
- težavne faze je priporočljivo izvajati bolj pogosto
- **vsa vsebina** naj bo shranjena **v repozitoriju izvorne kode**
- preverjanje kvalitete med izvajanjem procesa
- **vpeljevanje stalnega posodabljana okolja**

## Uporabljene prakse pri zvezni dostavi
- priprava izvajalne datoteke naj bo enkratna za vsa okolja
- uporaba enake procedure za namestitev v vsa okolja
- izvajanje "smoke" testa ob vsaki namestitvi
- v primeru kakršnekoli napake takojšnja prekinitev postopka namestitve
- **naročniku naj bo vedno nameščena delujoča izdaja aplikacije**

# Gradniki okolja DevOps
## Repozitorij izvorne kode
Uporabljamo sisteme za upravljanje z izvorno kodo kot so *Git* ali *Svn*, ki so namenjeni upravljanju z **verzijemi** aplikacije. S tem lahko zagotovimo nek **Distribuiran**  ali **Centraliziran** model.
<aimg src="versionControll.png" style="margin:1rem;border-radius:0.5rem" width="75%">

## Repozitorij programskih artefaktov
Se uporabljajo za hranjenje in strežbo paketov programske kode, knjižnjic, dokumentacije ipd. Poznamo javne in zasebne različice.

Omogočajo upravljanje z odvisnostmi in verzijami
> Najpogosteje uporabljeni so *Sonatype's Nexus*, *JFrog's Artifactory* in *Apache Archiva*

## Orodja za avtomatizacijo buildov
Skrbijo za prevajanje programske kode in prav tako upravljajo z odvisnostmi. 

Zadolženi so za **pakiranje programske kode**, **izvajanje testov**, **namestitev paketov** ter **pripravo dokumentacije**

> Najpogosteje uporabljeni so *Apache Maven*, *Apache Ant*, *Make*, *Pants*, *Gradle*, *SBT*

## Orodja za CI
CI orodja in build strežniki izvajajo pogosto dnevno **integracijo paketov programske kode** ter **skrbijo za avtomatizacijo builodv**. Med drugimi so zadolženi za **avtomatizirano testiranje enot in integracij** ter **avtomatizirano analizo kode**.
> Avtomatotimita**tomato**tiziranje

Zadolženi so tudi za **poročanje** o buildih, statusih, testih ter namestitvah.

## Orodja za avtomatizacijo CI cikla
Podpirajo **razširitve v oblikah vtičnikov** in **združevanje več CI strežnikov v gruče**.
> Najpogosteje uporabljena so *Hudson in Jenkins*, *Microsoft Team Foundation Server*, *Atlassioan Bamboo*, *TeamCity*, *Apache Continuum*, ...

## Orodja za upravljanje projektov in zahtevkov
Predstavljajo nabor orodij za **planiranje**, **organiziranje** in **izvajanje** projektov zraven pa tudi orodja za **sledenje zahtevkom in napakam (*Issue Tracker-ji*)**

Uporabljajo se med drugim tudi za **upravljanje z izdajami** in **integracijo dokumentacije**.

## Merjenje pokritosti (kakovosti) programske kode
To je enostavna ocenitev, kako dobro je programska koda **pokrita s testi**, kar spodbuja razvijalce k pisanju testov.

Izvajamo jo lahko z **namenskimi orodji (*Code Coverage Tools*)

različne metrike merjenja:
- pokritost po **metodah**
- pokritost po posameznih **vejah** izvajanja
- pokritost po **vrsticah**
- itd..

> dobra praksa: minimalna pokritost je 80%

## Orodja za testiranje
CI orodja za testiranje izvajajo testiranja enot in integracijsko testiranje ob **buildu komponent**, kjer se *integracijsko testiranje* izvaja v *integracijskem okolju*.

Testiranje zagotovi **konsistentnost delovanja** programskih komponent

## Orodja za pripravo in namestitev dokumentacije
Za dokumentiranje PO v Javi uporabimo **JavaDoc**.

Dokumentiranje komponent je odvisno do uporabe **build orodja**, kjer build strežnik avtomatizira **proces izgradnje paketov dokumentacije**, **namestitev v repozitorij** in **namestitev v dokumentirani sistem**.
> Najpogosteje uporabljena orodja so *Javadoc*, *Doxygen*, *XSDDoc*, ...

## Primer cikla CI
<aimg src="razvojEE.png" style="margin:1rem;border-radius:0.5rem" width="75%">

# Testiranje kode in avtomatizacija
Pomen celovitega testiranja programske kode je v **identifikacija napak v programski opremi**, ki jih odpravimo preden produkt ponudimio končnim uporabnikom..
## Zakaj testirati?
Testiramo zato da lahko odkrijemo še neodkrite napake v programski opremi, ki lahko povzročijo materialno škodo oz. celo ogrozijo človeška življenja (*autopilot*)
## Kdaj testirati?
Glavna poanta je da testiramo **čim več** in **čim prej**
### **Agilen pristop**
Pri agilnem pristopu je razvoj programske opreme **hiter**, kjer se kratek razvojni cikel hitro ponavlja.

Če zgodaj testiramo, lahko zgodaj odkrijemo napake in jih idpravimo
### **Test-Driven Development (TDD)**
Pogosto se ponavlja kratek razvojni cikel (*agilni pristop*), kjer se vključuje **test-first** koncept programiranja
<aimg src="testfirst.png" width="75%" style="margin:1rem;border-radius:0.5rem">

## Kako testirati?
testiramo lahko **ročno** (*razvijalec, testerji, naročniki, alpha-testerji...) ali pa **avtomatizirano** (*uporaba testnih ogrodij*).

## Oblike testiranja programske opreme

<aimg src="obliketestiranja.png" style="margin:1rem;border-radius:0.5rem" width="75%">

### Testiranje enot (*unit testing*)
V tej obliki se testirajo najmanjši samostojni deli projekta (*metode*), s čimer lahko učinkovito testiramo **poslovno logiko**

Poznamo način **"White Box"** testiranje, kjer gre za dostop do metod in nadzor nad njihovimi vhodi in izhodi, hrati pa nadzorujemo obnašanje sekundarnih objektov.

### Integracijso testiranje (*integration testing*)
Način testiranja povezovanja posameznih enot v delovne tokove.

> idealni primer: integracijske teste definiramo pred unit testi.

### Funkcionalno testiranje (*functional testing*)
Pri tem testiranju se izvaja predvsem **testiranje primerov uporabe** in preverjanje kode na nivoju javnega programskega vmesnika (*API*).
> funckionalno testiranje se pogosto kombinira z integracijskimi testi

### Sistemsko testiranje (*system testing*)
Sistemsko testiranje zajema:
- testiranje aplikacije pod **obremenitvijo** - npr. obravnava velikega števila zahtev...
- profiliranje - analiza morebitnih ozkih grl, analiza pomnilnika....

### Testi sprejemljivosti (*user acceptance testing*)
Predstavlja zadnji korak testiranja in se običajno izvaja skupaj z **naročniki** oz. **uporabniki**.

Testi zagotavljajo, da aplikacija poleg ustreznega delovanja izpolnjuje vse cilje, ki so jih postavili naročniki (*stakeholderji*).

Vključujejo se **subjektivni kriteriji**, kot so *"ease of use"*, *"look & feel"*...

# Testiranje enot
*Funkcionalno in integracijsko testiranje* oz. *black box* pokrije 70% kode., medtem ko **testiranje enot** oz. *white box* omogoča večjo pokritost.

<aimg src="testenot.png" style="margin:1rem;border-radius:0.5rem" width="75%">

Z integracijskimi in funkcionalnimi testi lahko preverimo, ali v implementaciji obstajajo hrošči, z testi enot pa lahko ugotovimo, kje se ti hrošči skrivajo.

Smiselno je testiranje **najmanjših samostojnih** enot dela (*metode*), ki so običajno v izolaciji od drugih enot.

## prednosti testiranja enot
- omogoča višjo pokritost kode kot funkcionalno testiranje
- omogoča delo v skupini
- preprečuje regresijo in zmanjšuje potrebo po razhroščevanju
- daje pogum za refaktoriranje
- izboljšuje zasnovo implementacije
- služijo kot dokumentacija razvijalca

# Spremljanje težav - *Issue tracking*
**Upravljanje projektov** (*Project Management*) je uporaba *znanj*, *izkušenj*, *orodij* in *tehnik* s katerimi načrtujemo in spremljamo aktivnosti tako, da bi dosegli potrebe in pričakovanja strank, vključenih v projekt

Sledimo lahko različnim pristopom k upravljanju projektov 
> poznamo Klasični (slapovni) pristop, Agilni pristop, PRINCE2 pristop, ...

Upravljanje projekta si lahko bistveno poenostvaimo z uporabo ustrezne programske opreme, kjer različne programske rešitve zagotavljajo podporo različnim področjem upravljanja.

V zadnjem času so še posebej popularne **oblačne (*cloud*)** rešitve za podporo upravljanju projektov

## funckionalnosti sodobnih rešitev za upravljanje projektov
- Wiki strani
- Upravljanje opravil
- Upravljanje odprtih zadev (issue tracking)
- Analiza in upravljanje tveganj
- Izdelava prilagodljivih poročil
- Upravljanje z dokumenti
- Podpora interaktivnim Gantt diagramom
- Načrtovanje verzij
- Brskanje po izvorni kodi in primerjava med revizijami
- Upravljanje terminskih planov in avtomatizirano pošiljanje obvestil
- Upravljanje stroškov
- Sodelovanje med člani ekipe (obvestila o spremembah, alarmi)
- Integracija z MS Outlook, MS Project, itd.
- Izpostavljen API
- Spletni vmesnik
- itd.

## GitLab
To je odprtokodno orodje za upravljanje projektov skupaj z berzioniranjem izvorne kode (na voljo je tudi napredna "*enterprise*" rešitev).

GitLab omogoča učinkovito obvladovanje **zahtevkov (*issues*)**, kjer le-te tipično uporabljamo
- za prijavo hroščev (*defects*)
- za zbiranje predlogov za izboljšave (*enhancements*)
- za vodenje TODO liste (*tasks*)
