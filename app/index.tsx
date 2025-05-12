import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/Header";
import { ButtonCard } from "../components/Button-card";
import { ButtonAction } from "../components/Button-action";
import Icon from "@expo/vector-icons/FontAwesome6";
import { ButtonGeneral } from "../components/Button-general";

export default function Screen() {
    return (
        <ScrollView className="h-screen bg-white">
            <Header />
            <ButtonCard title="Conta" onPress={() => {}}>
                <Text className="text-2xl font-semibold">R$ 1.200,00</Text>
            </ButtonCard>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="px-3"
            >
                <ButtonAction icon="pix" label="Pix" onPress={() => {}} />
                <ButtonAction icon="barcode" label="Pagar" onPress={() => {}} />
                <ButtonAction
                    icon="hand-holding-dollar"
                    label="Pegar Emprestado"
                    badge="R$ 12.300"
                    onPress={() => {}}
                />
                <ButtonAction
                    icon="money-bill-transfer"
                    label="Transferir"
                    onPress={() => {}}
                />
                <ButtonAction
                    icon="wallet"
                    label="Depósito"
                    onPress={() => {}}
                />
            </ScrollView>
            <View className="px-4 py-6">
                <ButtonGeneral onPress={() => {}}>
                    <View className="flex-row items-center">
                        <Icon name="credit-card" size={28} color="black" />
                        <Text className="ml-4 text-lg font-semibold">
                            Meus Cartões
                        </Text>
                    </View>
                </ButtonGeneral>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="px-3"
            >
                <View className="w-80 mr-4">
                    <ButtonGeneral onPress={() => {}}>
                        <View className="flex-row flex-wrap gap-x-1">
                            <Text className="text-lg">Você tem</Text>
                            <Text className="text-lg font-semibold">
                                R$ 12.300,00
                            </Text>
                            <Text className="text-lg">
                                disponíveis para empréstimo
                            </Text>
                        </View>
                    </ButtonGeneral>
                </View>
                <View className="w-80">
                    <ButtonGeneral onPress={() => {}}>
                        <Text className="text-lg font-semibold text-nubank">
                            Guarde seu dinheiro aqui
                        </Text>
                        <Text className="text-lg">Toque para saber mais</Text>
                    </ButtonGeneral>
                </View>
            </ScrollView>

            <View className="h-1 bg-gray-100 mt-8" />

            <ButtonCard title="Cartão de crédito" onPress={() => {}}>
                <Text className="text-xl text-gray-500">Fatura atual</Text>
                <Text className="text-2xl font-semibold">R$ 1.094,00</Text>
                <Text className="text-xl text-gray-500">
                    Limite disponível: R$ 5.000,00
                </Text>
            </ButtonCard>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
