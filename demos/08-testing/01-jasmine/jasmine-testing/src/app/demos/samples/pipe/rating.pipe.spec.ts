import { RatingPipe } from './rating.pipe';

describe('Pipe - RatingPipe', () => {
  let p: RatingPipe;

  beforeEach(() => {
    p = new RatingPipe();
  });

  it('creates an instance', () => {
    expect(p).toBeTruthy();
  });

  it('returns ausgezeichnet when 2 is passed', () => {
    expect(p.transform(2)).toEqual('ausgezeichnet');
  });

  it('throws an err when a negative value is passed', () => {
    expect(() => {
      p.transform(-1);
    }).toThrowError('Invalid param');

    expect(() => {
      p.transform(6);
    }).toThrowError('Argument out of range');
  });
});
