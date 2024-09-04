import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Alert } from "react-native";

import { Button } from "../../components/Button";
import { Participant } from "../../components/Participant";

import { ParticipantType } from "./types";

import styles from "./styles";

export const Home = () => {
  const [participantName, setParticipantName] = useState<string>("");
  const [participantsList, setParticipantsList] = useState<ParticipantType[]>(
    []
  );

  const deleteParticipant = (name: string) => {
    setParticipantsList(
      participantsList.filter((participants) => participants.name !== name)
    );
    Alert.alert("Sucesso", "Participante deletado com sucesso");
  };

  const handleParticipantAdd = (name: string) => {
    if (!name) {
      return Alert.alert("Atenção", "Nome do participante é obrigatório");
    }
    
    if (participantsList.some((participant) => participant.name === name)) {
      return Alert.alert("Atenção", "Participante já cadastrado");
    }

    setParticipantsList([...participantsList, { name }]);
    setParticipantName("");
  };

  const handleParticipantDelete = (name: string) => {
    Alert.alert("Atenção", `Deseja realmente deletar o participante ${name}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Deletar",
        onPress: () => deleteParticipant(name),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Segunda, 19 de Agosto</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input }
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          value={participantName}
          onChangeText={setParticipantName}
        />

        <Button
          handleOnPress={() => handleParticipantAdd(participantName)}
          icon="+"
          color="#06D722"
        />
      </View>

      <FlatList
        data={participantsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Participant
            name={item.name}
            onDelete={() => handleParticipantDelete(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nenhum participante cadastrado</Text>
        )}
      />
    </View>
  );
};
