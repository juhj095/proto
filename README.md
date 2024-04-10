# Lääkesovelluksen prototyypin käynnistysohje

Tässä lyhyt kuvaus Reach-sovelluksen käynnistämisestä. 

## Asennus

1. **Node.js ja npm**: Varmista, että tietokoneellasi on asennettuna Node.js ja npm. Jos niitä ei ole, lataa ja asenna ne [Node.js -sivulta](https://nodejs.org/).

2. **Projektin lataaminen**: Lataa projekti tietokoneellesi ja siirry sen juurikansioon komentokehotteessa.


## Käynnistys

Ennen sovelluksen käynnistämistä aja tietokannan SQL-tiedosto esimerkiksi MySQL Workbench-sovelluksella. 

Luo .env niminen tiedosto backend-kansioon ja ota mallia .env_EXAMPLE-tiedostosta. Käytä oman tietokannan tietoja. 

Avaa Node.js.

Asenna riippuvuudet juurikansioissa ja käynnistä sovellus seuraavasti, backend:

```bash
cd polku kansioon/backend
npm install
node start
```

Asenna frontend-sovelluksen riippuvuudet ja käynnistä se seuraavasti:

```bash
cd polku kansioon/frontend
npm install
node start
```

Backend ja frontend pitää olla käynnissä samaan aikaan, että sovellus toimii. 

Sulje sovellus CTRL+C komennuksella komentoikkunassa. 
