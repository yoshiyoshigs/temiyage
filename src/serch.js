import React from "react";
import SelectObjective from "./selectObjective";
import SelectSex from "./selectSex";
import SelectPackage from "./selectPackage";
import SelectBudget from "./selectBudget";
import SelectTaste from "./selectTaste";

const Search = () => {
    return (
        <>
            <SelectObjective/>
            <SelectSex/>
            <SelectPackage/>
            <SelectTaste/>
            <SelectBudget/> 
        </>
    )
}

export default Search