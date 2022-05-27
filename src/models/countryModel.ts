export type CountryTag = {
  code: string;
  name: string;
}

export type Country = {
  code: string
  name: string
  native: string
  phone: string
  continent: Continent
  capital: string
  currency: string
  languages: Language[]
  emoji: string
  emojiU: string
  states: State[]
  }

type Continent = {
  name: string
}

export type State = {
  name: string
}

export type Language = {
  name: string
}
