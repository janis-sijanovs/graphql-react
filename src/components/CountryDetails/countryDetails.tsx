import { Country } from '../../models/countryModel';
import styles from './countryDetails.module.scss';

type CountryDetailsProps = {
  propKey: string
  title: string
  country: Country
}

const CountryDetails = ({ propKey, title, country }: CountryDetailsProps) => {
  const data = country[propKey as keyof typeof country];
  const isArray = Array.isArray(data);
  const isString = typeof data === 'string';

  return (
    <>
      {data && isString && (
        <li>
          <span className={styles.category}>{title}</span>
          {data}
        </li>
      )}

      {!isArray && !isString && data && (
        <li>
          <span className={styles.category}>{title}</span>
          {data.name}
        </li>
      )}

      {isArray && data.length > 0 && (
        <li>
          <span className={styles.category}>{title}</span>
          {data.map((element) => `${element.name} `)}
        </li>
      )}
    </>
  );
};

export default CountryDetails;
