//HANDLES RENDERING OF FISHLIST

import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = "<ul>"

    for (const fish of fishes) {
        fishHTML += `<li>${fish.name}</li>`
    }

    fishHTML += "</ul>"

    return fishHTML
};