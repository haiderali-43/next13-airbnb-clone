"use client";
import useCountries from '@/hooks/useCountries';
import Select from 'react-select';

const CountrySelect = ({
  value,
  onChange
}) => {
  const getAll = useCountries().getAll;

  return ( 
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value)}
        formatOptionLabel={(option) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
      />
    </div>
   );
}


export default CountrySelect;
