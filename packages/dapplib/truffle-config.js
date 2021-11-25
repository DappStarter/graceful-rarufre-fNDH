require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind equip include private orient slender'; 
let testAccounts = [
"0xb6b2fe43ea2f71eb9ba0bf10f89698e9f589a4ed665058045c5eb6b1c205acb9",
"0xea795fe5e4b37351e1b17577afb7d7e03dffc61c3e25932e8f097c2476a8b233",
"0xae140d63160ba1f4301929eda5be803e1788a135599ed3702b5bae2a88d6befd",
"0x1da760ac7287549029c10088ec8aa0a5aa9d5db30619638cf1996bb3182d7747",
"0xa97a2a68191d64167d66ac860feda7f9924b2632f9c16af6b4b9a1d80193a41d",
"0x3f9524f7b8da5bccef90e97090beb066307d3d3f6b65da59363651abdab3e8ed",
"0xc6225a3637df2fb34559ab174aef76bfc856eb81756c067364b6ee2cf153c1d5",
"0x5d29a8ee2e3a7aff7b4ca1bd3a2fc20ae6443f25062ac536645e44efd8087c89",
"0x6c907d3ddcc43e236148f008d922776002963b194953c5441a82227eec500723",
"0x0d4d49179c69b9e217127d0f3fc05dd181a67bdd05e1d85683db07ed99b0208f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

