# Preverjanje vitalnosti

## Kontrola zdravja (*Health check*)
Vsak API za preverjanje zdravja implementira več raličnih kontrol zdravja, kjer mikrostoritev lahko označimo kot *zdravo*, če se vse kontrole zdravja uspešno izvedejo.

kontrole zdravja delimo na:
- Standardne - *preverjanje povezave do vseh zunanjih storitev, preverjanje zasedenosti trdega diska, ...*
- Po meri - *razvijalec sam sprogramira kontrolo zdravja*

## API za preverjanje zdravja (*Health Check API*)
Primer: mikrostoritev se lahko odziva na zahtevke, vendar ne deluje pravilno, ker nima povezave s podatkovno bazo.

Implementirati je potrebno končno točko, ki preverja in vrača **zdravje** mikrostoritve - *API za preverjanje zdravja*
> npr. HTTP GET /health

Ta mehanizem omogoča **zaznavanje nedelujočih instanc** mikrostoritev.

Ob klicu API-ja za preverjanje zdravja, mikrostoritev preveri svoje delovanje:
- ob zaznavi nedelujoče instance:
    - se generira opozorilo (*alert*)
    - mehanizmi odrivanja storitev odstranijo nedelujoče instance
    - orodja za upravljanje vsebnikvo (*kubernetes*) nadomestijo bolne stroke (*pod*) z novimi instancami

## Odgovor
Mikrostoritev vrača **JSON** objekt s statusom posameznih kontrol, kjer bodo *zdrave storitve* vrnile odgovor **200 OK**, *bolne storitve* pa odgovor **503 Service unavailable**.

```json
HTTP RES 200 OK
BODY : 
{
    "outcome" : "UP",
    "checks" : [
        {
            "name" : "DataSourceHealthCheck",
            "state" : "UP"
        }
    ] 
}
```

### Eclipse MicroProfile Health 1.0
Del specifikacije **MicroProfile 1.2**. Z njim definiramo ***format* in *protokol* API-ja za preverjanje zdravja** in **Java API za definicijo kontrol zdravja *po meri***.
```Java
@Health
@ApplicationScoped
public calss PoljubnaKontrolaZdravja implements HealthCheck {
    public HealthCheckResponse call(){
        [...]
    }
}
```
## API za preverjanje zdravja in odkrivanje storitev
**Mehanizem za odkrivanje storitev** periodično izvaja klice na API za preverjanje zdravja. Bolne instance tako lahko efektivno odstranjujemo iz registra storitev.

Pri odkrivanju sotritev pa mehanizem odjemalcem poda samo **naslove zdravih instanc**

## API za preverjanje zdravja in Kubernetes
Kubernetes definira **sonde življenja (*liveness probes*)**, ki preverjajo zdravje strokov in jih definiramo na nivoju stroka.

Sonde se izvajajo **periodično** v specificiranih časovnih intervalih in preverjajo zdravje stroka s pomočjo:
- Izvajanja poljubnih **bash** **ukazov**
- **HTTP** **GET** zahtevkov
- **TCP** vtičnic (*TCP sockets*)
```yaml
#primer konfiguracije sonde življenja
livenessProbe:
    httpGet:
        path: /health
        port: 8081
    initialDelaySeconds: 5
    periodSeconds: 3
```

