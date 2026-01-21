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
                                <th colSpan={2} className="header-day-row">Tuesday, February 3, 2026</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>8:00-9:00 am</p></td>
                                <td><p>Breakfast & Registration</p></td>
                            </tr>

                            <tr>
                                <td>9:00-9:30 am<p></p></td>
                                <td><p>Opening Remarks</p></td>
                            </tr>
                            <tr>
                                <td><p>9:30-10:00 am</p></td>
                                <td><p>Keynote on AI-RAN with Kuntal Chowdhury - NVIDIA</p></td>
                            </tr>
                            <tr>
                                <td><p>10:00-11:00 am</p></td>
                                <td><p>Research Presentations from Institute faculty members (part 1)</p></td>
                            </tr>
                            <tr>
                                <td><p>11:00-11:10 am</p></td>
                                <td><p>Coffee Break</p></td>
                            </tr>
                            <tr>
                                <td><p>11:10 am-12:30 pm</p></td>
                                <td><p>Research Presentations from Institute faculty members (part 2)</p></td>
                            </tr>
                            <tr>
                                <td><p>12:30-2:00 pm</p></td>
                                <td><p>Networking Lunch</p></td>
                            </tr>
                            <tr>
                                <td><p>2:00-3:00 pm</p></td>
                                <td><p>Fireside Chat: “Beyond the Invention: What Turns Research into a Business” with Greg Waters - MatrixSpace, Northeastern University Board of Trustees</p></td>
                            </tr>
                            <tr>
                                <td><p>3:00-3:50 pm</p></td>
                                <td><p>INSI Commercialization and Spin-Offs</p></td>
                            </tr>
                            <tr>
                                <td><p>3:50-4:00 pm</p></td>
                                <td><p>Coffee Break</p></td>
                            </tr>
                            <tr>
                                <td><p>4:00-5:00 pm</p></td>
                                <td><p>Panel: AI-RAN</p></td>
                            </tr>
                            <tr>
                                <td><p>7:00-9:00 pm</p></td>
                                <td><p>Dinner Reception</p></td>
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
                                <td><p>8:00-9:00 am</p></td>
                                <td><p>Breakfast & Registration</p></td>
                            </tr>
                            <tr>
                                <td><p>9:00-11:00 am</p></td>
                                <td><p>Research Poster and Demo Presentations</p></td>
                            </tr>
                            <tr>
                                <td><p>11:00-11:15 am</p></td>
                                <td><p>Coffee Break and Lunch (to-go boxes)</p></td>
                            </tr>
                            <tr>
                                <td><p>11:15 am-12:30 pm</p></td>
                                <td><p>Boston Campus WIoT Facilities/Space Tours (EXP)</p></td>
                            </tr>
                            <tr>
                                <td><p>1:00-2:00 pm</p></td>
                                <td><p>Travel to Burlington (bus departing from East Village at 1:00 pm)</p></td>
                            </tr>
                            <tr>
                                <td><p>2:00-4:00 pm</p></td>
                                <td><p>WIoT Facilities/Space Tours in Burlington</p></td>
                            </tr>
                            <tr>
                                <td><p>4:00-5:00 pm</p></td>
                                <td><p>Ad Hoc meetings for industry partners and researchers at the WIoT</p></td>
                            </tr>
                            <tr>
                                <td><p>5:00 pm</p></td>
                                <td><p>Travel to Boston (bus departing from Building V at 5:00 pm)</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Agenda;