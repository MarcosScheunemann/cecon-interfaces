export interface IIuguInvoice {
  // #region Properties (114)

  accountId: string;
  accountName: string;
  advanceFee: any;
  advanceFeeCents: any;
  authorizedAt: any;
  authorizedAtIso: any;
  bankAccountBranch: string;
  bankAccountNumber: string;
  bankSlip: any;
  bankSlipExtraDue: number;
  canceledAt: any;
  canceledAtIso: any;
  ccEmails: any;
  chargebackAt: any;
  chargebackAtIso: any;
  commission: string;
  commissionCents: any;
  createdAt: string;
  createdAtIso: string;
  creditCardBin: any;
  creditCardBrand: any;
  creditCardCapturedAt: any;
  creditCardLast4: any;
  creditCardTid: any;
  creditCardTransaction: string;
  currency: string;
  customVariables: any[];
  customerId: any;
  customerName: any;
  customerRef: any;
  discount: any;
  discountCents: number;
  doublePaymentId: any;
  dueDate: string;
  duplicatedInvoiceId: any;
  earlyPaymentDiscount: boolean;
  earlyPaymentDiscounts: any[];
  email: string;
  estimatedAdvanceFee: any;
  expiredAt: any;
  expiredAtIso: any;
  externalPaymentDescription: any;
  externalPaymentId: any;
  externalReference: any;
  financialReturnDate: any;
  financialReturnDates: any;
  finesOnOccurrenceDay: string;
  finesOnOccurrenceDayCents: number;
  id: string;
  ignoreCanceledEmail: boolean;
  ignoreDueEmail: boolean;
  installments: any;
  interest: any;
  items: any[];
  itemsTotalCents: number;
  latePaymentFine: any;
  latePaymentFineCents: number;
  logs: any[];
  maxInstallmentsValue: any;
  notificationUrl: string;
  occurrenceDate: any;
  orderId: any;
  originalPaymentId: any;
  overpaidCents: any;
  paid: string;
  paidAt: any;
  paidCents: any;
  payableWith: string;
  payerAddressCity: string;
  payerAddressComplement: any;
  payerAddressCountry: string;
  payerAddressDistrict: string;
  payerAddressNumber: string;
  payerAddressState: string;
  payerAddressStreet: string;
  payerAddressZipCode: string;
  payerCpfCnpj: string;
  payerEmail: any;
  payerName: string;
  payerPhone: string;
  payerPhonePrefix: string;
  paymentMethod: any;
  perDayInterest: boolean;
  perDayInterestCents: number;
  perDayInterestValue: any;
  pix: any;
  protestedAt: any;
  protestedAtIso: any;
  refundable: any;
  refundedAt: any;
  refundedAtIso: any;
  refundedCents: number;
  remainingCapturedCents: number;
  returnUrl: string;
  secureId: string;
  secureUrl: string;
  splitId: any;
  splitRules: any;
  status: string;
  taxCents: number;
  taxesPaid: string;
  taxesPaidCents: any;
  total: string;
  totalCents: number;
  totalOnOccurrenceDay: string;
  totalOnOccurrenceDayCents: number;
  totalOverpaid: string;
  totalPaid: string;
  totalPaidCents: number;
  totalRefunded: string;
  transactionNumber: number;
  updatedAt: string;
  userId: any;
  variables: any[];

  // #endregion Properties (114)
}