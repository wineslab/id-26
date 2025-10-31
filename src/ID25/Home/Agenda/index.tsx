import React from "react";
import SectionHeader from '../../Components/SectionHeader';
import Table from 'react-bootstrap/Table';
import "./index.css";

function Agenda() {
    return (
        <div>
            <SectionHeader text="PREVIOUS EVENTS"></SectionHeader>
              <p><a href="https://wiot.northeastern.edu/events/industry-day/" target="_blank">Industry Day 2023</a></p>
              <p><a href="https://wineslab.github.io/id-25/" target="_blank">Industry Day 2025</a></p>
        </div>
    );
}

export default Agenda;