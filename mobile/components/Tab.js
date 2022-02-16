import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#CCC",
    borderRadius: 10,
    padding: 4,
    alignItems: "center",
    marginBottom: 30
  },
  activeTab: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    width: "45%",
    textAlign: "center",
  },
  inactiveTab: {
    backgroundColor: "#ccc",
    width: "45%",
    textAlign: "center",
  },
  tabText: {
    fontWeight: "bold"
  }

});
function Tab(props) {
  const [activeTab, setActiveTab] = useState("devices");
  const handleTabChanged = (tab) => {
    setActiveTab(tab)
    props.onTabChanged(tab);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={activeTab == "devices" ? styles.activeTab : styles.inactiveTab}
        onPress={() => handleTabChanged("devices")}
      >
        <Text style={styles.tabText}>Devices</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={activeTab == "users" ? styles.activeTab : styles.inactiveTab}
        onPress={() => handleTabChanged("users")} >
        <Text style={styles.tabText}>Users</Text>
      </TouchableOpacity>
    </View >
  )
}

export default Tab