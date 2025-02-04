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
                                <th colSpan={2} className="header-day-row">Monday, February 3, 2025<br/>
                                    291 St. Botolph St., Boston, MA 02115<br/>
                                    Northeastern University, East Village - 17th Floor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>6:00-8:00 pm</p></td>
                                <td><p>Registration and Opening Reception</p></td>
                            </tr>
                        </tbody>
                        {/**/}
                        <thead>
                            <tr>
                                <th colSpan={2} className="header-day-row">Tuesday, February 4, 2025<br/>
                                    291 St. Botolph St., Boston, MA 02115<br/>
                                    Northeastern University, East Village - 17th Floor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>8:00-9:00 am</p></td>
                                <td><p>Breakfast & Registration</p></td>
                            </tr>

                            <tr>
                                <td><p>9:15-10:00 am</p></td>
                                <td><p>Opening Remarks</p>
                                    <ul>
                                        <li>Tommaso Melodia, A Review of the Institute's Activities</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>10:00-11:00 am</p></td>
                                <td><p>Research Presentations from Institute faculty members</p>
                                    <ul>
                                        <li>Stratis Ioannidis, "Machine Learning at the Edge"</li>
                                        <li>Florian Kaltenberger, "5G Positioning with OpenAirInterface"</li>
                                        <li>Michele Polese, "Network Automation for AI and RAN"</li>
                                        <li>Francesco Restuccia, "Unleashing 6G with Wireless for AI & AI for Wireless"</li>
                                        <li>Pedram Johari, "Wireless Digital Twins for Wireless Networks"</li>
                                        <li>Ken Duffy, "Next Generation Error Correction"</li>
                                        <li>Stefano Basagni, "Pathways to Education, Research and Workforce Development"</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>11:00-11:10 am</p></td>
                                <td><p>Coffee Break</p></td>
                            </tr>
                            <tr>
                                <td><p>11:10 am-12:30 pm</p></td>
                                <td><p>Research Presentations from Institute faculty members</p>
                                    <ul>
                                        <li>Hessam Mahdavifar, "New Frontiers in Channel Coding: Theory and Practice"</li>
                                        <li>Paolo Testolina, "Sharing and Coexistence across Spectrum and Space"</li>
                                        <li>Najme Ebrahimi, "Next Generation of Efficient Communication and Computing Radios, From System to 3D Heterogenous Integration"</li>
                                        <li>Dimitrios Koutsonikolas, "Evaluating 5G Performance in the Wild"</li>
                                        <li>Milica Stojanovic, "Underwater Wireless Communications"</li>
                                        <li>Josep M. Jornet, "Terahertz Communications: From the Near-field to Space Networks"</li>
                                        <li>Edmund Yeh, "Intelligence at the Edge: Computation Placement and Data Movement"</li>
                                        <li>Yanzhi Wang, "Unified Acceleration Framework for Generative AI Models on the Edge"</li>
                                        <li>Manu Gosain, "6G Perspective and Research Priorities to Align with the National Agenda"</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>12:30-2:00 pm</p></td>
                                <td><p>Networking Lunch</p></td>
                            </tr>
                            <tr>
                                <td><p>2:00-3:00 pm</p></td>
                                <td><p>Panel 1: Fueling Innovation: The Role of Industry-Academia Collaborations in Shaping Research and Driving Innovation</p>
                                    <ul>
                                        <li>J. Gordon Beattie, Viavi Solutions</li>
                                        <li>Rajesh Sood, Tech Mahindra</li>
                                        <li>Doug Castor, InterDigital</li>
                                        <li>Josep M. Jornet, Northeastern University</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>3:00-3:45 pm </p></td>
                                <td><p>WIoT Commercialization and Spin offs</p>
                                    <ul>
                                        <li>Ted Werth, WIoT Executive in Residence</li>
                                        <li>Mark Saulich, Associate Director of Commercialization, CRI</li>
                                        <li>Spin-off pitches:</li>
                                        <ul>
                                            <li>Open6G OTIC</li>
                                            <li>Teradio </li>
                                            <li>zTouch</li>
                                            <li>DeepCharge</li>
                                        </ul>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>3:45-3:50 pm </p></td>
                                <td><p>Entrepreneur of the Year</p></td>
                            </tr>
                            <tr>
                                <td><p>3:50-4:00 pm</p></td>
                                <td><p>Coffee Break</p></td>
                            </tr>
                            <tr>
                                <td><p>4:00-5:00 pm</p></td>
                                <td><p>Panel 2: Entrepreneurship: Navigating the path from academia to new venture spinout</p>
                                    <ul>
                                        <li>Bubba Hagood: Tenon Ventures</li>
                                        <li>Joel Dawson: Talking Heads wireless</li>
                                        <li>Stacy Swider: Mass Ventures</li>
                                        <li>Kimo Johnson: Gelsight</li>
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
                                <th colSpan={2} className="header-day-row">Wednesday, February 5, 2025<br/>
                                    291 St. Botolph St., Boston, MA 02115<br/>
                                    Northeastern University, East Village - 17th Floor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>8:00-9:00 am</p></td>
                                <td><p>Breakfast & Registration</p></td>
                            </tr>
                            <tr>
                                <td><p>9:00-11:00 am</p></td>
                                <td><p>Research Posters and Demo Presentations</p></td>
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
                                <td><p>Travel to Burlington (Bus departing from East Village at 1:00 pm)<br/>
                                    141 S Bedford St, Building V, Burlington, MA 01803</p>
                                </td>
                            </tr>
                            <tr>
                                <td><p>2:00-4:00 pm</p></td>
                                <td><p>WIoT Facilities/Space Tours in Burlington</p>
                                    <ul>
                                        <li>Colosseum</li>
                                        <li>Open6G and OTIC (R&D, Testing and System Integration)</li>
                                        <li>Live Drone Communications Demo</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>4:00-5:00 pm</p></td>
                                <td><p>Ad Hoc meetings for industry partners and researchers at the WIoT</p></td>
                            </tr>
                            <tr>
                                <td><p>5:00 pm</p></td>
                                <td><p>Travel to Boston (Bus departing from Building V at 5:00pm)</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Agenda;