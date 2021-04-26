Token(
Id
Total Supply
Holders
Transfers
Official Site
Decimals
Market Cap
Price
)

TokenHolder(
Id
WalletId(Address kontrolü)
Rank 
Quantity	
Percentage	
Value) 

Wallet (
Id
Balance
BNB Value
)

WalletHolder(
WalletId
TokenId
Token Name
Symbol	Quantity	
)


# GetTokenHolders (https://bscscan.com/token/{0}#balances, tokenContractId)
- Token'daki yüksek holderların "Rank, Address, Quantity, Percentage,	Value" columnlarını alıp db ye anlık tarihe göre kayıt edecek.
# GetTokenHoldersWallet (https://bscscan.com/tokenholdings?a={0}, walletContractId)
- Holderlarin walletlarina girip alinacak data (Token Name,	Symbol	Quantity,	Token Price,	Value in BNB,	  Value in USD)


