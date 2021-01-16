import React from "react";

import SelectObjective from "./selectObjective";
import SelectSex from "./selectSex";
import SelectPackage from "./selectPackage";
import SelectBudget from "./selectBudget";


const Search = () => {
    return (
        <>
            <SelectObjective/>
            <SelectSex/>
            <SelectPackage/>
            <SelectBudget/>  
        </>
    )
}

export default Search