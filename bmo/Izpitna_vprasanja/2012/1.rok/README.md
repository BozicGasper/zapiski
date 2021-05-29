# Pisni izpit xx.yy.2012 (1.rok)
### 1. Kakšni načini za skupni dostop do medija se uporabljajo na fizičnem nivoju (naštejte)?
- Dostop brez trkov
    - Naprave se med seboj dogovorijo o načinu dostopa (Token bus)
    - Ena izmed naprav koordinira dostop do medija (GSM, …)
- Dostop s trki
    - Reševanje trkov (Tree, Windows, …)
    - Naključni dostop do medija (Aloha, CSMA(CD/CA), …)

### 2. Kakšna je razlika med običajnim in predalčkastim (slotted) Aloha protokolom? V čem je prednost drugega?
Aloha in predalčkasta aloha. Predalčkasta aloha je 2x bolj učinkovita, saj v primeru trka pokvari le paket v predalu, v katerega je nameravala oddajati.

### 3. Pri standardu 802.11 je pri hitrosti prenosa 12Mb/s 96 kodiranih bitov na simbol, medtem ko je na isti simbol 48 podatkovnih bitov. Zakaj je ta razlika?
zaradi slabšega razmerja signal/šum je potrebno več redundančnih bitov da podatke pravilno prenesemo. 

### 4. Kje so slabosti protokola WEP?
Poglavitna težava je uporaba glavnega ključa za šifriranje podatkov. Prekratek IV - ne more zagotoviti da se ne uporabi isti psevdo naključni niz. Koda CRC-32 se lahko enostavno zlorabi za pravilno kodo pri lažnem sporočilu, tako je ogrožena integriteta sporočila.

### 5. Kako je izveden dostop do skupnega medija pri protokolu BlueTooth (kdaj naprava lahko oddaja)?
Gospodar oddaja pakete z neparno številko, sužnji odgovarjajo na pakete s paketi s parnimi številkami

### 6. Kaj je bistvena prednost protokola ZigBee?
poceni, varčne naprave, ki lahko delujejo kot Network Coordinator, FFD ali RFD.

### 7. Zakaj mora GSM naprava imeti informacijo o oddaljenosti od bazne postaje?
Ker GSM uporablja časovno multipleksiranje, pomeni da morajo biti vse naprave časovno zelo natančno sinhronizirane. Zato terminal potrebuje informacijo o oddaljenosti, da lahko določi časovni zamik.

### 8. V čem je bistvena prednost pri prenosu podatkov pri protokolu GPRS v primerjavi z GSM?
GPRS za prenos podatkov uporablja paketni prenos, medtem ko GSM tudi za podatke uporablja komutirano povezavo. Zaradi paketnega prenosa je pri GPRS-ju veliko bolje izkoriščen skupni medij.

### 9. Ali bazne postaje pri protokolu UMTS uporabljajo različne frekvence?
Ne, bazne postaje se ločijo po kodi ki jo uporabljajo, ker se uporablja kodno multipleksiranje - CDMA.

### 10. Ali protokol LTE omogoča prehod na starejša omrežja brez prekinitev?
Glede na določene zahteve mora to standard podpirati. kar se tiče zvoka ni težav pri prehodu. težave je glede prenosa podatkov, saj je zelo velika razlika pri hitrostih prenosa.
