import React from 'react'

function Keypad() {
    function changeHandler(e) {
        e.preventDefault()
        console.log(`${e.target.name}: ${e.target.value}`);
    }

    return (
        <form >
            <input onChange={changeHandler} type="password" name="password" placeholder="Entering Password..." value="" />
        </form>
    )
}

export default Keypad;