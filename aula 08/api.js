const api = {

   getAddressByPostalCode:  (cep) => {

    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
    
    const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
    }

    return fetch(endpoint, config)
        .then((response)=> response.json());
   }
}