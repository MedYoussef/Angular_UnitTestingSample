/* tslint:disable:no-unused-variable */

import { ReversePipe } from "./reverse.pipe";
describe('Pipe: ReversePipe', () => {

  // Tester un pipe de manière indépendante des autres componenets
  it('should reverse the inputs', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
