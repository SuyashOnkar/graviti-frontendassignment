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
      <Combobox
        onSelect={handleSelect}
        className="combobox">
        <div className={name}></div>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="combobox-input"
        />
        <ComboboxPopover className="combobox-popover">
          <ComboboxList className="combobox-list">
            {status === 'OK' &&
              data.slice(0, 5).map(({ place_id, description }) => (
                <ComboboxOption
                  key={place_id}
                  value={description}
                  className="combobox-option"
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
