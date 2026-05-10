'use client';

import { useState, useEffect, useCallback } from 'react';

export interface Country {
  name: string;
  code: string;
  flag: string;
  callingCode: string;
}

export interface State {
  name: string;
  stateCode: string;
}

export interface City {
  name: string;
}

const COUNTRIES_URL = 'https://restcountries.com/v3.1/all?fields=name,idd,flag,cca2';
const STATES_URL = 'https://countriesnow.space/api/v0.1/countries/states';
const CITIES_URL = 'https://countriesnow.space/api/v0.1/countries/state/cities';

interface RestCountry {
  name?: { common?: string };
  idd?: { root?: string; suffixes?: string[] };
  flag?: string;
  cca2?: string;
}

interface StatesResponse {
  error: boolean;
  data?: { states?: Array<{ name: string; state_code: string }> };
}

interface CitiesResponse {
  error: boolean;
  data?: string[];
}

export function useGeoData() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all countries on mount
  useEffect(() => {
    let cancelled = false;
    setLoadingCountries(true);

    fetch(COUNTRIES_URL)
      .then(res => res.json())
      .then((data: RestCountry[]) => {
        if (cancelled) return;
        const mapped: Country[] = data
          .map(c => ({
            name: c.name?.common || '',
            code: c.cca2 || '',
            flag: c.flag || '',
            callingCode: (c.idd?.root || '') + ((c.idd?.suffixes || []).length === 1 ? c.idd.suffixes[0] : ''),
          }))
          .filter(c => c.name && c.callingCode)
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(mapped);
      })
      .catch(err => {
        if (!cancelled) setError('Failed to load countries');
        console.error('Countries fetch error:', err);
      })
      .finally(() => {
        if (!cancelled) setLoadingCountries(false);
      });

    return () => { cancelled = true; };
  }, []);

  const fetchStates = useCallback(async (countryName: string) => {
    if (!countryName) { setStates([]); setCities([]); return; }
    setLoadingStates(true);
    setCities([]);
    try {
      const res = await fetch(STATES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country: countryName }),
      });
      const data: StatesResponse = await res.json();
      if (data.error === false && data.data?.states) {
        setStates(data.data.states.map((s) => ({ name: s.name, stateCode: s.state_code })));
      } else {
        setStates([]);
      }
    } catch (err) {
      console.error('States fetch error:', err);
      setStates([]);
    } finally {
      setLoadingStates(false);
    }
  }, []);

  const fetchCities = useCallback(async (countryName: string, stateName: string) => {
    if (!countryName || !stateName) { setCities([]); return; }
    setLoadingCities(true);
    try {
      const res = await fetch(CITIES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country: countryName, state: stateName }),
      });
      const data: CitiesResponse = await res.json();
      if (data.error === false && data.data) {
        setCities(data.data.map((c) => ({ name: c })));
      } else {
        setCities([]);
      }
    } catch (err) {
      console.error('Cities fetch error:', err);
      setCities([]);
    } finally {
      setLoadingCities(false);
    }
  }, []);

  return {
    countries,
    states,
    cities,
    loadingCountries,
    loadingStates,
    loadingCities,
    error,
    fetchStates,
    fetchCities,
  };
}
