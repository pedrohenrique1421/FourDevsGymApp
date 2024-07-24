import AsyncStorage from "@react-native-async-storage/async-storage";

export async function checkToken() {
    try {
        const token = await AsyncStorage.getItem("userToken");
        return token !== null; // Retorna true se o token existir
    } catch (error) {
        return false;
    }
}

export async function HandleNext(matricula, dtNasc) {
    let apiKey = "3f7e9b8d4c1a2e5b7f6a8c3d9e1b7a2c";
    let dtNascc = "";
    try {
        dtNascc = formatDate(dtNasc);
    } catch (e) {
        return e;
    }

    if (matricula.length > 0 && dtNasc.length > 0 && apiKey.length > 0) {
        try {
            const response = await fetch("https://apigym-fourdevs.vercel.app/student/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    matricula: matricula,
                    nascimento: dtNascc,
                    key: apiKey,
                }),
            });

            const data = await response.json();

            if (data.success === true) {
                const token = data.conteudoJson.token;
                const userId = data.conteudoJson.usuario.id_aluno;
                if (token && userId) {
                    await AsyncStorage.setItem('userToken', token);
                    await AsyncStorage.setItem('userId', userId.toString());
                    console.log("Login realizado com sucesso", data);
                    return true;
                } else {
                    throw new Error("Token ou ID do aluno ausentes na resposta da API");
                }
            } else {
                throw new Error("matricula e/ou data de nascimento invalidas"); // error principal
            }
        } catch (e) {
            return e;
        }
    } else {
        return new Error("campos invalidos"); // error principal
    }
}

function formatDate(dateString) {
    const dateParts = dateString.split("/");
    if (dateParts.length !== 3) {
        throw new Error("data invalida"); // error principal
    }

    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];

    if (day === "00" || month === "00" || year === "0000") {
        throw new Error("Data inválida");
    }

    const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    return formattedDate;
}
