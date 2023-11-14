import Checkbox from "./forms/Checkbox";
import Input from "./forms/Input";

const SearchBar = ({search, onSearchChange, showStockedOnly, onStockedOnlyChange}) => {
  return (
    <div className="mb-3">
        <Input value={search}
        onChange={onSearchChange}
        placeholder ='Rechercher...' />
        <Checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange} label="N'afficher que les produits en stock" />
    </div>
  );
};

export default SearchBar;