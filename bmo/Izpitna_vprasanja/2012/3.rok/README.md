# Pisni izpit xx.yy.2012 (3.rok)
### 1.	Ali protokol LTE omogoča prehod na starejša omrežja brez prekinitev?
Zahteve so da standard to podpira. Za zvok ni problema, težava je pri ogromnem preskoku v hitrosti med LTE in GSM oz. ostalimi tehnologijami (v primeru prenosa podatkov itd.).

### 2.	Novejši standardi uporabljajo modulacijo OFDMA. Kakšne so prednosti omenjene modulacije?
Združuje več frekvenčnih kanalov, ki so med seboj ortogonalni; posamezen kanal pa uporablja QPSK modulacijo

### 3.	Opišite delovanje protokola Aloha in Slotted Aloha.
Aloha: Ko ima postaja pripravljene podatke, jih pošlje. Pošiljatelj ugotavlja ali je bil prenos uspešen ali je prišlo do kolizije. V primeru kolizije pošiljatelj po naključnem času ponovno pošlje podatke. Prepustnost: 18%
Slotted Aloha: Podatke je mogoče začeti pošiljati samo na začetku časovnega predalčka, s tem je skrajšan čas morebitne kolizije. Prepustnost je 2x večja kot pri navadni Alohi: 37 %

### 4.	Kakšna je naloga paketa beacon v 802.11 protokolu?
Beacon spada pod upravljavski paket in na MAC nivo; Beacon je tako periodični paket z informacijami o dostopni točki, predvsem potreben za sinhronizacijo. Beacon paketi se zato pošiljajo z najvišjo prioriteto. Pri tem naprava po prejemu beacon paketa ve, kdaj bo poslan naslednji beacon paket. (V omrežju BSS-basic service set(omrežje je vodeno s strani dostopne točke) dostopna točka pošilja pakete beacon in vse naprave glede na to popravljajo svojo lokalno uro.)

### 5.	Kakšen postopek uporabljajo novejše različice 802.11 za nižanje porabe energije?
Pri novejših načinih ko imamo implementiran MIMO (802.11n) se pri varčevanju omogoči uporabo samo 1 antene in s tem povzročimo periodičen prenos podatkov-periodično se aktivirajo in poslušajo promet (ko pride naprava v intervalu PSMP na vrsto za pošiljanje, pošlje podatke – več paketov pa lahko loči s časom RIFS. Ko poteče daljši čas SIFS lahko oddaja naslednja postaja (npt. Za IP telefonijo)). Potem se naprava ozove samo na določene pakete (TIM, DTIM)

### 6.	Kakšna je naloga glavnega gesla (master key) v WPA protokolu?
Master key se uporablja pri avtentikaciji in sicer med asociacijo Avtentikacijskega strežnika in naprave. Master key nikoli ne zapusti naprave. Je pa tudi geslo s katero se naprava poveže z dostopno točko. Iz glavnega ključa so nato izpeljani PMK -Pairwise master key, ki se uporabi za izdelavo začasnega ključa PTK(Pairwise Transient Key), iz katerega se izpelje: Key Confirmation Key (KCK) – potrjevanje pri izmenjavi ključev, Key Encryption Key (KEK) – za distribucijo Group Transient Key (GTK), Temporal Key (TK) – šifriranje podatkov

### 7.	Kako je pri protokolu BlueTooth poskrbljeno za sobivanje različnih bluetooth naprav, da se med seboj ne motijo?
Hopping sekvenca, ki jo tvori master?

### 8.	Zakaj bazna postaja oznanja informacijo o sosednjih baznih postajah?
Zaradi usklajevanja izhodne moči ter da terminal, ki sprejema te informacije ve, katera omrežja ima sosednja bazna postaja, koliko je oddaljena, itd. da se terminal lahko enostavno preklopi na drugo omrežje (npr. iz UMTS na GPRS…)…

### 9.	Ali se jedri omrežja UMTS v99 in GSM/GPRS bistveno razlikujeta?
Ne. UMTS pa s to verzijo pridobi popolnoma nov radijski del – UTRAN (ki uporablja WCDMA). Pri novem radijskem delu ima 2 nova modula – Node-B in RNC, ostali moduli pa imajo posodobljeno programsko opremo (nadgrajen pa je modul HLR ter oprema za prenos podatkov GPRS). Ker ima UMTSv99 večina modulov iz GSM je prehajanje med omrežji za zvok enostavno, zatakne se pri prenosu podatkov zaradi višje hitrosti pri UMTS.

### 10.	Zakaj je bilo pri protokolu HSDPA uvedeno hitro potrjevanje paketov (HARQ–Hybrid ARG)?
Ker se hitrost prenosa podatkov zelo poveča (do 14 Mb/s proti uporabniku), zato je potrebno hitro potrjevanje, da dosežemo želeno hitrost in čim manjšo izgubo zaradi zasedenosti omrežja.. HARQ je bilo uvedeno ker so IP paketi omrežja veliki (do 1.5 kb) in lahko povzročijo napako na prenosnem delu, kjer so paketi zelo kratki in s tem povzročijo ponovitev prenosa celotnega paketa (npr TCP paket). 

## 11.	Kako je pri LTE izvedeno prehajanje med postajami pri sprejemanju skupinskega prometa (broadcast, multicast)?
Ker se uporablja OFDMA način modulacije – s tem omogočimo da pri skupinskem prometu vse bazne postaje oddajajo isti/enak signal. Signal je na isti frekvenci, z isto modulacijo in natančno sinhroniziran (uporaba GPS). Terminal tako prejeti signal z dveh ali več baznih postaj obravnava kot signal iz enega vira, ki je potoval po različnih poteh in zato so zakasnitve različne.

- Kako je rešeno pošiljanje skupnih paketov (multicast, broadcast) v protokolu WPA?
AP (oziroma AS odvisno od uporabe) generira GTK (Group transient key) in ga pošlje uporabnikom šifriranega z KEK (Key Encryption Key). Ta ključ se uporablja za šifriranje multicast in broadcast prometa.

- Kako je izveden dostop do skupnega medija pri BT-ju?
Js bi napisal tole: 
Bluetooth uporablja časovno multipleksiranje (TDD – Time Division Duplex) – kanal je razdeljen na predalčke, v vsakem predalčku se lahko pošlje 1 paket. Master lahko pošilja podatke do Slave naprave le v sodih predalčkih, Slave pa Masterju le v lihih predalčkih.

- Bistvena prednost med GSM in GPRS pri prenosu podatkov?
Podatki se pri GPRS pošljejo le, ko so na voljo in to nam da boljšo izkoriščenost kanala. Poleg tega se poraba računa na količino prenešenih podatkov, ne na minutni impulz.

- Zakaj potrebujemo različne kanale pri LTE-ju?
V kanale so razdeljene različne funkcionalnosti omrežja (za podatkovni promet, za kontrolni promet ipd.) Vsi mobilni protokoli tako ali drugače razdelijo promet v kanale. Pri LTE-ju delitev kanalov (Transportni kanali, logični, fizični) omogoča neodvisnost jedra omrežja od radijskega dela.

- Zakaj ima GPRS 2 sekundi pri vzpostavitvi?
Zaradi tega, ker pri GPRS traja zahteva DNS 750ms, vzpostavitev TCP 550ms in pa zakasnitev zahteva/odgovor 1200ms kar nam da 2,8s za vzpostavitev. (a ni 2,5 s?)
