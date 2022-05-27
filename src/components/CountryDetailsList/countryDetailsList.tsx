import { useQuery } from '@apollo/client';
import { Country } from '../../models/countryModel';
import { countryQuery } from '../../models/queries';
import CountryDetails from '../CountryDetails/countryDetails';
import Loader from '../Loader/loader';
import styles from './countryDetailsList.module.scss';
import { getCountryData } from '../../data/countryData';

const countryData = getCountryData();

const CountryDetailsList = ({ code }: {code: string}) => {
  const { loading, error, data } = useQuery(countryQuery(code));
  const { country }: {country: Country} = data === undefined ? { country: null } : data;

  return (
    <>
      { loading && <Loader /> }
      { error && <p>{error.message}</p> }

      {country
        && (
        <div className={styles.details}>
          <ul>

            {Object.entries(countryData).map(([key, title]) => (
              <CountryDetails key={key} propKey={key} title={title} country={country} />
            ))}

          </ul>
        </div>
        )}
    </>
  );
};

export default CountryDetailsList;
