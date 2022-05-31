import {View, Text, StyleSheet, Button} from 'react-native';

import React, {useState} from 'react';

const App = () => {
  const [outputText, setOutputText] = useState({
    word: 'No Clicks yet!',
    count: '',
  });
  return (
    <View>
      <Text style={styles.container}>
        {outputText.count + ' ' + outputText.word}
      </Text>
      <Button
        title="Change Text"
        onPress={() => {
          setOutputText(prev => {
            if (prev >= '0') {
              return {word: 'Number of clicks', count: ++prev.count};
            } else {
              return {word: 'Number of clicks', count: 0};
            }
          });
        }}
      />
      <Button
        style={styles.space}
        title="Reset"
        onPress={() => {
          setOutputText(prev => {
            return {
              count: '',
              word: 'No clicks yet!',
            };
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderColor: 'grey',
    borderWidth: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 30,
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'skyblue',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  space: {
    marginTop: 80,
  },
});

export default App;
