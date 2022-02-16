import React, { useState } from "react";
import { View, StyleSheet, Switch, Text, Image } from "react-native";
import Avatar from "./Avatar";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: "5px",
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stateSwitch: {
    height: 30,
  },
  lockIcon: {
    width: 20,
    height: 20,
    marginRight: 3,
    alignSelf: "center"
  },
  stateTextLocked: {
    alignSelf: "center",
    color: "green",
    textTransform: "capitalize"
  },
  stateTextUnLocked: {
    alignSelf: "center",
    color: "red",
    textTransform: "capitalize"
  },
});

function DeviceInfo({
  name,
  model_number,
  state
}) {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={styles.deviceName}>{name}</Text>
      <Text style={{ color: "#8D8D91" }}>{model_number}</Text>
      <DeviceState state_={state} />
    </View>
  );
}

function DeviceState({ state_ }) {
  const [state, setState] = useState(state_);
  const toggleState = () => {
    if (state == "locked") {
      return setState("unlocked");
    }
    return setState("locked");
  }

  const trackColors = { locked: "green", unlocked: "red"}
  const stateTextStyle = { locked: styles.stateTextLocked, unlocked: styles.stateTextUnLocked}
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", width: 200 }}>
      <Switch
        style={styles.stateSwitch}
        trackColor={trackColors[state]}
        value={state == "locked"}
        onValueChange={toggleState}
      />
      <View style={{ flexDirection: "row" }}>
        {
          state == "locked" ?
            <Image source={require("../assets/icon_lock.png")} style={styles.lockIcon} />
            :
            <Image source={require("../assets/icon_unlock.png")} style={styles.lockIcon} />
        }
        <Text style={stateTextStyle[state]}>{state}</Text>
      </View>
    </View>
  )
}
function DeviceCard({ item: { attributes } }) {
  return (
    <View style={styles.container}>
      <Avatar uri="https://via.placeholder.com/80" />
      <DeviceInfo {...attributes} />
    </View>
  );
}
export default DeviceCard;
