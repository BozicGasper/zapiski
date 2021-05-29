# Pisni izpit 6.7.2012 (2.rok)
### 1. Kaj pomeni kratica MIMO in kaj omogoča?
MIMO – multiple input multiple output=> Omogoča več sprejemnih/oddajnih anten ter tako poveča kapaciteto in zanesljivost (manjši vpliv fadinga) prenosnega kanala, zmanjša občutljivost in interference ter omogoča oblikovanje žarka (beamforming). S tem se poveča tudi hitrost prenosa. (802.11ac ima usmerjene antene; več anten – večja hitrost => 802.11n ima 2 anteni –> 300 MBps)

### 2. Zakaj sta pri radijski komunikaciji protokolu CSMA dodana še RTS in CTS?
RTS(request to send) se pošlje po tem ko je bil kanal prost za več kot čas DIFS (distributed inter-frame space), prejemnik pa se na ta ukaz odzove z ukazom CTS(clear to send) potem ko je bil kanal prost za čas SIFS (short inter-frame space). Za tem se začne prenos podatkov.
RTS/CTS se uporabi za rezervacijo kanala za prenos podatkov, zato, da se koalizija lahko pojavi samo pri kontrolnih paketih/sporočilih.

### 3. Zakaj se pri 802.11 protokolu uporablja vektor NAV (Network Allocation Vector)?
Vektor NAV (network allocation vector) se uporablja za rezervacijo medija, da se izgonemo trkom. NAV vsebuje informacijo o zasedenosti omrežja – zato je predvsem pomembno sprejemati ta NAV paketek. Uporablja se skupaj v navezi z RTS in CTS.

### 4. Kako je izvedeno sobivanje različnih različic protokola 802.11 (b/g/n)?
Novejši/napredni standard se mora podrejati starejšim. Če je v omrežju naprava, ki ne podpira novejših standardov se morajo vse kontrolne informacije (beacon, RTS, CTS, ACK, ..) prenašati tako, da jih vse naprave lahko sprejemajo. Pomembno je predvsem prejemanje paketov, ki vsebujejo podatek o zasedenosti omrežja (NAV). Zaželeno je, da je prenosa z nizkimi hitrostmi čim manj, kar pomeni, da naprave med prenosom spreminjajo hitrost in način modulacije. Hitrost 802.11g po upoštevanj RTS in CTS paketov znaša: 26,9 Mbps (deklerirana: 54Mbps).

### 5. Kako je rešeno pošiljanje skupnih paketov (multicast, broadcast) v protokolu WPA?
Izmenjava skupinskega ključa omogoča da dostopna točka distribuira skupni/grupni ključ za multicast drugih naprav.

### 6. Kaj je piconet (BlueTooth protokol)?
Piconet je vrsta omrežja, ki ga tvori Master ter eden ali več Slave naprav (do 7 naprav). Vsako Piconet omrežje ima drugačen hopping kanal, na katerega se uporabniki sinhronizirajo, hopping pattern pa definira Master. Vsako omrežje Piconet ima maksimalno kapaciteto – npr. 1Mbps.

### 7. Pri radijski komunikaciji so motnje zelo pogoste. Kako je pri protokolu GSM poskrbljeno za zanesljiv prenos zvoka?
GSM uporablja komutirano povezavo, kar pomeni, da ima uporabnik zagotovljeno prenosno pot od njegovega terminala do terminala na drugi strani zveze. Pri tem imamo konstantno hitrost in zakasnitev.   proti izgubi podatkov uporablja 3 razrede (skupaj 260 bitov): prva classa Ia prenaša zelo pomembne informacije s CRC kodo in dodatnimi redudančnimi biti; classa Ib prenaša pomembne podatke za reprodukcijo glasu ter dodatne redudančne bite ter classa II pa je za prenos manj pomembnih informacij za boljšo reprodukcijo glasu. Pri prenosu se zato zvok opiše s tremi vrstami parametrov: parametri za filter govornega trakta, filter za periodo ter za kodiranje ostalega signala. Pri tem imajo vsi redudančne bite ter vse skupaj je šifrirano z algoritmom A8.

### 8. Zakaj se, ne glede na lokacijo mobilne naprave, podatkovni promet vedno usmerja v domače omrežje?
Zato da vedno dobi domačo IP številko. Poleg tega se poenostavi usmerjanje podatkovnega prometa, dodeljevanje IP številk, lažje premikanje mobilne postaje med baznimi postajami (roaming).

### 9. Kaj pomeni mehak prehod med baznimi postajami (soft handover)?
Pomeni da se terminal brez prekinitve prestavi iz ene bazne postaje na drugo močnejšo bazno postajo. Pri tem uporabnik ne čuti prehoda in zveza se ne prekine – enostavno prehajanje med baznimi postajami.

### 10. LTE bazne postaje uporabljajo isto frekvenčno območje. Kako je poskrbljeno, da se bazne postaje med seboj ne motijo?
Vse bazne postaje uporabljajo isto frekvenco. NA robovih omrežja, kjer pride do prekrivanja z drugimi postajami si postaje frekvence razdelijo
