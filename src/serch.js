import React from "react";
import SelectObjective from "./selectObjective";
import SelectSex from "./selectSex";
import SelectPackage from "./selectPackage";
import SelectBudget from "./selectBudget";
import SelectTaste from "./selectTaste";
import SelectAge from "./selectAge";

const Search = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <SelectObjective/>
            <SelectSex/>
            <SelectAge/>
            <SelectPackage/>
            <SelectTaste/>
            <SelectBudget/> 
        </div>
    )
}

export default Search