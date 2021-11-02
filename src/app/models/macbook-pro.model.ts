export interface Priceable {
  value: string;
  price: number;
}

export interface Photoable extends Priceable {
  photo: string;
}

export interface Colorable extends Priceable, Photoable {
  color: string;
}

export class MacbookPro {

  constructor(
    public name: Priceable[],
    public color: Colorable[],
    public chip: Photoable[],
    public memory: Priceable[],
    public storage: Priceable[],
  ) { }

}
