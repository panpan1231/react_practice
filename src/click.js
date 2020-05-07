import React from 'react';
import { render } from '@testing-library/react';

function Action(){
    function Click(e){
        e.preventDefault();
        console.log(e.targer)
    }
    
        return(
            <a href="#" onClick={Click}>HERE</a>
        )
    
}

export default Action