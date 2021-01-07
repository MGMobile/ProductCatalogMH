import React from 'react';
import {StyleSheet, View, Text, Button, TextInput, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';

class SearchBar extends React.Component {
    state = {
        valeur: ''
    }

    handleChange = (evt) => {
        this.setState({valeur:evt})
    }

    render(){
        return (
            <View>
                <TextInput value={this.state.valeur} onChangeText={this.handleChange}  />
                <Button title="OK" onPress={() => this.props.fct(this.state.valeur)} />
            </View>
        )
    }
}

export default SearchBar;