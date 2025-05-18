import { Text, View } from "react-native";
import { Switch } from "../components/Switch";
import { useState } from "react";

export default function Screen() {
    const [status, setStatus] = useState(false);
    const handleChangeStatus = (newStatus: boolean) => {
        setStatus(newStatus);
    };
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Text>STATUS: {status ? "ON" : "OFF"}</Text>
            <Switch status={status} onChangeStatus={handleChangeStatus} />
        </View>
    );
}
