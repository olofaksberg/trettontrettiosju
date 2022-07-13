import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { employeesActions, employeesData } from "@/store/employees";

interface Ifilter {
    name: string,
    office: string[]
}

export const useHandleToolsArea = () => {
    const dispatch = useDispatch();
    const { employees } = useSelector(employeesData);
    const { setFilteredEmployees } = useSelector(employeesActions);

    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [filter, setFilter] = useState<Ifilter>({
        name: "",
        office: [],
    });

    const reset = () => {
        dispatch(setFilteredEmployees(false));
        setFilter({
            name: "",
            office: [],
        });
        if (showSearch) setShowSearch(false);
    };

    const search = () => {
        dispatch(setFilteredEmployees(filter));
        setFilter({
            name: "",
            office: [],
        });
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