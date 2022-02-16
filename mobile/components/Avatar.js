import React from "react";
import { StyleSheet, Image } from "react-native";

function Avatar({uri}) {

  const styles = StyleSheet.create({
    avatar: {
      height: "80px",
      width: "80px",
      borderRadius: "50%",
      marginRight: 10,
    },

  });
  return <Image
    source={{
      uri: uri, 
    }}
    style={styles.avatar}
  />
}

export default Avatar