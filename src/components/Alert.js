import React from 'react'

function Alert(props) {
    return (
        <div style={{height: '50px'}} className="m-2">
           { props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>


            </div>}
            </div>
            )
}

            export default Alert
