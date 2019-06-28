import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as Colors from '@pxblue/colors';
import PropTypes from 'prop-types';

export default class MatButton extends React.Component {
    _getButtonStyle() {
        if (this.props.type === 'clear') {
            return null;
        }
        else if (this.props.type === 'solid') {
            switch (this.props.color) {
                case 'primary':
                    return styles.primarySolidButton;
                case 'secondary':
                    return styles.secondarySolidButton;
                default:
                    return styles.defaultSolidButton;
            }
        }
        else if (this.props.type === 'outline') {
            switch (this.props.color) {
                case 'primary':
                    return styles.primaryOutlineButton;
                case 'secondary':
                    return styles.secondaryOutlineButton;
                default:
                    return styles.defaultOutlineButton;
            }
        }
    }
    _getTitleStyle(){
        if (this.props.type === 'clear' || this.props.type === 'outline') {
            switch (this.props.color) {
                case 'primary':
                    return styles.primaryTitle;
                case 'secondary':
                    return styles.secondaryTitle;
                default:
                    return styles.defaultTitle;
            }
        }
        else if (this.props.type === 'solid') {
            return styles.whiteTitle;
        }
        return null;
    }
    render() {
        const { ...props } = this.props;
        return (
            <Button
                {...props}
                buttonStyle={[
                    this._getButtonStyle(),
                    props.buttonStyle
                ]}
                titleStyle={[
                    this._getTitleStyle(),
                    props.titleStyle
                ]}
            />
        );
    }
}
MatButton.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'default']),
    type: PropTypes.oneOf(['solid','outline','clear'])
}
MatButton.defaultProps = {
    color: 'default',
    type: 'solid'
};


const styles = StyleSheet.create({
    defaultSolidButton: {
        backgroundColor: Colors.gray['500']
    },
    defaultOutlineButton: {
        borderWidth: 1,
        borderColor: Colors.gray['500']
    },
    primarySolidButton: {
        backgroundColor: Colors.blue['500']
    },
    primaryOutlineButton: {
        borderWidth: 1,
        borderColor: Colors.blue['500']
    },
    secondarySolidButton: {
        backgroundColor: Colors.lightBlue['500']
    },
    secondaryOutlineButton: {
        borderWidth: 1,
        borderColor: Colors.lightBlue['500']
    },
    defaultTitle:{
        color: Colors.gray['500']
    },
    primaryTitle:{
        color: Colors.blue['500']
    },
    secondaryTitle:{
        color: Colors.lightBlue['500']
    },
    whiteTitle:{
        color: 'white'
    }

});