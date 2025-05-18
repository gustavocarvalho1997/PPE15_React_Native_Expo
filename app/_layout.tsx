import { Tabs } from "expo-router";
import Icon from "@expo/vector-icons/FontAwesome6";
import "../global.css";

export default function RootLayout() {
    return (
        <Tabs initialRouteName="index">
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: true,
                    headerTitle: "Nubank",
                    tabBarLabel: "Nubank",
                    tabBarIcon: ({ color }) => (
                        <Icon name="house" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="to-do"
                options={{
                    headerShown: true,
                    headerTitle: "To Do",
                    tabBarLabel: "To Do",
                    tabBarIcon: ({ color }) => (
                        <Icon name="list" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="switch"
                options={{
                    headerShown: true,
                    headerTitle: "Switch",
                    tabBarLabel: "Switch",
                    tabBarIcon: ({ color }) => (
                        <Icon name="toggle-on" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
