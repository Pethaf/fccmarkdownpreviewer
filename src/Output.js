import React from "react";
import PropTypes from "prop-types"; 
import "./Output.css";
const Output = ({content, styling,id}) => {
    let out = {__html: content}
    return (
        <div id={id} dangerouslySetInnerHTML={{ __html: content }}/>
    );
}
Output.propTypes = {
    content: PropTypes.string.isRequired,
    styling: PropTypes.object.isRequired,
}

Output.defaultProps = {
    content: "Output",
    styling: {},
    id:""
}

export default Output;