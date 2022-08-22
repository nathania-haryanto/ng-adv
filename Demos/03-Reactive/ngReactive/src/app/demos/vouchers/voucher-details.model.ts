import { Account } from './account.model';

export class VoucherDetail {
  ID: number;
  VoucherID: number;
  AccountID: number;
  Account: Account;
  Text: string;
  Amount: number;
  Comment: string;
}
