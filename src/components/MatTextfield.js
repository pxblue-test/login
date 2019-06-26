import React from 'react';
import { Input } from 'react-native-elements';

class MatTextfield extends React.Component {
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
                containerStyle={{ paddingHorizontal: 0, ...props.containerStyle }}
                placeholder={!focused ? label : ''}
                onFocus={(evt) => this._onFocus(evt)}
                onBlur={(evt) => this._onBlur(evt)}
            />
        );
    }
}
export default MatTextfield;