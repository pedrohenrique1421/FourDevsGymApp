export async function HandleNext(matricula, dtNasc) {
    let apiKey = "3f7e9b8d4c1a2e5b7f6a8c3d9e1b7a2c";

    // Verifica se os campos estão preenchidos
    if (matricula.length > 0 && dtNasc.length > 0 && apiKey.length > 0) {
        try {
            console.log("chamando a api...");
            // Faz a requisição à API
            const response = await fetch('https://apigym-fourdevs.vercel.app/adm/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    matricula: matricula,
                    dtNascimento: dtNasc,
                    key: apiKey
                })
            });

            // Processa a resposta da API
            const data = await response.json();
            if (data.success === true) {
                console.log("Login realizado com sucesso", data);
                return false; // Retorna true em caso de sucesso
            } else {
                console.error("Erro ao fazer login", data);
                return false; // Retorna false em caso de erro
            }
        } catch (error) {
            console.error("Erro na requisição", error);
            return false;
        }
    } else {
        console.log("Campos não preenchidos corretamente");
        return false;
    }
}
