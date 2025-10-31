import React from "react";
import SectionHeader from '../../Components/SectionHeader';
import Table from 'react-bootstrap/Table';
import "./index.css";

function Posters() {
    return (
        <div>
            <SectionHeader text="INDUSTRY DAY 26 POSTERS AND PRESENTATIONS"></SectionHeader>
            <div className="section agenda">
                <div className="details">
                    <Table bordered>
                        <colgroup>
                            <col className="time-column" />
                            <col className="item-column" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th className="header-day-row">Presenter</th>
                                <th className="header-day-row">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hussam Abdellatif</td>
                                <td>Real-Time THz SDR</td>
                            </tr>
                            <tr>
                                <td>Mohammad Abdi</td>
                                <td>Low-Latency High-Rate Robust Distributed Inference in Mobile Edge Computing Systems</td>
                            </tr>
                            <tr>
                                <td>Sergi Aliaga</td>
                                <td>Breaking Barriers: Pioneering Satellite Communications in the Terahertz Band</td>
                            </tr>
                            <tr>
                                <td>Andrew Ashdown</td>
                                <td>Data-Driven Security in NextG Networks: Safeguarding the Future of Connectivity</td>
                            </tr>
                            <tr>
                                <td>Eduardo Baena</td>
                                <td>Space-O-RAN</td>
                            </tr>
                            <tr>
                                <td>Barath Balamurugan</td>
                                <td>Remote Human-Robot Collaboration in XR</td>
                            </tr>
                            <tr>
                                <td>Duschia Bodet</td>
                                <td>Enabling Broadband Communications in the Near Field</td>
                            </tr>
                            <tr>
                                <td>Matteo Bordin</td>
                                <td>Demo in Boston: Enabling Deep Reinforcement Learning Research for Energy Saving in Open RAN<br/>Demo in Burlington: UAVs as 5G Telecommunications Tools</td>
                            </tr>
                            <tr>
                                <td>Pietro Brach del Prever</td>
                                <td>PACIFISTA: Conflict Mitigation and Management in Open RAN</td>
                            </tr>
                            <tr>
                                <td>Xavier Cantos Roman</td>
                                <td>THz vs FSO: A Comparative Propagation Analysis</td>
                            </tr>
                            <tr>
                                <td>Mayank Chadha</td>
                                <td>Remote Human-Robot Collaboration in XR</td>
                            </tr>
                            <tr>
                                <td>Guodong Chen</td>
                                <td>Streaming Spatial Videos on XR Headsets</td>
                            </tr>
                            <tr>
                                <td>Hai Cheng</td>
                                <td>ORANSlice: An Open-Source 5G Network Slicing Platform for O-RAN</td>
                            </tr>
                            <tr>
                                <td>Phuc Dinh</td>
                                <td>mm-NOLOC: mmWave-based Localization for Mobile Networks without 3GPP Location Service</td>
                            </tr>
                            <tr>
                                <td>Maxime Elkael</td>
                                <td>LLM Assistant for O-RAN</td>
                            </tr>
                            <tr>
                                <td>Samar Elmaadawy</td>
                                <td>When Terahertz Radiation Meets the Human Body</td>
                            </tr>
                            <tr>
                                <td>Gabriele Gemmi</td>
                                <td>Real-Time Colosseum</td>
                            </tr>
                            <tr>
                                <td>Moinak Ghoshal</td>
                                <td>Enabling Emerging Applications in 5G Through UE-Assisted Proactive PHY Frame Configuration</td>
                            </tr>
                            <tr>
                                <td>Tanzil Hassan</td>
                                <td>OffloaDNN: Shaping DNNs for Scalable Offloading of Computer Vision Tasks at the Edge</td>
                            </tr>
                            <tr>
                                <td>Andrea Lacava</td>
                                <td>dApps: Enabling Real-Time AI-Based Open RAN Control</td>
                            </tr>
                            <tr>
                                <td>Stefano Maxenti</td>
                                <td>Automation in 5G and O-RAN</td>
                            </tr>
                            <tr>
                                <td>Neagin Neasamoni Santhi</td>
                                <td>dApp for In-band Uplink Interference Detection in 5G NR</td>
                            </tr>
                            <tr>
                                <td>Francesco Pessia</td>
                                <td>FlexRFML: Dynamic Neural Networks on FPGAs for Adaptive Spectrum Sensing</td>
                            </tr>
                            <tr>
                                <td>Sergey Petrushkevich</td>
                                <td>Live Demo of Mobile Sub Terahertz Communications at 110 GHz to 170 GHz toward 6G and Beyond</td>
                            </tr>
                            <tr>
                                <td>Amin Pishehvar</td>
                                <td>Hybrid Magnonics for Coherent Information Processing</td>
                            </tr>
                            <tr>
                                <td>Reshma Prasad</td>
                                <td>Bridging RAN Insights to Application-level KPMs</td>
                            </tr>
                            <tr>
                                <td>K M Rumman</td>
                                <td>Reimagining Wireless Systems through Enhanced MIMO and Sensing-Assisted Edge Computing</td>
                            </tr>
                            <tr>
                                <td>Ali Saeizadeh</td>
                                <td>Multi-Modal Non-Invasive Deep Learning Framework for Progressive Prediction of Seizures</td>
                            </tr>
                            <tr>
                                <td>Miquel Sirera Perelló</td>
                                <td>JARVIS: Disjoint Large Language Models on Radio VLANs for Intelligent Services</td>
                            </tr>
                            <tr>
                                <td>Maria Tsampazi</td>
                                <td>PandORA: Automated Design and Comprehensive Evaluation of Deep Reinforcement Learning Agents for Open RAN</td>
                            </tr>
                            <tr>
                                <td>Davide Villa</td>
                                <td>X5G: An Open, Programmable, Multi-vendor 5G O-RAN Testbed with NVIDIA ARC and OpenAirInterface</td>
                            </tr>
                            <tr>
                                <td>Zhewen Yang</td>
                                <td>Streaming Spatial Videos on XR Headsets</td>
                            </tr>
                            <tr>
                                <td>Ayberk Yarkin Yildiz</td>
                                <td>CaP: Model Distributed Inference over Communication-Aware DNN Pruning</td>
                            </tr>
                            <tr>
                                <td>Milin Zhang</td>
                                <td>Fast and Reliable Deep Learning in 6G Networks</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Posters;