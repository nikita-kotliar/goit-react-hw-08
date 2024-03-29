import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
// import { selectStatusFilter } from "../../redux/filtersSlice";
import { getStatusFilter } from "../../redux/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
   const statusFilter = useSelector(getStatusFilter) || "";

  const handleFilterChange = (event) =>
    dispatch(setStatusFilter(event.target.value));

   const [searchInputId] = useId();
  return (
    <div className={css.search_box}>
      <label htmlFor={searchInputId} className={css.search_text}>
        Find contacts by name
      </label>
      <input
        className={css.search_input}
        name="searchName"
        type="text"
        id={searchInputId}
        onChange={handleFilterChange}
        value={statusFilter}
      ></input>
    </div>
  );
}
