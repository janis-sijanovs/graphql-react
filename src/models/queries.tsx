import { gql } from '@apollo/client';

export const countryQuery = (code: string) => gql`
query {
  country(code: "${code}") {
    name
    native
    phone
    continent {
      name
    }
    capital
    currency
    languages {
      name
    }
    emoji
    emojiU
    states {
      name
    }
  }
}      
`;

export const countriesQuery = gql`
query {
  countries {
    code
    name
  }
}      
`;
