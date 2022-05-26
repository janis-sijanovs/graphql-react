import { useQuery } from '@apollo/client';
import { CountryTag } from '../../models/countryModel';
import { countriesQuery } from '../../models/queries';
import CountryItem from '../CountryItem/countryItem';
import Loader from '../Loader/loader';

const CountryList = () => {
  const { loading, error, data } = useQuery(countriesQuery);

  return (
    <ul>

      { loading && <Loader /> }
      { error && <p>{error.message}</p> }

      {data && data.countries.map(({ code, name }: CountryTag) => (
        <CountryItem key={code} code={code} name={name} />
      ))}

    </ul>
  );
};

export default CountryList;
