export interface CountryCardProps {
  data: ICountry[];
  handleClick: (id: string) => void;
}

interface ICountry {
  name: { common: string };
  cca3: string;
  region: string;
  flags: { png: string; alt: string };
}
