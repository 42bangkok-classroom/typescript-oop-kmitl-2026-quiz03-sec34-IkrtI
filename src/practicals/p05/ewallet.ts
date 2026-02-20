export class EWallet {
    private walletId: string;
    protected accountName: string;

    constructor(accountName: string, walletId: string) {
        this.accountName = accountName;
        this.walletId = walletId;
    }

    getAccountName(): string {
        return this.accountName;
    }

    processPayment(amount: number): boolean {
        console.log(`Cutting e-wallet balance: ${amount} Baht`);
        return true;
    }

    getPaymentFee(amount: number): number {
        return amount * 0.01;
    }
}
