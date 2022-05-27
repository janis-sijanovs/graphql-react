type CountryData = {
    native: string,
    phone: string,
    continent: string,
    capital: string,
    currency: string,
    languages: string,
    emoji: string,
    emojiU: string,
    states: string,
  }

const countryData: CountryData = {
  native: 'Native Name:',
  phone: 'Country Code:',
  continent: 'Continent:',
  capital: 'Capital:',
  currency: 'Currency:',
  languages: 'Languages:',
  emoji: 'Emoji:',
  emojiU: 'EmojiU:',
  states: 'States:',
};

export const getCountryData = () => ({ ...countryData });

export default getCountryData;
