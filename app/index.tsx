import { ScrollView, Text } from "react-native";

import { StatusBar } from "expo-status-bar";
import { Header } from "../components/Header";
import { ButtonCard } from "../components/Button-card";

export default function Screen() {
    return (
        <ScrollView className="h-screen bg-white">
            <Header />
            <ButtonCard title="Conta" onPress={() => {}}>
                <Text className="text-2xl font-semibold">R$ 1.200,00</Text>
            </ButtonCard>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
