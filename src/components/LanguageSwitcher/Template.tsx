export const countryOptionTemplate = (country: string) => (
  <div className="flex align-items-center">
    <img
      alt={country}
      src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
      className={`mr-2 flag flag-${country}`}
      style={{ width: '18px' }}
    />
    <div>{country}</div>
  </div>
);