import { VoucherDetail } from './voucher-details.model';

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
