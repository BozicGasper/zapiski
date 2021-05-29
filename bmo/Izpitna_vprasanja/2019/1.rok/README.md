# Pisni izpit 20.6.2019 (1.rok)
### 1. Kakšne so omejitve pri uporabi ISM področja?
(ISM - industrial, scientific and medical)Omejeno na določene frekvence. Omejena je oddajna moc. (100mw, Wifi) v nekaterih primerih tudi omejitev časa.

### 2. Obstajata dve različici Aloha protokola. Katera je učinkovitejša? Odgovor utemeljite.
Aloha in predalčkasta aloha. Predalčkasta aloha je 2x bolj učinkovita, saj v primeru trka pokvari le paket v predalu, v katerega je nameravala oddajati.

### 3. Kako je izvedeno sobivanje pri protokolih 802.11b in 802.11g?
V primeru ko je v omrežju poleg 11g naprav tudi naprava ki podpira le 11b, se prilagodi tako, da uporablja daljšo glavo paketa in DSSS modulacijo.

### 4. Standard 802.11ax uvaja na radijskem delu precej sprememb. Pojasni značilnosti modulacije OFDMA.
- Vstopna točka nadzoruje frekvenčno in časovno sinhronizacijo
- Frekvenčno časovni prostor je razdeljen na predalčke (resource unit)
- Istočasna souporaba skupnega frekvenčnega pasu se lahko izvaja v obe smeri
- Združuje več frekvenčnih kanalov, ki so med seboj ortogonalni 
- Posamezen kanal uporablja QPSK modulacijo

### 5. Zakaj je pri WPA protokolu poseben ključ za skupinske pakete?
Ker ima vsaka povezana naprava drugačen ključ in lahko tako pošlje skupinske pakete s skupinskim ključem vsem naenkrat.

### 6. Kako je izveden naključen dostop pri GSM omrežju?
S pomočjo RACH(random access channel) kanala. Gre proti bazni postaji vedno ko naprava želi vzpostaviti komunikacijo. Paket se pošlje v naključno izbranem okvirju, rezerviranem za RACH. Če pride do trka z drugo mobilno napravo, ni odgovora na zahtevo, zato se paket po naključnem času čakanja ponovno pošlje 

### 7. Kako se prenese MMS sporočilo?
Pošlje se kot sporočilo SMS, ki vsebuje povezavo (URL) do MMS sporočila, ki se prenese preko IP protokola.

### 8. Pri standardu LTE vse bazne postaje uporabljajo isti frekvenčni pas. Kako je izvedeno, da se med seboj ne motijo?
Bazne postaje na robu njihove meje uporabljajo različne frekvenčne pasove, da se med sosednjimi ne motijo.

### 9. Kateri so trije glavni cilji pete generacije mobilne telefonije?
- Zanesljivost boljša od 10^-5
- Hitrost na napravo 100Mb/s down / 50Mb/s up
- Gostota naprav do 1.000.000 na kvadratni kilometer
- Virtualizacija omrežja (da npr. semaforji komunicirajo med sabo,...)

>Prej bi rekel da tole:
>- eMBB, 
>- hitro mobilno omrežje, v katerem bo uporabnik imel enako izkušnjo kot v žičnem omrežju
>- Low Latency, high reliability visoko zanesljiva omrežja so na primer potrebna za: samovozeče avtomobile, telemedicino. 
>- IOT počasno omrežje, ki omogoča priključitev velikega števila naprav.

### 10. Kakšne so posebnosti internetne povezave, če izberemo ponudnika, ki ima satelite v geostacionarni orbiti?
Uporaba usmerjene antene, saj geostacionarni satelit glede na našo pozicijo konstantno miruje (premika se tako kot Zemlja). Zakasnitev je večja kot pri satelitu v nizki zemeljski orbiti. Sateliti, ki so v geostacionarni orbiti, omogočajo prenos podatkov v obe smeri.
