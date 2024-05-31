# Vue EventList
## Setup
- Clone deze repository naar een lokale folder
- Installeer alle dependencies/packages met *npm install*
- Start de applicatie een eerste keer met *npm run dev*

![template](/assets/template.png)

## SCSS
- Maak een Sass partial aan met de naam _base
- Maak 5 variabelen met onderstaande waardes:
    - primary-color: #D0CFEC;
    - secondary-color: #2C1320;
    - tertiary-color: #5F4B66;
    - accent-color: #FF6663;
    - title-font: 'Verdana';
    - text-font: 'Trebuchet MS';
- Voeg onderstaande opmaak toe:
        
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: $text-font;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: $title-font;
        margin-bottom: 1rem;
      }
- Zorg ervoor dat deze partial correct wordt geladen in het main.scss bestand
- Importeer het main.scss bestand in de Vue applicatie


## Navigation
- Maak een nieuw component *NavBar*
- Gebruik onderstaande code als basis voor de template

      <template>
          <nav class="navigation">
              <ul class="navigation__container">
                  <li class="navigation__item">
                      
                  </li>
                  <li class="navigation__item">
                      
                  </li>
              </ul>
          </nav>
      </template>
  
      <script>
      export default {
  
      }
      </script>

- Voeg een standaard Vue component toe aan het eerste listitem waarmee men kan navigeren naar het "/" path, zorg dat de tekst *Home* getoond wordt
- Voeg opnieuw een standaard Vue component toe, dit keer aan het tweede listitme, waarmee men kan navigeren naar het "/events" path. Zorg dat de tekst *events* getoond wordt
- Zorg dat beide elementen de css klasse "navigation__link" krijgen toegewezen
- Voeg zowel het NavBar- als het RouterView component toe aan het root-component van de Vue applicatie en verwijder de bestaande paragraaf

#### Opmaak
- Maak een Sass partial aan met de naam _components
- Voorzie de volgende stijlen in de css klasse *navigation*:

        background-color: $primary-color;
        padding: 0.5rem;
        font-family: $title-font;

- Gebruik nesting om de navigation__container klasse de volgende opmaak te geven:

        display: flex;
        justify-content: start;
        align-items: center;
        list-style-type: none; 

- Gebruik nesting om de navigation__link klasse de volgende opmaak te geven:

        display: inline-block;
        text-decoration: none;
        color: $primary-color;
        padding: 1rem;
        background-color: $secondary-color;
        color: $primary-color;
        margin: 0.5rem 1rem;
        border-radius: 0.25rem;

- Gebruik nesting om een hover-effect toe te passen op de navigation__link klasse

        background-color: $tertiary-color;

![navbar](/assets/navbar.png)

## Router
- Maak een NotFoundView component aan met de volgende inhoud:

        <template>
            <div>
                <h2>404 - Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </template>

- Zorg ervoor dat dit component getoond wordt wanneer er genavigeerd wordt naar een onbekend path

#### Opmaak
- Gebruik de html-selector voor 1.5rem padding toe te voegen aan het main-element

## Home
- Maak een HomeView component aan met de volgende indhoud:

        <template>
            <div class="home">
                <h1></h1>
                <!-- Add button to navigate to the EventList -->
            </div>
        </template>

- Zorg ervoor dat dit component standaard getoond wordt in het RouterView component
- Maak een data-eigenschap aan met de naam *title* en geef deze de waarde: "Welcome to the EventList App!"
- Toon de waarde van deze eigenschap via databinding in het heading-element van de template
- Voeg een knop toe met de klasse *button*, toon de tekst "View Events" als inhoud van het element.
- Maak een method aan binnen het component met de naam *gotoEvents*
- Zorg dat deze method uitgevoerd wordt wanneer er op de knop geklikt wordt, gebruik hiervoor binding!

#### Opmaak
- Voeg de css klasse *button* toe aan de _components partial
- Gebruik de opmaak van de navigation__link (met uitzondering van de margin) om een mixin aan te maken met de naam *button-base*
- Pas de opmaak van deze mixin toe op zowel de navigation__link als de button klasse
- Zorg dat de tekst van een button vet wordt weergegeven

![home](/assets/home.png)

## Events
- Voeg een EventListView component toe met de volgende inhoud

        <template>
            <div class="eventlist">
                <h2>Upcoming Events</h2>
                <div class="eventlist__container">
                    <!-- Add EventCardComponent here for each event -->
                </div>
            </div>
        </template>

- Maak een Pinia store aan met de naam EventStore
    - Maak een events-array aan
    - Maak een getter met de naam *allEvents* aan
    - Maak een action *fetchEvents* aan die de volgende code bevat:

            if (this.events.length > 0) {
                return;
            }
            this.events = [
              { id: 1, date: "2024-05-28", title: 'Bespreking examen Web Advanced', description: 'Overlopen van het examen', showAs: 'busy' },
              { id: 2, date: "2024-05-29", title: 'Herhalingsoefening maken', description: '', showAs: 'free' },
              { id: 3, date: "2024-05-30", title: 'Blackboard examen', description: 'Upload/download examen toevoegen aan cursus Web Advanced', showAs: 'free' }
              { id: 4, date: "2024-06-13", title: 'Examen', description: '3u tanden bijten', showAs: 'busy' },
              { id: 5, date: "2024-06-14", title: 'Verbeteren', description: 'Hopelijk weinig werk', showAs: 'free' },
              { id: 6, date: "2024-07-01", title: 'Vakantie!', description: 'Hopelijk met veel zon!', showAs: 'free' }
          ];

- Importeer de store in het EventListView component
- Maak een eigenschap aan met de naam *store* die verwijst naar de geïmporteerde Pinia store
- Gebruik de lifecycle hook *mounted()* van het component om de fetchEvents action uit te voeren
- Gebruik de getter *allEvents* van de EventStore in de template om voor elk event een EventCardComponent toe te voegen.

#### Event card
- Maak een EventCardComponent met de volgende inhoud:

        <template>
            <div class="event">
                <div class="event__container">
                    <p class="event__date"></p>
                    <div class="event__info">
                        <h3 class="event__info-title"></h3>
                        <p class="event__info-description"></p> 
                    </div>
                </div>
            </div>
        </template>

- Zorg ervoor dat een event object kan worden doorgegeven vanuit het parent-component
- Gebruik het event object om de verschillende eigenschappen ervan weer te geven in de daarvoor voorziene elementen. Gebruik hiervoor databinding!
- Voorzie een gotoEvent() methode en zorg ervoor dat deze wordt uitgevoerd wanneer er op het div-element met de klasse "event" geklikt wordt.

#### Opmaak
- Gebruik de css klasse "event" en pas door gebruik te maken van nesting de volgende stijlen toe:
    - event__container

            cursor: pointer;
            border: 1px solid $secondary-color;
            display: flex;
            flex-direction: row;
            margin: 1rem 0;
            padding: 1rem;
            border-radius: 10px;

    - event__date

            font-style: italic;
            font-weight: bold;
            padding: 1rem;
            color: $accent-color;

    - event__info

            display: flex;
            flex-direction: column;
            align-items: start;


    - event__info-title 

            margin-bottom: 0.5rem;

![events](/assets/events.png)

#### Details
- Maak een nieuw EventDetailView component aan
- Pas het router object aan zodat dit component getoond wordt bij het path **/events/detail**
- Gebruik onderstaande code als basis voor het component:

        <template>
          <div class="container">
            <form>
                <div class="form-group">
                  <label for="dateInput">Date</label>
                  <input type="date" class="form-control" id="dateInput">
                </div>
                <div class="form-group mt-3">
                  <label for="titleInput">Title</label>
                  <input type="text" class="form-control form-control-lg" id="titleInput">
                </div>
                <div class="form-group mt-3">
                  <label for="descriptionInput">Description</label>
                  <textarea class="form-control" id="descriptionInput" rows="3"></textarea>
                </div>
                <div class="form-group mt-3">
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
          </div>
        </template>

- Voeg onderstaande regel toe aan het head-element van de index.html pagina 

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

- Voeg onderstaande getter toe aan de bestaande Pinia store *EventStore*

        getEvent: (state) => {
            return (id) => state.events.find((event) => event.id === parseInt(id))
        } 

- Voeg onderstaande action toe aan de bestaande Pinia store *EventStore*

        updateEvent(event) {
            // In real life you should update your database here
            console.log("update succesfull!")
        }

- Voeg een computed eigenschap toe met de naam *event*. Deze eigenschap retourneert op basis van een queryparameter *"id"* één enkel object uit de Pinia store door gebruik te maken van de getter *getEvent*. De queryparameter kan worden gebruikt als argument voor de getter.
- Voeg een Vue directive toe aan het form-element zodat dit enkel in de DOM wordt aangemaakt wanneer (lees: als) het *event* object een waarde heeft.
- Gebruik two-way-binding om de verschillende eigenschappen (date, title en description) van het event object weer te geven in de velden van het formulier
- Maak een methode aan *saveEvent* die:
    - de action *updateEvent* van de Pinia store uitvoert
    - terug navigeert naar het EventListView component, gebruik de push of de back methode van het router object
- Overschrijf het standaard gedrag van het formulier en zorg dat de methode *saveEvent* wordt uitgevoerd wanneer het formulier "gesubmit" wordt
- Ga nu terug naar het EventCardComponent en vervolledig de code in de gotoEvent methode zodat er genavigeerd kan worden naar het EventDetailView component. Geef het id van het event waar op geklikt wordt mee als queryparameter aan het router object.

![werking](/assets/werking.gif)