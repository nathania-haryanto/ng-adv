import { Voucher } from './voucher.mode';

export class VoucherValidator {
  static validate(voucher: Voucher) {
    let detailSumOk = false;
    if (voucher.Details != null) {
      let sumD = 0;
      for (const vd of voucher.Details) {
        sumD += vd.Amount;
      }
      detailSumOk = sumD == voucher.Amount;
    }
    return detailSumOk;
  }
}
