import './SearchBox.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxButton,
  ComboboxList,
  ComboboxPopover,
  ComboboxInput,
  ComboboxOption,
} from '@reach/combobox';

export default function SearchBox({ name, setLocation }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    setLocation(address);
  };

  return (
    <div className="searchArea">
      <div className="searchArea-name">{name}</div>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="inputBox"
        />
        <ComboboxPopover className="combo-popover">
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ place_id, description }) => (
                <ComboboxOption
                  key={place_id}
                  value={description}
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
