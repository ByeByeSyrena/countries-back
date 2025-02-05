import { country } from "../api/country";

export async function countries() {
  const raw = await country.list(); 
  const data = await raw.json();
  return data as any;
}

export async function details(countryCode: string) {
  const raw = await country.details(countryCode);
  const data = await raw.json();
  return data as any;
}

export async function population(countryName: string) {
  const raw = await country.population(countryName);
  const data = await raw.json();
  return data as any;
}

export async function flag(countryCode: string) {
  const raw = await country.flag(countryCode);
  const { data } = await raw.json();
  return data as any;
}