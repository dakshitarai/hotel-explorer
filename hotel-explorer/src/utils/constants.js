export const CITIES = [
  'Ahmedabad',
  'Bengaluru',
  'Chennai',
  'Delhi',
  'Goa',
  'Gurgaon',
  'Hyderabad',
  'Jaipur',
  'Kolkata',
  'Mumbai',
  'Noida',
  'Pune',
];

export const SORT_OPTIONS = [
  { value: '', label: 'Recommended' },
  { value: '-rating', label: 'Rating: high to low' },
  { value: 'rating', label: 'Rating: low to high' },
  { value: 'price', label: 'Price: low to high' },
  { value: '-price', label: 'Price: high to low' },
  { value: 'name', label: 'Name: A → Z' },
];

export const PAGE_SIZE_OPTIONS = [6, 9, 12, 24];

export const DEFAULT_FILTERS = {
  search: '',
  location: '',
  min_price: '',
  max_price: '',
  min_rating: '',
  max_rating: '',
  order_by: '',
  limit: 9,
  skip: 0,
};
