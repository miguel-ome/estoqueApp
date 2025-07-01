interface CitySchema {
  id: number;
  name: string;
  code: number;
  uf: string;
}

export class City {
  props: CitySchema;

  constructor({ code, id, name, uf }: CitySchema) {
    this.props.id = id;
    this.props.code = code;
    this.props.name = name;
    this.props.uf = uf;
  }

  /////////////
  // Getters
  /////////////
  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get code(): number {
    return this.props.code;
  }

  get uf(): string {
    return this.props.uf;
  }
}
