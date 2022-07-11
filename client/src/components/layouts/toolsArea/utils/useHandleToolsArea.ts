import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeesActions, employeesData } from "../../../../store/employees/employeesSlice";

export const useHandleToolsArea = () => {
    const dispatch = useDispatch();
    const { employees } = useSelector(employeesData);
    const { setFilteredEmployees } = useSelector(employeesActions);
    const [showSearch, setShowSearch] = useState(false);

    const [filter, setFilter] = useState({
        name: "",
        office: [],
    });

    const reset = () => {
        dispatch(setFilteredEmployees(false));
        setShowSearch(false);
    };

    const search = () => {
        dispatch(setFilteredEmployees(filter));
        setShowSearch(false);
    };

    return {
        employees,
        showSearch,
        setShowSearch,
        filter,
        setFilter,
        reset,
        search
    }
}