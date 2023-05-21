import './SearchBox.css';
import usePlacesAutocomplete from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxList,
  ComboboxPopover,
  ComboboxInput,
  ComboboxOption,
} from '@reach/combobox';

export default function SearchBox({ name, setLocation }) {
  const {
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
        <div className={name} />
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="combobox-input"
        />
        <ComboboxPopover
          className="combobox-popover"
          portal={false}>
          <ComboboxList className="combobox-list">
            {status === 'OK' &&
              data.slice(0, 4).map(({ place_id, description }) => (
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
