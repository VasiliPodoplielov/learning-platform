import { FLAG_PLACEHOLDER_URL } from './constants.ts';
export const countryOptionTemplate = (country: string) => (
  <div className="flex align-items-center">
    <img
      alt={country}
      src={FLAG_PLACEHOLDER_URL}
      className={`mr-2 flag flag-${country}`}
      style={{ width: '18px' }}
    />
    <div>{country}</div>
  </div>
);
