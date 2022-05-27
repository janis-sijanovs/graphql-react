import { useState } from 'react';
import { CountryTag } from '../../models/countryModel';
import CountryDetailsList from '../CountryDetailsList/countryDetailsList';
import styles from './countryItem.module.scss';

const CountryItem = ({ code, name }: CountryTag) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button className={styles.button} onClick={() => setShowDetails(!showDetails)}>
        <span className={showDetails ? styles.expanded : styles.normal}>&gt;</span>
        {name}
      </button>
      {showDetails && <CountryDetailsList code={code} />}
    </div>
  );
};

export default CountryItem;
