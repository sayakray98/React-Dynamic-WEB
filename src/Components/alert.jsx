import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
      const text = word.toLowerCase()
      return text.charAt(0).toUpperCase() + text.slice(1)
    }
    return (
        

            props.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
       
    )
}