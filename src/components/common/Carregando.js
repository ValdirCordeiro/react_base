import React from 'react';
import gif from '../../resources/images/carregando2.gif';

export default function Carregando() {
    return (
        <img src={gif} alt="Carregando" width="100" height="100" style={css}/>
    )
}

const css = {
    marginRight: "auto",
    marginLeft: "auto"   
}
