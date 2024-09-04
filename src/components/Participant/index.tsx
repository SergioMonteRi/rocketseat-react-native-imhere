import { View, Text } from "react-native";
import React from "react";

import { Button } from "../Button";

import { ParticipantProps } from "./types";

import styles from "./styles";

export const Participant = (props: ParticipantProps) => {
  const { name, onDelete } = props;

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>

      <Button handleOnPress={onDelete} icon="-" color="#E23C44" />
    </View>
  );
};
