# V6 Implementacija
# 1 Regresijsko testiranje
To je avtomatsko testiranje programske kode, ki rešuje problem, če smo z novo funkcionalnostjo pokvarili že prej delujočo kodo.

# 2 Namestitev Mocha
Knjižnjico Mocha lahko namestimo **globalno**  ali **lokalno**

# 3 Mocha - testiranje delovanja

```bash
$ mkdir test
$ code test/test.js
```

V testno skripto ```./test/test.js``` dodamo naslednjo vsebino:

```javascript
var assert = require('assert');
describe('Hello World Test', function() {
    var message = 'Hello world';
    before(() => {
        console.log('-------');
    });
    after(() => {
        console.log('-------');
    });
    beforeEach(() => {
        console.log('.');
    });
    describe('#main()', function() {
        it('should sum list values', function() {
            assert.equal([1, 2, 3, 4].reduce((a, b) => a + b, 0), 10);
        });
        it('should test message', function() {
            assert.equal(message, 'Hello world');
        });
    });
});
```
## 3.1 Opis strukture
Podprti vmesniki moche so:
- BDD oz. behavior-driven development
- TDD oz. test-driven development
- exports
- require
- ...

Tukaj si bomo pogledal BDD, kjer se posamezen test specificira na naslednji način:
```javascript
describe("naslove", function(){ ... })
```
Vmesnik BDD vsebuje **opis primerov uporabe**, vključno s **testnimi primeri** zanje.

Primer testa, ki uporablja BDD
```javascript
describe('#testiramo komponento()', function() {
  beforeEach(function() {
    // ...inicializacijska koda pred izvedbo testa
  })
  // konkretni testni primeri
  it('sestevanje mora delovati', function() {
    // testne trditve
    expect(sum(1, 2, 3, 4, 5)).to.equal(15);
  })
})
```

Vmesnik BDD vsebuje naslednje glavne gradnike:
```javascript
describe() // se uporablja za združevanje določenih skupin testov, lahko tudi gnezdimo

context() // sopomenka za describe, lahko uporabljamo pri gnezdenju, da zagotovimo lazjo berljivost

/** najosnovnejši gradnik testa. 
* Vsebuje eno ali več trditev o predmetu testiranja
* Prvi argument označuje naslov primera uporabe, drugi pa funkcijo, ki
* preizkuša primer uporabe.
*/
it("opis primera uprabe", function(){...})

specify() // sopomenka (alias) za blok it()
```

`before()` in prijatelji se izvajajo v takemle vrstnem redu:

```bash
before() -> beforeEach() -> test -> afterEach() -> after()
```

V bloku `it()` se nahajajo **trditve (assertions)**, kjer s **trditvenimi stavki** primerjamo **izhod** določenega testa z njegovo **pričakovano vrednostjo**.

**Testiranje asinhronske programske kode**

uporabimo lahko:
- funkcijo `callback()`
- objek `Promsie()` ali
- `ASYNC` / `AWAIT`

Spodnji primer prikazuje primer uporabe **asinhronih funkcij** pri testiranju.

```javascript
describe('Seznam delnic', function () {
    before(async function() {
        this.lavbicNetStocks = new DocumentGrabber('https://teaching.lavbic.net/api/finance/delnice/seznam', '', 'GET', 80);
        this.stockList = await this.lavbicNetStocks.acquireResource();
        this.analyzer = new DocumentAnalyzer(this.stockList);
    });
    // ...
});
```

# 4 Vključitev knjižnjice Chai v ogrodje Mocha
Knjižnjica chai nam basically omogoči da pišemo mocha teste v taki bolj naravni obliki zapisa

Chai trditveni slogi:
- value`.should`.XXX
- `expect(value)`.XXX
- `assert`.XXX(value)

Kjer `XXX` označuje zaporedje *kozmetičnih lastnosti metod*.
```javascript
[1, 2, 3, 4, 5].should.be.an('array').that.includes(2);
expect([1, 2, 3, 4, 5]).to.be.an('array').that.includes(2);
assert.isArray([1, 2, 3, 4, 5], 'je tabela stevil');
```

Primeri trditev v Chai:
```javascript
- expect(‘pes’).undefined;
- expect(‘pes’).to.be.undefined;
- expect(‘pes’).to.not.be.undefined;
- expect(‘pes’).to.equal(‘sep’); //veriženje
- expect(‘pes’).to.equal(‘pes’).and.not.be.undefined; //veriženje
- expect([1, 2, 3)].to.include(3); //veriženje
- expect({ a: 1, b: 2 }).to.include.keys('b'); //veriženje
```

# 5 Namestitev orodja Selenium za izvajanje testov
Slenium je odprtokodno orodje za testiranje, ki se uporablja za avtomatizacijo testov, izvedenih na različnih spletnih brskalnikh.

```bash
$ npm install selenium-webdriver
```

```json
"dependencies": {
  "chai": "^4.2.0",
  "mocha": "^7.1.1",
  "selenium-webdriver": "^4.0.0-alpha.7"
}
```

Pri seleniumu ni dost da mamo samo osnoven driver, ampak rabimo posebaj iz njihove spletne strano potegnit dol driverje za tiste brskalnike, za katere želimo testirat zadevo.

```javascript
// uporabimo <webdriver.chrome.driver system property>
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder(pathToDriver).build());

let driver = await new Builder().forBrowser("firefox")
                 .setFirefoxService(new firefox.ServiceBuilder(pathToDriver))
                 .build();
```

**pathToDriver** more kazat na executable datoteko, ki smo jo potegnili dol iz selenium official strani.

Inicializacija Selenium testa za google.com (to stvar spišemo v test.js)

```javascript
// uvoz komponent, ki jih bomo potrebovali
const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
    // ustvari odjemalca tipa WebDriver (brskalnik) na podlagi objekta Builder 
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // ustvarimo novo sejo brskalnika in brskalnik usmerimo na URL 
        await driver.get('https://www.google.com');
        // iskanje elementa izvedemo s pomočjo metode "findElement (By.locator())"
        //    uporabljen je iskalnik By.name()
        // vnesemo iskalni niz "TPO FRI" in izvedemo pritisk na tipko "Enter"
        await driver.findElement(By.name('q')).sendKeys('TPO FRI', Key.ENTER);
        // počakamo dokler na strani ne lociramo elementa s pomočjo lokatorja By.css()
        let firstResult = await driver.wait(until.elementLocated(By.css('h3')), 10000);
        // izpišemo atribut
        console.log(await firstResult.getAttribute('textContent'));
    }
    finally {
        // zaključimo sejo in zapremo brskalnik
        driver.quit();
    }
})();
```

Kombinacijo moche, chai-a in seleniuma si lahko podrobno ogledate v datoteki <a href="https://github.com/mindOfCaspian/zapiski/tree/main/tpo/IV_sklop/V6/test.js">test.js</a>
