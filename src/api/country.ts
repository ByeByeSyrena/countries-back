import { externalApi } from "../configs/externalApi";

export const country = {
  async list(headers = {}) {
    const options = {
      method: "GET",
      headers: { ...headers, },
    };
    const url = `${process.env.NAGER_URL}${externalApi.nager.countries}`;
    return fetch(url, options);
  },

  async details(countryCode: string, headers = {}) {
    const options = {
      method: "GET",
      headers: { ...headers, },
    };
    const url = `${process.env.NAGER_URL}${externalApi.nager.countryInfo(countryCode)}`;
    return fetch(url, options);
  },

  async population(country: string, headers = {}) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers, },
      body: JSON.stringify({
        country: country.toLowerCase(),
      })
    };
    const url = `${process.env.COUNTRIESNOW_URL}${externalApi.countriesnow.population}`;
    return fetch(url, options);
  },

  async flag(country: string, headers = {}) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers, },
      body: JSON.stringify({
        country: country.toLowerCase(),
      })
    };
    const url = `${process.env.COUNTRIESNOW_URL}${externalApi.countriesnow.flag}`;
    return fetch(url, options);
  },
}
