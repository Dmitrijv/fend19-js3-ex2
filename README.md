# Inlämingsuppgift 2

Uppgiften går ut på att skapa ett projekt för småföretag, så att de kan hålla
reda på sina kunder samt lite information om varje kund.

Uppgiften utförs själv, utbildningsansvarig får endast svara på frågor gällande
API:t eller förtydliga detta dokument. All kod och bugghantering löses av er
själva. Frågor gällande uppgiften skall ställas i Slack-kanelen för utbildningen,
så att alla får samma information.
Alla punkter (förutom de som börjar på "VG") nedan ska utföras i projektet för
betyget Godkänt. För VG ska minst 2 utav VG-punkterna utföras.

Krav:

- React
- JSXK
- React Router Dom
- useState
- useEffect
- !!! VG useContext (spara kundlistan och inloggade användarens information i Context)
- Styled Components
- Skapa styled components
- !!! VG Ärv CSS-properties från andra komponenter

## API

ROOT_URL: https://frebi.willandskill.eu/admin

## Dokumentation:

### 1 Skapa en ny användare

auth_user_create
/auth/users/

Logga in som admin på https://frebi.willandskill.eu/
email: nackademin@willandskill.se
password: js-fend-19
Navigera till: https://frebi.willandskill.eu/swagger/

När användaren har skapats så skickas ett mail till användarens email adress.
Se till att skapa användare med ert riktiga email. Man kan bara skapa en
användare med ett visst email. Har ni Gmail så går det att lägga till
VAD_SOM_HELST för att skapa unika mail. Till exempel:
mian@willandskill.se
mian+test@willandskill.se
mian+test+1@willandskill.se
Alla dessa mail hamnar i min inkorg. Jag är osäker på ifall er nackademin mail
har denna funktion.

Aktivera användaren
I mailet som ni får från systemet så finns det en länk som ser ut som nedan
http://localhost:3000/login?uid=NzI&token=5jz-8e37ac1f5dccf7b30a0f
Denna länk innehåller en uid och en token som query parametrar.
Använd useHistory för att hitta uid och token. Använd även URLSearchParams
för att lättare hantera url.

### 2 Logga in användaren

När användaren har aktiverat sitt konto så navigerar vi vidare till /login (utan
uid och token parameter). Här visar vi upp input fält för email och användare
samt en knapp för att logga in. När användaren trycker på knappen så skickar
vi ett anrop till /api-token-auth/ med email och password. Då får vi tillbaka en
token

Hemskärmen
När användaren har logga in navigerar vi vidare till

/home

Lista alla kunder som användaren har kopplat till sitt konto ( GET /api/v1/customers/)
Ge användaren möjlighet att lägga till en ny kund ( POST /api/v1/customers/ )

Användaren ska kunna ange följande värden för att skapa en kund:

name (kundens namn)
organisationNr (kundens organisationsnummer)
vatNr (kundens momsnummer)

! VG Validera så att detta fält innehåller "SE" och därefter 10 siffror
reference (kundens referens)
paymentTerm (betalningsvillkor i dagar. En siffra måste alltid skickas med)
website (kundens hemsida)
email (kundens mail)
phoneNumber (kundens telefonnummer)

När användaren har skapat kunden ska kundlistan laddas om från back-end
Visa vilken användare som är inloggad ( api/v1/me )
Visa den inloggade användarens email, förnamn och efternamn.

### 3 Detaljvy för en specifik kund

Visa följande information på Detaljvy för en specifik kund
name,
organisationNr,
vatNr,
reference,
paymentTerm,
website,
email,
phoneNumber

!VG Lägg till en knapp så att användaren kan ta bort en kund HTTP
Method Delete på /api/v1/customers/{id}/ ). Användaren ska därefter navigera tillbaka till "Hemskärmen"
!VG Ge användaren möjlighet att ändra kundens information PUT/PATCH

### Inlämning

Uppgiften lämnas in genom att ladda upp koden (utan node_modules) på
studentportalen samt i inlämningen klistra in länk till publikt GitHub repo,
senast 28/9 2020 23:59
