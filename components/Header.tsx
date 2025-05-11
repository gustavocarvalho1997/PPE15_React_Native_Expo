import { SafeAreaView, Text, View } from "react-native";
import { ProfileIcon } from "./ProfileIcon";
import { ButtonIcon } from "./Button-icon";

export const Header = () => {
    return (
        <SafeAreaView className="bg-nubank pt-12">
            <View className="flex-row justify-between items-center px-4">
                <ProfileIcon />
                <View className="flex-row">
                    <ButtonIcon icon="eye-slash" onPress={() => {}} />
                    <ButtonIcon icon="circle-question" onPress={() => {}} />
                    <ButtonIcon icon="message" onPress={() => {}} />
                </View>
            </View>
            <View className="px-4 py-7">
                <Text className="text-white font-bold text-xl">
                    Olá, Clarice
                </Text>
            </View>
        </SafeAreaView>
    );
};
