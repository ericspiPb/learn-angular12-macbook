import { Product } from '../interfaces/product.interface';

export class MacbookPro implements Product {

  constructor(
    public price: number,
    public color: string,
    public chip: string,
    public display: number,
    public memory: string,
    public storage: string,
  ) { }

}
