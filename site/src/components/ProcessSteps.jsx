import React from 'react';
import styles from './ProcessSteps.module.css';

const WhiteCheckIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const steps = [
    {
        number: "Step 1",
        title: "Free Consultation",
        desc: "Every project begins with a free consultation. During this step, we discuss your ideas, answer questions, and learn more about your outdoor space. This initial conversation helps determine whether the project is a good fit and what options may be available based on your goals and property.",
        bg: "#fcfaf8"
    },
    {
        number: "Step 2",
        title: "On-Site Visit and Planning",
        desc: "If you decide to move forward, we schedule an on-site visit to review the space in more detail. This allows us to take measurements, discuss layout options, and better understand how the outdoor area will be used. Planning at this stage helps ensure the project is designed around the home, the property, and the homeowner’s needs.",
        bg: "#ffffff"
    },
    {
        number: "Step 3",
        title: "Project Review and Next Steps",
        desc: "After reviewing the details of the project, we outline the next steps so homeowners know what to expect before construction begins. This stage focuses on clarity helping homeowners understand the scope of work and how the project will move forward.",
        bg: "#fcfaf8"
    },
    {
        number: "Step 4",
        title: "Building the Outdoor Space",
        desc: "Once planning is complete, construction begins. Our team focuses on building the outdoor living space according to the agreed plan. Throughout the build, we aim to keep the process organized and communicate as needed so homeowners stay informed.",
        bg: "#ffffff"
    }
];

export default function ProcessSteps() {
    return (
        <section className={styles.stepsSection}>
            {steps.map((step, idx) => (
                <div key={idx} className={styles.stepRow} style={{ backgroundColor: step.bg }}>
                    <div className={styles.container}>
                        <div className={styles.stepContent}>
                            <div className={styles.iconArea}>
                                <div className={styles.iconCircle}>
                                    <WhiteCheckIcon />
                                </div>
                                <div className={styles.stepLabel}>{step.number}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                            </div>
                            <div className={styles.textArea}>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
