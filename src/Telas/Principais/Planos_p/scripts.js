const fetchPlans = async () => {
    try {
        const tokenAdm = await AsyncStorage.getItem("userToken");
        //console.log('Fetching plans with tokenAdm:', tokenAdm);
        const response = await fetch("https://apigym-fourdevs.vercel.app/plan", {
            headers: { Authorization: `Bearer ${tokenAdm}` },
        });
        const data = await response.json();
        //console.log('Plans response:', data);
        if (data.success) {
            return data.conteudoJson;
        } else {
            throw new Error(`Erro ao buscar planos: ${data}`);
        }
    } catch (error) {
        console.error("Erro ao buscar planos:", error);
        return false;
    }
};

const fetchStudentDetails = async () => {
    try {
        const userId = await AsyncStorage.getItem("userId");
        const tokenAdm = await AsyncStorage.getItem("userToken");
        //console.log('Fetching student details with userId:', userId, 'and tokenAdm:', tokenAdm);
        const response = await fetch(`https://apigym-fourdevs.vercel.app/student/${userId}`, {
            headers: { Authorization: `Bearer ${tokenAdm}` },
        });
        const data = await response.json();
        //console.log('Student details response:', data);
        if (data.success) {
            return data.conteudoJson;
        } else {
            throw new Error(`Erro ao buscar detalhes do aluno: ${data}`);
        }
    } catch (error) {
        console.error("Erro ao buscar detalhes do aluno:", error);
        return false;
    }
};

export { fetchPlans, fetchStudentDetails };
