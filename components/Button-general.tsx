import { Pressable } from "react-native";

type Props = {
    children: React.ReactNode;
    onPress: () => void;
};

export const ButtonGeneral = ({ onPress, children }: Props) => {
    return (
        <Pressable onPress={onPress} className="bg-gray-100 rounded-xl p-5">
            {children}
        </Pressable>
    );
};
