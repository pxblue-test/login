import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import * as Colors from '@pxblue/colors';

export default class MatTextfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        }
    }
    _onFocus(evt){
        this.setState({focused: true});
        if(this.props.onFocus){
            this.props.onFocus(evt);
        }
    }
    _onBlur(evt){
        this.setState({focused: false});
        if(this.props.onBlur){
            this.props.onBlur(evt);
        }
    }
    render() {
        const { label, onBlur, onFocus, ...props } = this.props;
        const { focused } = this.state;

        return (
            <Input
                {...props}
                label={focused || props.value.length > 0 ? label : ' '}
                containerStyle={[styles.container, props.containerStyle]}
                inputContainerStyle={[
                    styles.inputContainer,
                    (props.errorMessage && props.errorMessage.trim() !== '' ? styles.errorLine : props.value ? styles.blueLine : {})
                ]} 
                labelStyle={[
                    styles.label, 
                    (props.errorMessage && props.errorMessage.trim() !== '' ? styles.error : props.value ? styles.blue : {}), 
                    props.labelStyle]}
                inputStyle={[
                    styles.input,
                    (props.errorMessage && props.errorMessage.trim() !== '' ? styles.error : {}), 
                    props.inputStyle
                ]}
                errorStyle={[styles.errorMessage, props.errorStyle]}
                underlineColorAndroid={'transparent'}
                placeholder={!focused ? label : ''}
                onFocus={(evt) => this._onFocus(evt)}
                onBlur={(evt) => this._onBlur(evt)}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 0,
    },
    label:{
        color: Colors.black['500'],
        fontWeight: '400'
    },
    inputContainer:{
        borderBottomWidth: 1,
        borderBottomColor: Colors.black['500']
    },
    input:{
        fontSize: 16
    },
    error:{
        color: Colors.red['500']
    },  
    errorLine:{
        borderBottomColor: Colors.red['500'],
    },
    blue:{
        color: Colors.blue['500']
    },
    blueLine:{
        borderBottomColor: Colors.blue['500']
    },
    errorMessage:{
        color: Colors.red['500'],
        marginHorizontal: 0,
    }
  });