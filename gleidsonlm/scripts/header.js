const title = () => {
    const title = document.createElement("h1");
    title.innerText = "Churrascômetro";
    title.classList.add("card-header", "flex-grow-1");
    return title;
};

const logo = () => {
    const logo = document.createElement("img");
    logo.src = "./assets/logo.png";
    logo.alt = "Logo";
    logo.width = "100";
    logo.height = "100";
    logo.classList.add("float-start", "rounded");
    return logo;
};

export const header = () => {
    const header = document.createElement("header");
    header.classList.add("header", "flex", "flex-row", "align-items-center", "card");
    header.appendChild(logo());
    header.appendChild(title());
    return header;
};
