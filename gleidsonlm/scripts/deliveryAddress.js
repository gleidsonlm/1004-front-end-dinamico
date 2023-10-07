export async function deliveryAddress() {
    // retrieve cep from localStorage
    // localStorage.setItem('churrascometroFormData', JSON.stringify(formData));
    const cep = JSON.parse(localStorage.getItem('churrascometroFormData')).postalCode;
    
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
    const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        // no cors
        mode: "cors",
    }

    return new Promise(async (resolve, reject) => {
        const response = await fetch(endpoint, config);
        const dados = await response.json();

        console.log(dados)
        if (dados.erro === true) {
            reject("CEP não encontrado.");
        } 
        resolve(dados);
    });
}