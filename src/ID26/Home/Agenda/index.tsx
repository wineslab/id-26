import React from "react";
import SectionHeader from '../../Components/SectionHeader';
import Table from 'react-bootstrap/Table';
import "./index.css";

function Agenda() {
    return (
        <div>
            <SectionHeader text="AGENDA"></SectionHeader>
            <div><p><b>Location:</b> East Village - 291 St. Botolph Street, 17th Floor</p></div>
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
                                        <li>Tommaso Melodia, "A Review of the Institute's Activities"</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>9:45-10:15 am</p></td>
                                <td><p>Keynote on AI-RAN</p>
                                    <ul>
                                        <li>Kuntal Chowdhury, "Architecting AI-Native 6G: A Software-Defined Platform for Continuous Innovation"</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>10:15-10:40 am</p></td>
                                <td><p>INSI London Overview</p>
                                    <ul>
                                        <li>Bipin Rajendran, "Energy-Efficient Intelligence for Physical AI and Next-Generation Networks"</li>
                                        <li>Osvaldo Simeone, "How to Trust AI in Telecom"</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>10:40-11:10 am</p></td>
                                <td><p>Research Presentations from Institute faculty members</p>
                                    <ul>
                                        <li>Josep Jornet, "Terahertz Integrated Communications and Sensing: From the Near Field to Space"</li>
                                        <li>Michele Polese, "Toward AI-RAN - Transforming RAN Design and Operations with Automation and LLMs"</li>
                                        <li>Francesco Restuccia, "AI-Native 6G Mobile Systems"</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>11:10-11:20 am</p></td>
                                <td><p>Coffee Break</p></td>
                            </tr>
                            <tr>
                                <td><p>11:20 am-1:00 pm</p></td>
                                <td><p>Research Presentations from Institute faculty members</p>
                                    <ul>
                                        <li>Yonina Eldar, "Physics-Driven Intelligence: From Theory to Translational Sensing Systems"</li>
                                        <li>Dimitrios Koutsonikolas, "Evaluating 5G Performance in the Wild"</li>
                                        <li>Xufeng Zhang, "Magnonics for Wireless: From Classical to Quantum"</li>
                                        <li>Pedram Johari, "Digital Twins for Wireless Networks: Real-time, connected multiverse where you can test and trust AI-driven RAN decisions before they hit the field"</li>
                                        <li>Miriam Leeser, "Deep Learning Implementations for Next-Generation Wireless Communications"</li>
                                        <li>Lili Su, "Multi-Agent Reinforcement Learning in Heterogeneous Environments"</li>
                                        <li>Andrea Lacava, "dApps: Enabling Real-Time AI-based Open RAN Control"</li>
                                        <li>Eduardo Baena, "From Terrestrial to Space: AI-Native Wireless Autonomy"</li>
                                        <li>Maxime Elkael, "Large Language Model for Next Generation RAN Optimization and Testing"</li>
                                        <li>Weiyan Shi, "Future AI Living: From Smart Devices to Your Seamless Companions"</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>1:00-2:00 pm</p></td>
                                <td><p>Networking Lunch</p></td>
                            </tr>
                            <tr>
                                <td><p>2:00-3:00 pm</p></td>
                                <td><p>Fireside Chat, Moderated by Ted Werth</p>
                                    <ul>
                                        <li>"Beyond the Invention: What Turns Research into a Business" with Greg Waters, MatrixSpace & Northeastern University Board of Trustees</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>3:00-3:50 pm</p></td>
                                <td><p>INSI Commercialization and Spin-Offs</p>
                                    <ul>
                                        <li>Ted Werth, "Research Ecosystem Overview"</li>
                                        <li>INSI Spin-Off Presentations</li>
                                        <li>Entrepreneur of the Year Award</li>
                                        <li>INSI Ignite Award</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><p>3:50-4:00 pm</p></td>
                                <td><p>Coffee Break</p></td>
                            </tr>
                            <tr>
                                <td><p>4:00-5:00 pm</p></td>
                                <td><p>Panel: AI-RAN, Moderated by Michele Polese</p>
                                    <ul>
                                        <li>Chris Christou, Senior Vice President - Booz Allen Hamilton</li>
                                        <li>Maike Meyer-Cutler, Director Business Development Strategic Accounts - American Tower</li>
                                        <li>Mauro Fihlo, SVP of AI-RAN - SoftBank</li>
                                        <li>Ahan Kak, Research Scientist - Nokia</li>
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
                                <td><p>Travel to Burlington (bus departing from East Village at 1:00 pm)<br/>141 S Bedford St, Building V, Burlington, MA 01803</p></td>
                            </tr>
                            <tr>
                                <td><p>2:00-4:00 pm</p></td>
                                <td><p>INSI Facilities/Space Tours in Burlington</p>
                                    <ul>
                                        <li>Colosseum</li>
                                        <li>Open6G and OTIC (R&D, Testing and System Integration)</li>
                                        <li>Live Drone Communications Demo</li>
                                    </ul>
                                </td>
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