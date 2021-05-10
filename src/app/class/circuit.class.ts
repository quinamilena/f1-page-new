export class CCircuit {
  public country: string;
  public lat: string;
  public locality: string;
  public long: string;
  public circuitId: string;
  public circuitName: string;
  public url: string;
  public img: string;

  constructor(
    Country: string,
    Lat: string,
    Locality: string,
    Long: string,
    CircuitId: string,
    CircuitName: string,
    Url: string,
    Img: string
  ) {
    this.country = Country;
    this.lat = Lat;
    this.locality = Locality;
    this.long = Long;
    this.circuitId = CircuitId;
    this.circuitName = CircuitName;
    this.url = Url;
    this.img = Img;
  }
}
