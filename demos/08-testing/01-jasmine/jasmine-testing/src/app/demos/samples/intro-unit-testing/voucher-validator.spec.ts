import { VoucherValidator } from './voucher-validator';
import { Voucher } from './voucher.mode';

describe('Class - VoucherValidator', () => {
  let goodvoucher: Voucher;
  let badvoucher: Voucher;
  let nullVoucher: Voucher;

  beforeEach(() => {
    goodvoucher = {
      ID: 2,
      Text: 'BP Tankstelle',
      Date: '2016-11-15T00:00:00',
      Amount: 40,
      Paid: false,
      Expense: false,
      Remark: true,
      Details: [
        {
          ID: 2,
          VoucherID: 3,
          AccountID: 1,
          Text: 'USB Stick',
          Amount: 11,
          Comment: "",
        },
        {
          ID: 7,
          VoucherID: 3,
          AccountID: 6,
          Text: 'Game of Thrones, Season 6',
          Amount: 29,
          Comment: "",
        },
      ],
    };

    badvoucher = {
      ID: 2,
      Text: 'BP Tankstelle',
      Date: '2016-11-15T00:00:00',
      Amount: 650,
      Paid: false,
      Expense: false,
      Remark: true,
      Details: [
        {
          ID: 2,
          VoucherID: 3,
          AccountID: 1,
          Text: 'USB Stick',
          Amount: 11,
          Comment: "",
        },
        {
          ID: 7,
          VoucherID: 3,
          AccountID: 6,
          Text: 'Game of Thrones, Season 6',
          Amount: 55,
          Comment: "",
        },
      ],
    };

    nullVoucher = {
      ID: 2,
      Text: 'BP Tankstelle',
      Date: '2016-11-15T00:00:00',
      Amount: 650,
      Paid: false,
      Expense: false,
      Remark: true,
      Details: [],
    };
  });

  it('returns true when correct data is passed', () =>
    expect(VoucherValidator.validate(goodvoucher)).toEqual(true));
  it('returns false when bad data is passed', () =>
    expect(VoucherValidator.validate(badvoucher)).toEqual(false));

  it('returns false when null is passed as Details', () =>
    expect(VoucherValidator.validate(nullVoucher)).toEqual(false));
});
