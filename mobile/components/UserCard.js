import React from "react";
import { View, StyleSheet, Text } from "react-native";
import dayjs from "dayjs";
import Avatar from "./Avatar";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: "5px",
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  }

});

function formatDate(date) {
  if (!date) return "";
  return dayjs(date).format("MMM DD hh:mm");
}
function UserStartEndTime({ starts_at, ends_at, device_time_zone }) {
  return (
    <Text>
      {formatDate(starts_at)} - {formatDate(ends_at)}
    </Text>
  );
}

const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

function UserStatus({ status }) {
  const styles = { 
    backgroundColor: statusColors[status], 
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 15,
    textTransform: "uppercase",
    fontWeight: "bold"
   };
  return <Text style={styles}>{status}</Text>;
}

function UserInfo({
  name,
  email,
  status,
  starts_at,
  ends_at,
  device_time_zone 
}) {
  return (
    <View style={{ flexDirection: "column", flex: 2}}>
      <Text style={styles.username}>{name}</Text>
      <Text style={{ color: "#8D8D91", marginTop: 4, marginBottom: 4 }}>{email}</Text>
      <UserStartEndTime
        starts_at={starts_at}
        ends_at={ends_at}
        device_time_zone={device_time_zone}
      />
      <UserStatus status={status} />
    </View>
  );
}

function UserCard({ item: { attributes } }) {
  return (
    <View style={styles.container}>
      <Avatar uri="http://placekitten.com/g/30/30" />
      <UserInfo {...attributes} />
    </View>
  );
}
export default UserCard;
