import React from 'react'

const Wallet = ({ balance, updateBalance }) => {
    return (
        <form onSubmit={(e) => updateBalance(e)}>
            <label>Current Balance: ${balance}</label><br></br>
            <label>Add funds $</label>
            <input type="number" name="cash"></input><br></br>
            <input type="submit" value="Update Balance"></input>
        </form>
    )
}

export default Wallet