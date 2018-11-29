import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    placeholderProductLogo: {
        height: '80px',
        width: 'auto'
    }
  });

class ProductLogo extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            /* PLACEHOLDER IMAGE: please use the correct company or product logo here */
            <img className={classes.placeholderProductLogo} 
                src="https://image.ibb.co/nuN8Re/12.jpg" 
                alt="Company or Product Logo" 
                border="0"
            />
        );
    }
}

export default withStyles( styles )( ProductLogo );