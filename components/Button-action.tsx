import { Pressable, View, Text } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

type Props = {
    icon: string;
    label: string;
    onPress: () => void;
    badge?: string;
};

export const ButtonAction = ({ icon, label, onPress, badge }: Props) => {
    return (
        <Pressable onPress={onPress} className="w-24 mx-1">
            <View className="bg-gray-200 size-24 rounded-full justify-center items-center">
                <Icon name={icon} size={24} color="black" />
            </View>
            {badge && (
                <View className="h-6 -mt-6 bg-nubank rounded justify-center items-center">
                    <Text className="text-white text-center font-semibold">
                        {badge}
                    </Text>
                </View>
            )}
            <Text className="text-xs text-center font-bold mt-4">{label}</Text>
        </Pressable>
    );
};
