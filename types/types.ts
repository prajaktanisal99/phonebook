export interface ContactSchema {
  id: number;
  name: string;
  username: string;
  address: AddressSchema;
  phone: string;
  website: string;
  email: string;
  description: string;
  tag: [string];
}

export interface AddressSchema {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface UserSchema {
  name?: string | null ;
  email?: string | null;
  image?: string | null;
}
