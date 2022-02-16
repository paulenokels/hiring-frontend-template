import React, { useState, useEffect } from "react";
import { FlatList, TextInput } from "react-native";
import DeviceCard from "components/DeviceCard";
import { fetchDevices } from "lib/api";

function DeviceList() {
  const [devices, setDevices] = useState([]);
  const [onPageLoadDevices, setOnPageLoadDevices] = useState([]);
  useEffect(() => {
    fetchDevices().then((res) => {
      setDevices(res.data);
      setOnPageLoadDevices(res.data)
    });
  }, []);

  const filterDevices = (deviceName) => {
    //the API provides support for filtering, but this 
    //can also be done client side for faster experience.
    if (!deviceName) {
      //if search was cleared set devices to on page load values.
      setDevices(onPageLoadDevices);
    }
    else {
      fetchDevices(`?name=${deviceName}`).then((res) => setDevices(res.data));
    }
  }
  return (
    <>
      <TextInput
        placeholder="Search devices"
        onChangeText={(text) => filterDevices(text)}
        style={{height: 40, borderWidth: 1, borderColor: "#ccc", padding: 5, backgroundColor: "white"}}
         />
      <FlatList
        style={{
          backgroundColor: "#EEEEEE",
          padding: "3px",
        }}
        data={devices}
        renderItem={DeviceCard}
        keyExtractor={(x) => x.id}
      />
    </>
  );
}

export default DeviceList;
