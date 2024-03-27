import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleFilterChange = (event) =>
    dispatch(setStatusFilter(event.target.value));

  const searchInputId = useId();
  return (
    <div className={css.search_box}>
      <label htmlFor={css.search_text}>Find contacts by name</label>
      <input
        className={css.search_input}
        name="searchName"
        type="text"
        id={searchInputId}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
}
