import { ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";
import { Header } from "../components/Header";

export default function Screen() {
    return (
        <ScrollView className="h-screen bg-white">
            <Header />
            <StatusBar style="auto" />
        </ScrollView>
    );
}
