import { optionsBeer } from "./optionsBeer.js";
import { optionsCoal } from "./optionsCoal.js";
import { optionsGarlicBread } from "./optionsGarlicBread.js";
import { optionsIce } from "./optionsIce.js";
import { optionsMeat } from "./optionsMeat.js";
import { optionsSalt} from "./optionsSalt.js";
import { optionsSoda } from "./optionsSoda.js";
import { optionsWater } from "./optionsWater.js";

export const sectionOptions = () => {
    const optionsSection = document.createElement("section");
    optionsSection.id = "sectionOptions";
    optionsSection.classList.add("options", "flex", "flex-column", "align-items-center", "card", "p-2", "m-2");
    optionsSection.classList.add("d-none","fade-animation");
    optionsSection.appendChild(optionsTitle());
    optionsSection.appendChild(optionsText());
    optionsSection.appendChild(optionsSectionOptions());
    return optionsSection;
};

const optionsTitle = () => {
    const optionsTitle = document.createElement("h2");
    optionsTitle.innerText = "Opções";
    optionsTitle.classList.add("card-title");
    return optionsTitle;
};
const optionsText = () => {
    const optionsText = document.createElement("p");
    optionsText.innerText = "Selecione as opções do seu churrasco.";
    optionsText.classList.add("card-text");
    return optionsText;
};
const optionsSectionOptions = () => {
    const optionsSectionOptions = document.createElement("section");
    optionsSectionOptions.classList.add("options", "flex", "flex-column",  "card");
    optionsSectionOptions.appendChild(optionsMeat());
    optionsSectionOptions.appendChild(optionsGarlicBread());
    optionsSectionOptions.appendChild(optionsCoal());
    optionsSectionOptions.appendChild(optionsSalt());
    optionsSectionOptions.appendChild(optionsIce());
    optionsSectionOptions.appendChild(optionsSoda());
    optionsSectionOptions.appendChild(optionsWater());
    optionsSectionOptions.appendChild(optionsBeer());

    return optionsSectionOptions;
};
