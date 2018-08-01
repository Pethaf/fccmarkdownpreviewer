import React from "react";
import PropTypes from 'prop-types';
import "./Input.css"

const Input = ({content, style, action,id}) => {
    return (
        <textarea style={style}
               id={id}
               value={content} 
               onChange = {action}
               placeholder="Input markdown"/>
        
    );
}


Input.propTypes = {
    content: PropTypes.string.isRequired,
    styling: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired
}

Input.defaultProps = {
    content: "",
    styling: {},
    action: () => {},
    id: ""
}

export default Input 