import { Text, TouchableOpacity } from "react-native";
import React from "react";

import buttonStyles from "./styles";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { handleOnPress, color, icon } = props;

  const styles = buttonStyles({ backgroundColor: color });

  return (
    <TouchableOpacity style={styles.button} onPress={handleOnPress}>
      <Text style={styles.buttonText}>{icon}</Text>
    </TouchableOpacity>
  );
};
