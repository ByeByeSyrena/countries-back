export const externalApi = {
  nager: {
    countries: '/AvailableCountries',
    countryInfo: (countryCode: string) => `/CountryInfo/${countryCode}`
  },
  countriesnow: {
    population: '/countries/population',
    flag: '/countries/flag/images',
  }
}