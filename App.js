import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Header from "./components/Header";
import { useForm, Controller } from "react-hook-form";

const Sign = () => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [company, setComapny] = useState([
    { label: "PUCIT", value: "pucit" },
    { label: "UCP", value: "ucp" },
    { label: "UET", value: "uet" },
  ]);
  const [loading, setLoading] = useState(false);
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const onCompanyOpen = useCallback(() => {
    setGenderOpen(false);
  }, []);

  ////////////////////////////////////////
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // console.log(errors, "data");
  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <View style={styles.container}>
      <Header text="Sign In" />
      <Text style={styles.label}>Name</Text>
      <Controller
        name="name"
        defaultValue=""
        control={control}
        rules={{ required: true }}
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <TextInput
            style={[styles.input, { borderColor: error ? "red" : "gray" }]}
            selectionColor={"#5188E3"}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />

      <Text style={styles.label}>Password</Text>
      <Controller
        name="password"
        defaultValue=""
        control={control}
        rules={{ required: true }}
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <TextInput
            style={[styles.input, { borderColor: error ? "red" : "gray" }]}
            secureTextEntry={true}
            selectionColor={"#5188E3"}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      <View>
        <Text style={styles.label}>Gender</Text>
        <Controller
          name="gender"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={[styles.dropdownGender]}>
              <DropDownPicker
                style={[
                  styles.dropdown,
                  { borderColor: error ? "red" : "gray" },
                ]}
                open={genderOpen}
                value={genderValue} //genderValue
                items={gender}
                setOpen={setGenderOpen}
                setValue={setGenderValue}
                setItems={setGender}
                placeholder="Select Gender"
                placeholderStyle={styles.placeholderStyles}
                onOpen={onGenderOpen}
                onChangeValue={onChange}
                zIndex={3000}
                zIndexInverse={1000}
              />
            </View>
          )}
        />

        <Text style={styles.label}>Institute/Organization</Text>
        <Controller
          name="company"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
              <DropDownPicker
                style={styles.dropdown}
                open={companyOpen}
                value={companyValue} //companyValue
                items={company}
                setOpen={setCompanyOpen}
                setValue={setCompanyValue}
                setItems={setComapny}
                placeholder="Select Company"
                placeholderStyle={styles.placeholderStyles}
                loading={loading}
                activityIndicatorColor="#5188E3"
                searchable={true}
                searchPlaceholder="Search your company here..."
                onOpen={onCompanyOpen}
                onChangeValue={onChange}
                zIndex={1000}
                zIndexInverse={3000}
              />
            </View>
          )}
        />
      </View>
      <Text style={styles.label}>Email Address</Text>
      <Controller
        name="email"
        defaultValue=""
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />

      <Text style={styles.label}>Invitation Code</Text>
      <Controller
        name="invitationCode"
        defaultValue=""
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={styles.getStarted}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logIn}>
        <Text style={styles.links}>I have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  getStarted: {
    backgroundColor: "#5188E3",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
});

export default Sign;
