export interface ICircuit {
  MRData: {
    CircuitTable: {
      season: string;
      Circuits: Array<Circuits>;
    };
  };
}

interface Circuits {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: ILocation;
}

interface ILocation {
  lat: string;
  long: string;
  locality: string;
  country: string;
}
