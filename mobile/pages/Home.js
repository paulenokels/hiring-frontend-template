import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import UserList from "./UserList";
import DeviceList from "./DeviceList";
import Tab from "../components/Tab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    padding: 8,
    paddingTop: 25,
    height: "100%",
  },

});
function Home() {
  const [page, setPage] = useState("devices");
  const onTabChanged = (page) => {
    setPage(page)
  }
  return (
    <View style={styles.container}>
      <Tab onTabChanged={onTabChanged}/>
      { page == "devices" ? <DeviceList /> : <UserList /> }
    </View>
  );
}

export default Home;
