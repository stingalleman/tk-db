export interface Overview {
  currentDate: string;
  days: { [key: string]: Day };
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Day {
  locationActors: string;
  date: string;
  day: string;
  debateCount: number;
  isCurrentDate: boolean;
  location: string;
}
