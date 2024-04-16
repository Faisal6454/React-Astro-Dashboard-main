import React from 'react';
import "./Dropdown.css";

export const Dropdown = () => {

    // $(".checkbox-dropdown").click(function () {
    //     $(this).toggleClass("is-active");
    // });
    
    // $(".checkbox-dropdown ul").click(function(e) {
    //     e.stopPropagation();
    // });

return (
    <>
        <div className="checkbox-dropdown">
                <p>All</p>
            <ul className="checkbox-dropdown-list">
                <li>
                <label>
                    <input type="checkbox" value="Vejle" name="city" />Milwaukee</label>
                </li>
                <li>
                <label>
                    <input type="checkbox" value="Horsens" name="city" />Denver</label>
                </li>
                <li>
                <label>
                    <input type="checkbox" value="Kolding" name="city" />Boston</label>
                </li>
                <li>
                <label>
                    <input type="checkbox" value="Kolding" name="city" />LA</label>
                </li>
            </ul>
        </div>
    </>
);
};
