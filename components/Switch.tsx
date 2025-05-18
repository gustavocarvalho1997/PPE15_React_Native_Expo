import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

type Props = {
    status: boolean;
    onChangeStatus: (newStatus: boolean) => void;
};

export const Switch = ({ status, onChangeStatus }: Props) => {
    const posX = useSharedValue(status ? 50 : 0);
    const backgroundColorBall = useSharedValue(status ? "#ffffff" : "#333333");
    const backgroundColorArea = useSharedValue(status ? "#0099ff" : "#CCCCCC");
    const animationBallStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: posX.value }],
        backgroundColor: backgroundColorBall.value,
    }));
    const animationAreaStyles = useAnimatedStyle(() => ({
        backgroundColor: backgroundColorArea.value,
    }));

    const handlePress = () => {
        posX.value = withTiming(status ? 0 : 50, { duration: 200 });
        backgroundColorBall.value = withTiming(status ? "#333333" : "#ffffff", {
            duration: 200,
        });
        backgroundColorArea.value = withTiming(status ? "#CCCCCC" : "#0099ff", {
            duration: 200,
        });
        onChangeStatus(!status);
    };

    return (
        <Pressable onPress={handlePress}>
            <Animated.View style={[styles.area, animationAreaStyles]}>
                <Animated.View
                    style={[styles.ball, animationBallStyles]}
                ></Animated.View>
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    area: {
        width: 100,
        height: 50,
        backgroundColor: "#CCCCCC",
        borderRadius: 25,
        justifyContent: "center",
        padding: 5,
    },
    ball: {
        width: 40,
        height: 40,
        backgroundColor: "#333333",
        borderRadius: 20,
    },
});
