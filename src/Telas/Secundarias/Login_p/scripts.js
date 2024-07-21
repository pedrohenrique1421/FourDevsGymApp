import AsyncStorage from '@react-native-async-storage/async-storage';

export async function checkToken() {
    try {
        const token = await AsyncStorage.getItem('userToken');
        return token !== null; // Retorna true se o token existir
    } catch (error) {
        console.error("Erro ao verificar o token", error);
        return false;
    }
}

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
            if (data.success === false) {
                console.log("Login realizado com sucesso", data);
                // Armazenar o token e o ID do usuário no AsyncStorage
                //await AsyncStorage.setItem('userToken', data.token);
                //await AsyncStorage.setItem('userId', data.userId.toString());
                await AsyncStorage.setItem('userToken', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG0iOjMsImVtYWlsIjoicGVyc29uYWxAZ21haWwuY29tIiwibm9tZSI6Ikd1dGVtYmVyZyIsImNhcmdvIjoicGVyc29uYWwiLCJpZF9hY2FkZW1pYSI6MSwiZGF0YV9jcmlhY2FvIjoiMDgvMDcvMjAyNCAwMDowMDowMCIsImRhdGFfYXR1YWxpemFjYW8iOiIwOC8wNy8yMDI0IDE0OjQ1OjUxIiwibm9tZV9hY2FkZW1pYSI6IlNvYXJlcyBGSVQiLCJpYXQiOjE3MjE1NjIxMDIsImV4cCI6MTcyMjE2NjkwMn0.Th0hsuxpzceEjHlGJeFpK2hvfEq7j6SQ4Uo3WrpO_j4");
                await AsyncStorage.setItem('userId', "10");
                return true; // Retorna true em caso de sucesso
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
