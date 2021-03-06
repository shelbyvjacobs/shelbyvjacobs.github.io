import React from 'react';
import "./About.css";

export default function About(props) {
    return (
        <div className="About" id="about">
            <div className="About-section">
                <div className="About-img left"></div>
                <div className="About-details-container">
                    <p className="header">An Archivist turned Developer. </p>
                    <div className="About-profile"></div>
                    <p className="About-details">As an Archivist, I became accustomed to handling large amounts of unfiltered and unsorted information. I learned to organize and build hierarchies to ensure effective retrieval and productive workflow. I built a unique understanding of information and how it relates to the whole.</p>
                    <p className="About-details">I discovered early in my career that my interest laid in managing digital resources. However, I didn't know much about them beyond the theoretical, and I wanted to understand it on a deeper level. I decided to take my education into my own hands and enroll in the Software Engineering Immersive bootcamp at General Assembly.</p>
                    <p className="About-details">My experience at General Assembly taught me much more than how to code: it fueled the fire of my passion for <span className="italic">clean</span> code and accessible information. I also realized the positive impact a usuable and appealing design can have on a user's experience.</p>
                    <p className="About-tagline">The future of information is digital. I want to make it beautiful and functional.</p>
                </div>
                <div className="About-img right"></div>
            </div>
        </div>
    );
};

