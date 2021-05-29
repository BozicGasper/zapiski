# Pisni izpit 7.7.2015
### 1. Na kakšne načine se lahko izvede uporaba skupnega medija?
- **dostop brez trkov**, kjer se naprave **med seboj dogovorijo** o načinu dostopa (Token Bus). Obstaja tudi način kjer **ena izmed naprav koordinira** dostop do medija (GSM).
- **dostop s trki**, kjer poteka **reševanje trkov** (Tree, Windows,...) in se uporablja naključni dostop do medija (Aloha, CSMA(CD/CA), ...)

### 2. Zakaj se pri brezžičih protokolih uporablja mehanizem RTS/CTS?
Mehanizem se uporablja za izvedbo uporabe skupnega medija, in sicer za **izogibanje trkom** (CSMA/CA (Collision Avoidance)). To sta dve kontrolni sporočili, in sicer:
- RTS (**Request to send**) - *naprava zahteva uporabo kanala za določen čas*
- CTS (**Clear to send**) - *dostona točka odgovori z CTS, ki sporoči napravi, ki je poslala RTS, da lahko začne govoriti*

### 3. Kakšna je razlika med CFP (Contention free period) in CP (Contention Period)?
- **CP (Contention period)** : *V času CP vse naprave dostopajo do medija.*
- **CFP (Contention free period)** : *V času CFP nadzorna postaja (dostopna točka) oddaja svoje pakete in povprašuje ostale naprave po podatkih.*

### 4. Imamo brezžično omrežje, ki uporablja strežnik za preverjanje prisotnosti (npr. Radius) pri uporabi protokola WPA2. Ali lahko pridobimo glavni ključ, če vdremo v vstopno točko?
Pri uporabi Radius-a se glavni ključ nahaja na STA (statiomn - odjemalec) in na AS (avtentikacijskem strežniku). Na dostopni točki **ni ključa**, niti se ne prenaša čez njo.

### 5. Zakaj imajo nekatere naprave, ki uporabljajo Bluetooth dva radijska dela?
V primeru, da je naprava **gospodar in suženj hkrati**, sta potrebna dva radijska dela. To je takrat, ko se želi več piconet omrežji povezati v enega.

### 6. Kakšne možnosti prenosa podatkov omogoča standard GSM? Kakšne so prednosti/slabosti takšnega prenosa?
GSM omogoča samo komutirano povezavo.
- **prednosti**: 
    - konstantna hitrost prenosa podatkov
    - ni težav s preobremeljivosto
    - zakasnitev je konstantna
    - ni potreba dodatna informacija za usmerjanje paketov
- **slabosti**:
    - zelo slabo izrabi skupni medij
    - tudi, ko naprava ne pošilja podatkov, je linija zasedena in je ne more uporabiti nihče drug

### 7. Zakaj se oddajna moč pri standardu UMTS neprestano popravlja?
Ker mora biti *za učinkovito delovanje* jakost sprejetega signala mobilnih naprav *pri sprejemu* **približno enaka**

### 8. Kaj je femtocel in kakšne so njegove prednosti ter slabosti?
Femtocell je bazna postaja za domačo uporabo.
- **prednosti**:
    - povezava z operaterjem preko interneta
    - doseg v obsegu objekta
    - omogoča dodatno pokritost slabo pokritih območij (npr. klet)
    - majhna fizična velikost
- **slabosti**:
    - visoka cena
    - interferenca z ostalimi postajami
    - slaba varnost

### 9. Standard LTE omogoča uporabo cele vrste frekvenčnih pasov. Kakšne so prednosti in slabosti višjih oz. nižjih frekvenc?

Na nižjih frekvencah so valovi daljši, kar je bolj primerno za situacije, kjer so na poti signala lahko ovire, je pa na teh frekvencah tudi omejena pasovna širina, zaradi česar so hitrosti prenosa splošno nižje.
- **prednost**: primerne za situacije, kjer so na poti signala lahko ovire
- **Slabost**: omejena pasovna širina, zaradi česar so hitrosti prenosa splošno nižje

Višje frekvence so primerne za komunikacijo med točkama, kjer ni ovir (npr. 5G v satelitskem pasu?) in lahko uporabljajo širši frekvenčni pas, kar omogoča višje hitrosti.
- **prednost**: lahko se uporabljajo širši frekvenšni pas, kar omogoča višje hitrosti
- **slabost**: neprimerne za situacije, kjer so na poti singala lahko ovire

### 10. Kako je izvedeno prehajanje terminalov pri standardu LTE za skupinski prenos podatkov (npr. TV programov)?
Uporablja se ista frekvenca in **oddajniki so med seboj sinhronizirani** spomočjo **GPS**. Terminal tako prejeti signal z dveh ali več baznih postaj obravnava kot **signal iz** **enega vira**, ki je potoval po različnih poteh in zato so **zakasnitve** **različne**.