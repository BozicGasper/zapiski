# Advanced Messaging Queueing Protocol (AMPQ)
To je aplikacijski protokol, ki ga uporablja **MOM**.

Glavne lastnosti protokola so, da
- je sporočilno usmerjen,
- uporablja različne načine usmerjanja sporočil,
    - PPP
    - Publish and Subscribe
- ponuja zanesljivost dostave sporočil in
- varnost.

Vrte **zagotovil** za dostavo sporočil:
- največ enkrat (*at-most-once*)
- najmanj enkrat (*at-least-once*)
- točno enkrat (*exactly-once*)

Avtentikacija in enkripcija sta realizirana z uporabno standardnih protokolov za ta namen (SASL/TLS...).

Za prenos na transportni plasti se uporablja **TCP**

## Delovanje
Sporočila se izmenjujejo med **vozlišči (*nodes*)**, kjer je možen tudi pojav posebnega vmesnega vozlišča **broker**, ki skrbi za *distribucijo sporočil*.

Vmesno vozlišče (broker) sestavljata
- **Izmenjevalec (*exchange*)** - prejema in usmerja sporočila glede na neka določena pravila
- **Vrsta (*queue*)** - hrani sporočila

**Broker** lahko dostavi sporočila prejemnikom (*način "push"*), ali pa jih prejemniki sami prensejo (*način "fetch/pull"*).

## Izmenjava sporočil med izmenjevalcem in vrsto
AMQP nudi podporo različnim tipom izmenjave sporočil med izmenjevalcem in vrsto
- **Direktna izmenjava (*Direct exchange*)** - vrste so na izmenjevalce povezane z **usmerjevalnimi ključi**.
- **Razpršena izmenjava (*Fanout exchange*)** - sporočilo je usmerjeno na vse naročene vrste, ne glede na usmerjevalne ključe
- **Izmenjava glede na temo (*Topic exchange*)** - sporočilo je usmerjeno do vrste, če se njegov usmerjevalni ključ ujema z definiranim vzorcem vrste (*podpira vzorec Publis and subscribe*)
- **Izmenjava z uporabo glav sporočila (*Headers exchange*)** - Namesto usmerjevalnih ključev se uporabljajo atributi glave sporočil

## Na predavanjih smo si ogledali RabbitMQ
to je odprtokodna rešitev protokola AMQP, kjer so navoljo odjemalske knjižnice za vse večje programske jezike. 

RabbitMQ omogoča **visoko-razpoložljiv način** - **clustering**.

Podpira **vtičnike** (*plugins*) in med drugim nudi tudi uporabniški vmesnik za spremljanje in upravljanje.