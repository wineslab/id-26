import React from "react";
import SectionHeader from '../../Components/SectionHeader';
import Table from 'react-bootstrap/Table';
import "./index.css";

function Agenda() {
    return (
        <div>
            <SectionHeader text="AGENDA"></SectionHeader>
            <div className="section agenda">
                <div className="details">
                    <Table bordered>
                        <colgroup>
                            <col className="time-column" />
                            <col className="item-column" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th colSpan={2} className="header-day-row">Monday, February 2, 2026</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p></p></td>
                                <td><p>Welcome Reception & Registration</p></td>
                            </tr>
                        </tbody>
                        {/**/}
                        <thead>
                            <tr>
                                <th colSpan={2} className="header-day-row">Tuesday, February 3, 2026</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p></p></td>
                                <td><p>Institute Research Presentations</p></td>
                            </tr>

                            <tr>
                                <td><p></p></td>
                                <td><p>Panel: Industry/Research Collaboration</p></td>
                            </tr>
                            <tr>
                                <td><p></p></td>
                                <td><p>Industry Engagement Models at WIoT</p></td>
                            </tr>
                            <tr>
                                <td><p></p></td>
                                <td><p>Panel: Research and Commercialization in the era of AI-RAN</p></td>
                            </tr>
                        </tbody>
                            {/**/}
                        <thead>
                            <tr>
                                <th colSpan={2} className="header-day-row">Wednesday, February 4, 2026<br/></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p></p></td>
                                <td><p>Research Posters & Demo Presentations</p></td>
                            </tr>
                            <tr>
                                <td><p></p></td>
                                <td><p>Research Posters and Demo Presentations</p></td>
                            </tr>
                            <tr>
                                <td><p></p></td>
                                <td><p>WIoT Facilities & Space Tour</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Agenda;