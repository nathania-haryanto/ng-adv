import { VoucherDetail } from './voucher-details.model';

export class Account {
  ID: number;
  Name: string;
  Expense: boolean;
  VoucherDetails: VoucherDetail[];
}
