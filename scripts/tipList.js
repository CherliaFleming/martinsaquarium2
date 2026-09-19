//HANDLES RENDERING OF CARE TIPS 
import { database } from './aquariumData.js';

export const tipList = () => {
    // Generate an HTML representation of each tip
    let tipHTML = "<ul>"

    for (const tip of tips) {
        tipHTML += `<li> class="tip">${tip.topic}: ${tip.text}</li>`
    }

    tipHTML += "</ul>"

    return tipHTML
};