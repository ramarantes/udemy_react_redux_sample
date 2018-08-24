import React from 'react';
//state argument is not the application state, its only the state that the reducer controls
export default function(state,action)
{
    var x = 0;
    if(state != null)
    {
        x = state += 1;
    }
    return(
        x
    );
}