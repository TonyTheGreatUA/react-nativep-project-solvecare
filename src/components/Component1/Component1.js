import React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './Component1.style';

type Props = {
  handleCardInput: (name: string) => any,
  handleSubmit: () => void,
  isSubmitClicked: boolean,
  isEditable: boolean,
  isError: boolean,
};

const Component1 = ({
  setCreditCardNumber,
  setCVV,
  setExpirationDate,
  setFirstName,
  setLastName,
  setSecretQuestion,
  setSecretAnswer,
  isError,
  handleSubmit,
  handleCardInput,
  isEditable,
  isSubmitClicked,
}: Props) => {
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View>
          <TextInput
            editable={isEditable}
            style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
            placeholder="0000 0000 0000 0000"
            onChangeText={val => setCreditCardNumber(val)}
          />
          <View style={styles.cardLine}>
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="MM/YY"
              onChangeText={val => setExpirationDate(val)}
            />
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="CVV/CVC"
              onChangeText={val => setCVV(val)}
            />
          </View>
          <View style={styles.cardLine}>
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Name"
              onChangeText={val => setFirstName(val)}
            />
            <TextInput
              editable={isEditable}
              style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
              placeholder="Your Surname"
              onChangeText={val => setLastName(val)}
            />
          </View>
          <TextInput
            editable={isEditable}
            style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
            placeholder="Your Secret Question"
            onChangeText={val => setSecretQuestion(val)}
          />
          <TextInput
            editable={isEditable}
            style={[styles.inputText, isError ? styles.inputError : styles.inputDefault]}
            placeholder="Your Secret Answer"
            onChangeText={val => setSecretAnswer(val)}
          />
          <TouchableOpacity
            disabled={isSubmitClicked}
            activeOpacity={0.2}
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Component1;
