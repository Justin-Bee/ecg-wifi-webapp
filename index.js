// index.js
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import { API, graphqlOperation } from 'aws-amplify';
const ListEntries = `
    query {
      listBooks {
        items {
          serialNumber adc temp
        }
      }
    }
    `;

export default class App extends React.Component {
    state = {
        serialNumber: '',
        adc: '',
        temp: '',
    };
    async componentDidMount() {
        try {
            const books = await API.graphql(graphqlOperation(ListEntries));
            console.log('books: ', books);
            this.setState({ books: books.data.listEntries.items });
        } catch (err) {
            console.log('error: ', err);
        }
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };

    render() {
        return (
            <View style={styles.container}>

                <Button title="Add to TBR" color="#eeaa55" />
                {this.state.books.map((book, index) => (
                    <View key={index} style={styles.book}>
                        <Text style={styles.title}>{book.serialNumber}</Text>
                        <Text style={styles.author}>{book.adc}</Text>
                        <Text style={styles.author}>{book.temp}</Text>
                    </View>
                ))}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 50
    },
    input: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        marginVertical: 10
    },
    book: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10
    },
    title: { fontSize: 16 },
    author: { color: 'rgba(0, 0, 0, .5)' }
});