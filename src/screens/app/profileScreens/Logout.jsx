import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ModalSheet from "../../../components/ModalSheet";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/reducers/authReducer";

const Logout = ({ showLogoutModal, onCloseCancel }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    setLoading(true);
    try {
      dispatch(logout());
    } catch (error) {
      console.error("error loging outt of app", error);
    }
  };

  return (
    <ModalSheet
      // animationType="slide"
      show={showLogoutModal}
      onClose={onCloseCancel}
    >
      <View style={styles.modalContent}>
        <View style={styles.content}>
          <View style={styles.icon}>
            <AntDesign name="exclamationcircleo" size={80} color="red" />
          </View>
          <View style={styles.cancelDetails}>
            <Text style={styles.cancelHeader}>Logout Account</Text>
            <Text style={styles.cancelBody}>
              Are you sure you want to logout from your account?
            </Text>
          </View>
          {loading ? (
            <TouchableOpacity style={styles.cancelReservationBtnOpacity}>
              <ActivityIndicator color="red" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.cancelReservationBtnOpacity}
              onPress={logoutHandler}
            >
              <Text style={styles.cancelReservationBtn}>Logout</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ModalSheet>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "100%",
    width: "100%",
  },
  content: {
    padding: 15,
  },
  titleContainer: {
    height: "6%",
    backgroundColor: "whitesmoke",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  cancelHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 30,
  },
  cancelBody: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
    color: "grey",
  },
  cancelReservationBtnOpacity: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 20,
    borderColor: "red",
    marginTop: 40,
  },
  cancelReservationBtn: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    color: "red",
  },
});

export default Logout;
