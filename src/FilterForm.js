import React from "react";

export default class FilterForm extends React.Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="input-field col s5">
                    <input value="Alvin" id="first_name2" type="text" className="validate"/>
                        <label className="active" htmlFor="first_name2">First Name</label>
                </div>
            </div>
            <div className="row">
                <select className="browser-default col s5">
                    <option value="" disabled selected>Kategoria...</option>
                    <option value="1">Kategoria 1</option>
                    <option value="2">Kategoria 2</option>
                    <option value="3">Kategoria 3</option>
                </select>
            </div>
            <div className="row">
                <button className="btn waves-effect waves-light col s2" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
            </div>
            </>
        )
    }
}