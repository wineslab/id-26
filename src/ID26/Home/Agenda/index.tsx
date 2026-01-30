import React from "react";
import SectionHeader from '../../Components/SectionHeader';
import Table from 'react-bootstrap/Table';
import "./index.css";

function Agenda() {
    return (
        <div>
            <SectionHeader text="AGENDA"></SectionHeader>
            <div><p><b>Location:</b> East Village - 291 St. Botolph Street</p></div>
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
                                <td><p>6:00-8:00 pm</p></td>
                                <td><p>Cocktail Reception</p></td>
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
                                <td><p>8:00-9:00 am</p></td>
                                <td><p>Breakfast & Registration</p></td>
                            </tr>

                            <tr>
                                <td><p>9:00-9:45 am</p></td>
                                <td><p>Opening Remarks</p>
                                    <ul>
                                        <li>Akram Alshawabkeh, Interim Senior Vice Provost - Research</li>
                                        <li>Gregory Abowd, Dean – College of Engineering</li>
                                        <li>Tommaso Melodia, “A Review of the Institute's Activities”</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>9:45-10:15 am</p></td>
                                <td><p>Keynote on AI-RAN</p>
                                    <ul>
                                        <li>Kuntal Chowdhury</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>10:15-10:30 am</p></td>
                                <td><p>INSI London Overview</p>
                                    <ul>
                                        <li>Osvaldo Simeone, Professor of Information Engineering</li>
                                        <li>Bipin Rajendran, Professor of Intelligent Computing Systems</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>10:30-11:00 am</p></td>
                                <td><p>Research Presentations from Institute faculty members</p>
                                    <ul>
                                        <li>Josep Jornet</li>
                                        <li>Michele Polese</li>
                                        <li>Francesco Restuccia</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>11:00-11:10 am</p></td>
                                <td><p>Coffee Break</p></td>
                            </tr>
                            <tr>
                                <td><p>11:10 am-1:00 pm</p></td>
                                <td><p>Research Presentations from Institute faculty members</p>
                                    <ul>
                                        <li>Yonina Eldar</li>
                                        <li>Dimitrios Koutsonikolas</li>
                                        <li>Xufeng Zhang</li>
                                        <li>Pedram Johari</li>
                                        <li>Miriam Leeser</li>
                                        <li>Stefano Basagni</li>
                                        <li>Lili Su</li>
                                        <li>Weiyan Shi</li>
                                        <li>Andrea Lacava</li>
                                        <li>Eduardo Baena</li>
                                        <li>Maxime Elkael</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>1:00-2:00 pm</p></td>
                                <td><p>Networking Lunch</p></td>
                            </tr>
                            <tr>
                                <td><p>2:00-3:00 pm</p></td>
                                <td><p>Fireside Chat: “Creating a business from Deep Research”</p>
                                    <ul>
                                        <li>Greg Waters - Matrix Space- NU Board of Trustees</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>3:00-3:50 pm</p></td>
                                <td><p>INSI Commercialization and Spin offs</p>
                                    <ul>
                                        <li>Ted Werth to present the ecosystem</li>
                                        <li>5-min pitch from spin-offs</li>
                                        <li>Entrepreneur of the Year</li>
                                        <li>Ignite Award</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>3:50-4:00 pm</p></td>
                                <td><p>Coffee Break</p></td>
                            </tr>
                            <tr>
                                <td><p>4:00-5:00 pm</p></td>
                                <td><p>Panel 1: AI-RAN</p>
                                    <ul>
                                        <li>Chris Christou, BAH</li>
                                        <li>Ahan Kak, Nokia</li>
                                        <li>Ed Knapp, Liberty Technology Partners / American Tower</li>
                                        <li>Mauro Fihlo, SoftBank</li>
                                        <li>Moderator: Michele Polese</li>
                                    </ul>
                                </td>
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
                                <td><p>Boston Campus INSI Facilities/Space Tours (EXP)</p></td>
                            </tr>
                            <tr>
                                <td><p>1:00-2:00 pm</p></td>
                                <td><p>Travel to Burlington (bus departing from East Village at 1:00 pm)</p></td>
                            </tr>
                            <tr>
                                <td><p>2:00-4:00 pm</p></td>
                                <td><p>INSI Facilities/Space Tours in Burlington</p></td>
                            </tr>
                            <tr>
                                <td><p>4:00-5:00 pm</p></td>
                                <td><p>Ad Hoc meetings for industry partners and researchers at the INSI</p></td>
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