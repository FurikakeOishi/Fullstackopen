import React from "react"

const Filter = ({data})=>{
return(
<form>
    <div>filter by name: <input value={data.newSearch} onChange={data.handleSearchChange}/></div>
</form> 
)}

export default Filter