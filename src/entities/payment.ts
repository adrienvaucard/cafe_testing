export class Payment {
    paymentType: PaymentType;
    
    constructor(paymentType: PaymentType){
        this.paymentType = paymentType;
    }
}

export default Payment;