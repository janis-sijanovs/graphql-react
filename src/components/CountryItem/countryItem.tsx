import { useState } from 'react';
import { CountryTag } from '../../models/countryModel';
import CountryDetails from '../CountryDetails/countryDetails';
import styles from './countryItem.module.scss';

const CountryItem = ({ code, name }: CountryTag) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>

      <button className={styles.button} onClick={() => setShowDetails(!showDetails)}>
        <span className={showDetails ? styles.expanded : styles.normal}>&gt;</span>
        {name}
      </button>

      {showDetails
      && <CountryDetails code={code} />}
    </div>
  );
};

export default CountryItem;
