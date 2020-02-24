import React from 'react'
import Wallet from '../components/Wallet'

const WalletContainer = ({balance, updateBalance}) => {
    return (
        <footer className="wallet">
            <h3>Add cash to your wallet</h3>
            <Wallet balance={balance} updateBalance={updateBalance} />
        </footer>
    )
}

export default WalletContainer