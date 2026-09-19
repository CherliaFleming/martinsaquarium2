//HANDLES RENDERING OF LOCATION LIST 

import { database } from './aquariumData.js';

export const locationList = () => {
    // Generate an HTML representation of each location
    let locationHTML = "<section>"

    for (const location of locations) {
        locationHTML += `<article class="locations">${location.name}</article>`
    }

    locationHTML += "</section>"

    return locationHTML
};