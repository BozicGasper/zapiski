# Pisni izpit 22.8.2019 (3.rok)
### 1. Ali je potrebno pri standardu LTE upoštevati Dopplerjev zamik? Odgovor utemeljite.
Da, saj se naprava v omrežju premika. To je sprememba frekvence zaradi premikanja sprejemnika oziroma oddajnika.  LTE podpira hitrosti premikanja terminala do 350km/h, v nekaterih primerih tudi 500km/h


### 2. Kakšna je razlika med časovniki TIM in DTIM pri 802.11 protokolu? 
TIM se pošlje ob vsakem beacon paketu, DTIM se poslje na vsakih nekaj beaconov. Ko se pojavi paket DTIM, vstopna točka na poziv pošlje vse pakete (tudi broadcast in multicast, ki se ob običajnih periodah TIM ne pošiljajo).

### 3. Kakšne so bistvene izboljšave pri standardu 802.11ac v primerjavi s standardom 802.11n?
160Mhz pasovna širina, večje število snopov (do 8), multi user MIMO(generiranje več snopov naenkrat), višja hitrost prenosa, v standardu opredeljeno generiranje snopa, zmogljivejša modulacija (256 QAM)

### 4. Kaj pomeni barvanje paketov pri standardu 802.11ax?
Vsak BSS ima svojo barvo, tako lahko odjemalec ve ali je nek paket od njegovega BSS ali ne. Šibek signal odjemalca iz drugega BSS lahko pomeni da ne smemo oddajati.

### 5. Zakaj je čas priključevanja v omrežje pri BLE bistveno krajši v primerjavi s klasičnim protokolom Bluetooth?
Bluetooth ima 79 kanalov od tega 32 za priključitev. Po njih pseudo naključno skače. BLE ima 40 kanalov in specificirane kanale za priključitev.

### 6. Zakaj se v GSM omrežju informacije o lokaciji zapišejo na SIM kartico?
Zimic pravi: Informacije o geolokaciji oz. sosednjih baznih postajah se zapišejo na SIM, da lahko ob izključitvi naprave takoj nadaljujemo s povezovanjem na bazno postajo, brez sorazmerno počasnega ponovnega iskanja po velikem številu frekvenc preko raznih protokolov.

### 7. Pri UMTS protokolu vsi terminali uporabljajo isto frekvenco. Zakaj se terminali med seboj ne motijo? 
Ker uporabljajo različne kode oddajanja (CDMA). Pazijo tudi, da je moč signala vseh mobilnih naprav pri bazni postaji približno enaka.

### 8. Kaj je VoWiFi in kakšne so njegove značilnosti?
Voice over WiFi, je implementacija Voice-over LTE in se uporablja kjer je na voljo WiFi oziroma če je naprava povezana na WiFi omrežje. Preko WiFija se lahko pogovarjamo z uporabniki 4g/lte omrežja. Seamless switching med WiFi in LTE. Operater nam zaračuna minute kot da smo v domačem omrežju. Slabost je da operater ne nadzoruje WIFI omrežja.

### 9. Kaj je posebnost NSA (Non-Stand Alone) arhitekture pri prehodu na 5G?
Uporablja obstoječe 4g LTE omrežje za kontrolne funkcije omrežja.

### 10. Kako je izvedeno Iridium omrežje, da za dostop ne potrebujemo usmerjene antene?
Ne potrebujemo usmerjene antene, saj je omrežje sestavljeno iz zadostnega števila nizko orbitnih satelitov (kateri krožijo), ki pokrivajo območje.
