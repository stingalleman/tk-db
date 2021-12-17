export interface Actors {
  date: string;
  currentDate: string;
  politicians: Politician[];
  parties: Party[];
}

export interface Party {
  id: string;
  date: string;
  slug: string;
  shorthand: string;
  name: string;
  position: number;
  size: number;
}

export interface Politician {
  id: string;
  date: string;
  slug: string;
  name: string;
  partyId?: string;
  firstName: string;
  lastName: string;
  title: string;
  seat?: number;
  profileUrl: string;
  slogan?: string;
}
