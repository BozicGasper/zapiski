# Pisni izpit 2015 xx.yy.2015 (1. rok)

### 1. Zakaj premikanje terminala vpliva na komunikacijo z bazno postajo?
Zimic pravi: Pri UMTS vpliva zaradi stalnega popravljanja jakosti signala, ki je povezana s CMDA, kjer vsi terminali delujejo na isti frekvenci. Pri LTE se nihanje jakosti signala upošteva pri dodeljevanju kanalov. Terminalu, ki ima slab signal dodeli predvsem tiste frekvence, ki zanj delujejo najboljše (slide 12-20).
Zaradi Dopplerjevega efekta; s premikanjem terminala se spreminja tudi frekvenca s katero oddaja. - Zimic pravi, da bi tudi ta odgovor upošteval, ampak je vpliv zaradi velike hitrosti (svetlobne hitrosti) skoraj enak nič.

### 2. Zakaj in koliko je Slotted Aloha bolj učinkovit kot navaden Aloha?
Predalčkasta aloha je 2x bolj učinkovita, saj v primeru trka pokvari le paket v predalu, v katerega je nameravala oddajati. Zaradi tega Slotted Aloha omogoča prb. 2x večjo prepustnost kot navaden Aloha.(navaden : ~0,184, slotted : ~0,368)

### 3. Kako je pri standardu 802.11(b/g/n) izvedeno izogibanje trkom?
Z mehanizmom RTS (Request to send) in CTS (Clear to send). Naprava pošlje RTS dostopni točki, katera odgovori z CTS (v sporočilu je določen čas v katerem lahko oddaja naprava).

### 4. Kakšne so bistvene izboljšave pri standardu 802.11n v primerjavi s starejšimi standardi?
Omogoča večje hitrosti prenosa,  Izboljšan doseg (dvakrat boljši doseg v prostoru, trikrat izven prostorov), Povečana zanesljivost prenosa podatkov
Omogoča uporabo več anten (MIMO), kar omogoči: Združevanje signalov, Prostorsko kodiranje, Prenos z več snopi, Usmerjanje radijskega snopa
Hkrati lahko uporablja dva kanala (40 MHz)
Krajši interval guard

### 5. Ali so vsi paketi pri tehnologiji bluetooth enako dolgi?
Ne, niso. Paketi s številkami 3 in 5 so daljši paketi in zasedajo 3 ali 5 časovnih predalčkov (625 μs): Kontrolni paketi so: ID, Null, Poll, FHS; Podatkovni paketi DM1, DH1, DM3, DH3, DM5, DH5; Paketi za prenos zvoka HV1, HV2, HV3 in DV (hibridni prenos)

### 6. Kako pred menjavo bazne postaje terminal pridobi informacijo o sosednjih omrežjih?
Bazna postaja na katero je trenutno priklopljen terminal mu pošilja te informacije, sama jih pa dobi od terminalov, ki izvajajo meritve in jih posredujejo postaji. Terminal ima tudi informacije o sosednjih omrežjih iz svojih meritev.

### 7. Kako se pri standardu UMTS med seboj razlikujejo bazne postaje istega ponudnika in različnih ponudnikov?
Vse mobilne naprave oddajajo na isti frekvenci, ločijo se le po kodi oddajanja (CDMA). (Predvidevam da je to mišljen tuki) (morda scrambling?)

### 8. Kako je izvedeno odpravljanje napak pri skupinskem prenosu (broadcast)?
Na tri načine: Tako, da naprava sprejema signal iz več baznih postaj, da naprava kombinira različno zakasnjene podatke (shranjevanje v čakalno vrsto), uporaba boljšega kodiranja z redundantnimi podatki.

### 9. Kako je pri standardu HSPA izvedena manjša poraba energije terminala?
Bistvena izboljšava je manjšanje porabe, ki so jo dosegli s prenehanjem stalnega oddajanja kontrolnih kanalov v smeri proti uporabniku. Prav tako se izključuje oddajnik mobilne naprave. To velja tudi za komutirane zveze (prenos zvoka).

### 10. Zakaj je število transportnih kanalov pri standardu LTE manjše v primerjavi s starimi standardi (recimo GSM)?
GSM še ni delil kanalov na logične fizične in transportne kanale, LTE pa že uporablja skupni kanal, ki je multipleksiran *(to sm sam ugibu, če kdo ve nej dopolne prosm)*