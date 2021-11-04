import React from 'react'

function EyesOnMe() {
    function focusHandler(e) {
        // console.log(`${e.target.name}: ${e.target.value}`);
        console.log('Good!')
    }
    return (
        <>
            <button onFocus={focusHandler} onBlur={(e) => { console.log('Hey! Eyes on me!'); }}>Eyes on me</button>
            {/* <button onBlur={(e) => { console.log('Hey! Eyes on me!'); }}>Lose Focus</button> */}
        </>
    )
}



export default EyesOnMe;