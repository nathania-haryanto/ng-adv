export class Voucher {
  ID: number;
  Text: string;
  Date: string;
  Amount: number;
  Paid: boolean;
  Expense: boolean;
  Remark?: boolean;
  Readonly?: boolean;
  Details?: VoucherDetail[];
  Label?: string;
}

export class VoucherDetail {
  ID: number;
  VoucherID: number;
  AccountID: number;
  Account: Account;
  Text: string;
  Amount: number;
  Comment: string;
}

export class Account {
  ID: number;
  Name: string;
  Expense: boolean;
  VoucherDetails: VoucherDetail[];
}
