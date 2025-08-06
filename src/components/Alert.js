import React from 'react'

export default function Alert(props){

    const capitalize=(word)=>{
        const cap=word.charAt(0).toUpperCase()+word.slice(1);
        return cap;
    }

    return(
        <div style={{height:"45px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{padding: "8px"}} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>}
        </div>
    );
}