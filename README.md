# interactive-map-react

React frontend application that uses react-map-gl library to build interactive map of the states of USA. <br>

## Preparation / Installation

Generate API key from [maptiler](https://www.maptiler.com/). Go to edit and MAKE SURE to add `localhost` under Allowed HTTP Origins <br>
Generate API key from [mapbox](https://www.mapbox.com/) (The key generated in maptiler didn't work for mapbox) <br>
`git clone https://github.com/nmahser/interactive-map-react.git` <br>
Create `config.js` file under `./src` directory and add your api keys as follows: <br>

- export const apiKeyMapBox = YOUR_MAPBOX_API_KEY
- export const apiKeyMapTiller = YOUR_MAPTILLER_API_KEY <br>

(Note: this is not a good practice to hide Api keys. `process.env` didn't work for some reason) <br>

`cd interactive-map-react.git` <br>
`npm install` <br>
`npm start`

### Assumptions / Questions / Findings

- Under the instructions (1.2), it states that "Import the BASIC_STYLE from Style.js and set to state as mapStyle". Why do we need to create state for mapStyle? The state for BASIC_STYLE doesn't seem to be changed
- (https://uber.github.io/react-map-gl/) this doesn't seem to be exist. I used (https://github.com/visgl/react-map-gl) as the documentation
- Income values (usIncome.js) weren't display on the map. Would you want me to implement "hover on map area", where you can see the median incomes for the states? We can also do this for each year
- The api key generated from maptiller was giving key restriction error (403). I spent most of the time to find out the reason. It turned out that I had to add `localhost` under Allowed HTTP Origins in the website. Usually, if there is no http origins written, it means accept all the origins (at least based on my experience). I think it might be useful to add a note about this "situation" in README.md for future reference
