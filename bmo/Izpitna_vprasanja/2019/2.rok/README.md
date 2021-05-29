# Pisni izpit 5.7.2019 (2.rok)
### 1. Kaj vpliva na jakost sprejetega signala?
Oddaljenost med sprejemnikom in oddajnikom, moč oddajnika, morebitne fizične ovire na poti, ojačanje oddajne in sprejemne antene, vreme, razmerje med signalom in šumom.

### 2. Kaj pomeni enota dBm? 
dBm pomeni decibels-milliwatt - decibel-miliwatt (ni decibel na miliwatt). Decibeli v relaciji na 1 mW. Uporablja se za merjenje moči signala. P(w) = 10 * (P(dbm)/10) 
P(dbm) = 10 * log10 ( P(W)/W) * 30’

### 3. Zakaj je potrebna priključitev v omrežje(Association) tudi v primeru, ko ne uporabljamo gesla (odprto omrežje)?
Z asociacijo se nekako “prijavimo” v omrežje. Dostopni točki in ostalim napravam sporočimo da smo del omrežja in tako lahko dejansko komuniciramo v omrežju. 

### 4. Kako je izveden dostop do skupnega medija pri 802.11ax?
Uporablja OFDMA tehnologijo (Orthogonal Frequency Division Multiple Access). Poleg časovnega multipleksa se uvede še frekvenčni multipleks. Istočasna souporaba skupnega frekvenčnega pasu se lahko izvaja v obe smeri. Frekvenčno časovni prostor je razdeljen na predalčke (RU – resource unit). Uporabljajo se frekvenčni kanali, ki so med seboj ortogonalni. Uporablja naključni dostop, Random trigger frame, ker je CSMA/CA neučinkovit pri velikih hitrostih.

### 5. Kakšne novosti uvaja WPA3?
Večjo varnost (za avtentikacijo uporablja SAE (Simultaneous Authentication of Equals), Protected Management Frames se vedno uporablja, možnost uporabe 192-bitnega ključa)
šifriranje prometa pri odprtem dostopu
enostavno priključevanje IoT naprav

### 6. Kakšni sta funkciji HLR in VLR v omrežju GSM?
Home Location Register je del MSC (Mobile Switching Center) vsebuje vse informacije (lokacija, identiteta naročnika,... ) o (svojih) uporabnikih. V VLR (tudi del MSC) se pa vnesejo podatki tistih uporabnikov ki gostujejo v tem MSC, zato da se zmanjša število poizvedb v HLR gostujočih uporabnikov.

### 7. Kaj imata skupnega GSM in UMTS 99 omrežje?
Razlikujeta se predvsem v radijskem delu. UMTS 99 ma praktično čisto nov radijski del(imenuje se UTRAN), s tem uvede dva nova modula : Node-B in RNC (radio network controller). Jedro je pa skoraj enako, razen manjših posodobitev. 

### 8. Zakaj so uvedli standard VoLTE
VoLTE pomeni Voice Over LTE. Omogoča prenos zvoka preko LTE. Uvedel se je kot zamenjava za prejšne načine prenašanja zvoka s komutirano povezavo (GSM, UMTS). VoLTE je mnogo hitrejši od prejšnjih načinov prenašanja  in omogoča boljšo izrabljenost medija, saj uporablja paketen prenos. VoLTE je ubistvu za  mobilna omrežja optimiziran protokol VoIP. 

### 9. Kaj so omrežne rezine v peti generaciji mobilne telefonije?
To so logična omrežja (virtualizacija), ki razdelijo fizično omrežje  na rezine, ki so namenjene za en način uporabe (npr. rezina za IoT, za mobilne komunikacijo, za potrebe zdravstva, ...). Te rezine je mogoče upravljati glede na potrebe, lahko se jih izolira, rezine si lahko med sabo delijo vire,...

### 10. Kako ponudniki internetnih storitev preko satelitov v geostacionarni orbiti rešujejo problem uporabe istih frekvenc?
Sateliti ne oddajajo samo en signal (tako kot satelit za prenos TV kanalov), vendar več snopov, ki uporabljajo različne frekvence na tak način kot celično omrežje pri GSM. Enake frekvence so prostorsko ločene, kar omogoča uporabo istih frekvenc. 
