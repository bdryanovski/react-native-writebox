import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


import Writebox from 'rn-writebox'
import faker from 'faker'

const NUMBER_OF_ITEMS = 20

export default class App extends React.Component {

  renderItem(item) {
    const color = this.randomColor();
    return (
      <View style={ [ styles.item, { backgroundColor: color } ] }>
        <Text key={item}>
          { faker.lorem.paragraphs() }
        </Text>
      </View>
    )
  }

  randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

  }

  render() {
    const items = new Array(NUMBER_OF_ITEMS).fill(1).map((value, index) => { return index + 1 })

    return (
      <Writebox
        inputLimit={150}
        onFocus={ () => { console.log('Input is on focus ...') } }
        onBlur={ () => { console.log('Input lost focus ...') } }
        onSubmit={ (data) => { console.log('Input submit ', data) } }
        submitLabel={ 'Send' }
        placeholder={ 'Write here ...' }
        clearOnSubmit={ true }
      >
        <View style={styles.container}>
          <FlatList
            data={ items }
            keyExtractor={ item => item }
            renderItem={this.renderItem.bind(this)}
          />
        </View>
      </Writebox>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderColor: '#FFFFFF',
  }
});
