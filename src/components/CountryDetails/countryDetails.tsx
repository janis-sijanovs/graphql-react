import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Country } from '../../models/countryModel';
import { countryQuery } from '../../models/queries';
import Loader from '../Loader/loader';
import styles from './countryDetails.module.scss';

const CountryDetails = ({ code }: {code: string}) => {
  const [country, setCountry] = useState<Country>();
  const { loading, error, data } = useQuery(countryQuery(code));

  if (data && !country) {
    setCountry(data.country);
  }

  return (
    <>
      { loading && <Loader /> }
      { error && <p>{error.message}</p> }

      {country
        && (
        <div className={styles.details}>
          <ul>

            {country.native && (
            <li>
              <span className={styles.category}>Native Name:</span>
&nbsp;
              {country.native}
            </li>
            )}

            {country.capital && (
            <li>
              <span className={styles.category}>Country Code:</span>
              {' '}
              +
              {country.phone}
            </li>
            )}

            {country.continent && (
            <li>
              <span className={styles.category}>Continent:</span>
&nbsp;
              {country.continent.name}
            </li>
            )}

            {country.capital && (
            <li>
              <span className={styles.category}>Capital:</span>
&nbsp;
              {country.capital}
            </li>
            )}

            {country.currency && (
            <li>
              <span className={styles.category}>Currency:</span>
&nbsp;
              {country.currency}
            </li>
            )}

            {country.languages.length > 0 && (
            <li>
              <span className={styles.category}>Languages:</span>
&nbsp;
              {country.languages.map((language) => `${language.name} `)}
            </li>
            )}

            {country.emoji && (
            <li>
              <span className={styles.category}>Emoji:</span>
&nbsp;
              {country.emoji}
            </li>
            )}

            {country.emojiU && (
            <li>
              <span className={styles.category}>EmojiU:</span>
&nbsp;
              {country.emojiU}
            </li>
            )}

            {country.states.length > 0 && (
            <li>
              <span className={styles.category}>States:</span>
&nbsp;
              {country.states.map((state) => `${state.name} `)}
            </li>
            )}

          </ul>
        </div>
        )}
    </>
  );
};

export default CountryDetails;
