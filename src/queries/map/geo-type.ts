export type Coordinates = {
  lat: number;
  lng: number;
};

export type Address = {
  address: string;
  street: string;
  city: string;
  state?: string;
  postal?: string;
};
