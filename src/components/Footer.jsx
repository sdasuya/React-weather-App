import React from "react";

function footer(query,setQuery){
    return (
<div className="footer">
<div className="days">


    <p>Today</p>
    <p>Tomorrow</p>
    <p>Day After tomorrow</p>
    </div>
    <div className="temp">
<p value={query}
        onChange={(e) => setQuery(e.target.value)}>21°</p>
<p>28°</p>
<p>31°</p>
</div>

</div>
    );
}
export default footer;