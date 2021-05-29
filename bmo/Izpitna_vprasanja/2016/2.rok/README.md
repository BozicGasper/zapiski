# Pisni izpit 4.7.2016 (2.rok)
### 1. Kako lahko izboljšamo kakovost radijske povezave?
Zmanjšamo razdaljo med sprejemnikom in oddajnikom, odstranimo fizične ovire med sprejemnikom in oddajnikom, povečamo moč oddajnika, poskrbimo da ni interference od drugih oddajnikov(zamenjamo frekvenco, kanal)

### 2. Pri radijski komunikaciji se poleg jakosti signala uporablja še parameter za kakovost signala (RSNI). Kaj nam ta parameter pomeni?
RSNI - Received signal to noise indicator: to nam pove razmerje med signalom in šumom. Meri se v dB

### 3. Kaj pomeni izraz »Contention window« in v kakšnih mejah se spreminja?
CW – (Contention Window) Okno iz katerega se naključno izbere število predalčkov, ki jih mora naprava počakati pred oddajo paketa. Spreminja se tako, da se vsakic ko ne prejmemo CTS za paket, okno pomnoži z 2, dokler ne pride do neke zgornje meje (CWmax, lahko recimo 1023). (Oziroma ko ne dobimo ACK za paket)

### 4. Kateri so upravljalski paketi v omrežju 802.11? Na kratko opiši njihovo funkcijo?
- beacon - periodični paketi, ki služijo predvsem za sinhronizacijo
- association - paketi za priključevanje v omrežje
- authentication -  paketi za preverjanje pristnosti
- probe request/response - iskanje sosedov

### 5. Kaj morajo upoštevati novejši standardi (npr. 802.11n), da lahko sobivajo s starejšimi?
Naprednejši standard se more podrejati starejšim, to pomeni da če je v omrežju naprava, ki ne podpira novejšega standarda, se morajo vse kontrolne informacije prenašati tako, da jih vse naprave lahko sprejmejo. Najbolj pomembni so paketi NAV, ki vsebujejo podatke o zasedenosti omrežja

### 6. Imamo sistem za preverjanje pristnosti, ki temelji na strežniku Radius (npr. Eduroam). Ali lahko z vdorom v vstopno točko pridobimo gesla? Odgovor utemelji!
Pri uporabi RADIUSA se glavni ključ nahaja na STA(station - odjemalec) in na AS(avtentikacijskem strežniku). Na dostopni točki ključa ni, niti se glavni ključ ne prenaša čez njo.

### 7. Kakšna je funkcija VLR registra pri mobilnih omrežjih?
VLR - Visitor Location Register. V njem se začasno shranjujejo podatki, za potrebe gostiteljskega MSC(Mobile switching center). Poglavitna naloga je zmanjšati število poizvedb v HLR(Home location register).

### 8. Zakaj se podatkovni promet pri mobilnih napravah GPRS vedno usmerja v domači prehod (GGSN – Gateway GPRS support node)?
zato, da ima mobilna naprava ne glede na fizično lokacijo IP številko svojega ponudnika. To poenostavi usmerjanje podatkovnega prometa, dodeljevanje IP-jev in premikanje mobilne postaje med baznimi postajami (roaming).

### 9. Kako je izvedeno odpravljanje napak pri skupinskem prenosu vsebin (MBMS Multimedia broadcast multicast service)?
Na več načinov:
- Macro-diversity: sprejemanje signala z več baznih postaj hkrati
- Time-diversity: kombiniranje različno zakasnjenih podatkov (shranjevanje v čakalno vrsto)
- Uporaba boljšega kodiranja z redundantnimi podatki

### 10. Zakaj se pri standardu LTE uporablja več anten?
- sprejem signala, kjer se poveča sprejeta energija in tako zmanjša razmerje signal/šum
- oblikovanje žarka
- delovanje v načinu MIMO, kjer se poveča hitrost prenosa podatkov.
