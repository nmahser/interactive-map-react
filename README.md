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
