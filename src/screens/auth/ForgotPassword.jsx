import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ForgotPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Forgot Coffee Password?</Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder="Enter email" />
          </View>
          <View>
            {loading ? (
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => setLoading(!loading)}
              >
                <ActivityIndicator color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => setLoading(!loading)}
              >
                <Text style={styles.loginText}>RESET</Text>
              </TouchableOpacity>
            )}
          </View>
          <View>
            <Text style={styles.accountQues}>
              Recall password?{" "}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loginForm: {
    width: 400,
    padding: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 15,
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  accountQues: {
    marginTop: 20,
  },
  signupLink: {
    fontWeight: "bold",
  },
});

export default ForgotPassword;
