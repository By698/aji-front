import React from 'react';

export default class ProductsTable extends React.Component {
    render() {
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Cena</th>
                        <th>Kup</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                        <td>
                            <a className="waves-effect waves-light btn">
                                <i className="material-icons right">cloud</i>
                                button
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                        <td>
                            <a className="waves-effect waves-light btn">
                                <i className="material-icons right">cloud</i>
                                button
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                        <td>
                            <a className="waves-effect waves-light btn">
                                <i className="material-icons right">cloud</i>
                                button
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }
}