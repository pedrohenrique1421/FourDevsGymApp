import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StatusBar, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import NavBar_c from "../../../Components/NavBar";

export default function Perfil_p({ chaves }) {
    const navigation = useNavigation();
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const userId = await AsyncStorage.getItem("userId");
                const userToken = await AsyncStorage.getItem("userToken");

                if (userId && userToken) {
                    const response = await fetch(`https://apigym-fourdevs.vercel.app/student/${userId}`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                        },
                    });
                    const userData = await response.json();
                    if (userData.success) {
                        setStudentData(userData.conteudoJson);
                    } else {
                        console.error("Failed to fetch student data");
                    }
                }
            } catch (error) {
                console.error("Error fetching student data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
                <View
                    style={[
                        styles.cpContainer,
                        {
                            backgroundColor: Global_Colors.BW_PRIMARY_COLOR,
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        },
                    ]}
                >
                    <ActivityIndicator size="large" color={Global_Colors.PRIMARY_COLOR} />
                    <Text style={styles.loading}>Carregando...</Text>
                </View>
            </SafeAreaView>
        );
    }
    const formatDate = (datetime) => {
        const match = datetime.match(/^(\d{2}\/\d{2}\/\d{4})/);
        return match ? match[1] : datetime;
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Perfil_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                {studentData ? (
                    <>
                        <View>
                            <Text style={styles.cpTitle}>{studentData.nome}</Text>
                            <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Email: {studentData.email}</Text>
                            <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Data de Início na Academia: {formatDate(studentData.data_criacao)}</Text>
                        </View>
                    </>
                ) : (
                    <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Carregando...</Text>
                )}
            </View>
        </SafeAreaView>
    );
}
