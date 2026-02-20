export class CreditCard {
  private cardNumber: string;
  protected accountName: string;

  constructor(accountName: string, cardNumber: string) {
    this.accountName = accountName;
    this.cardNumber = cardNumber;
  }

  getAccountName(): string {
    return this.accountName;
  }

  processPayment(amount: number): boolean {
    console.log(`Cutting credit card balance: ${amount} Baht`);
    return true;
  }

  getPaymentFee(amount: number): number {
    return amount * 0.02;
  }
}
