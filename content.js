function autofillForm() {
    const jobTitleInputs = document.querySelectorAll('input[data-automation-id="jobTitle"]');
    const companyInputs = document.querySelectorAll('input[data-automation-id="company"]');
    const locationInputs = document.querySelectorAll('input[data-automation-id="location"]');
    const currentlyWorkHereInputs = document.querySelectorAll('input[data-automation-id="currentlyWorkHere"]');
    const descriptionInputs = document.querySelectorAll('textarea[data-automation-id="description"]');

    const autofillData = [
        {
            jobTitle: "Software Engineering Intern",
            company: "Kathalyst",
            location: "Medford, MA",
            currentlyWorkHere: false,
            description: `• Accelerated new feature deployment at an early-stage startup by establishing a GitHub Action CI/CD pipeline.
• Developed an integrated Azure and Grafana environment to monitor application metrics and improve error identification.
• Optimized application architecture by profiling and implementing batch queries for PostgreSQL databases, achieving over 50% improvement in loading speed.
• Built a retrieval-augmented generation (RAG) pipeline to retrieve relevant context for large language models.`
        },
        {
            jobTitle: "Research Assistant",
            company: "Human Interaction Lab (Tufts)",
            location: "Medford, MA",
            currentlyWorkHere: false,
            description: `• Enhanced the GailBot Python package by adding support for multimedia formats and enabling interaction with AWS S3 objects.
• Prototyped a user interface within a PyQt desktop application for interacting with the IBM Watson Speech-to-text API.
• Debugged and tested the application prior to a UCLA workshop for Conversation Analysis researchers.`
        },
        {
            jobTitle: "Data Analytics Intern",
            company: "Tufts Technology Services",
            location: "Remote",
            currentlyWorkHere: false,
            description: `• Extended a data pipeline with Bash scripts to automate data backups.
• Configured custom Prometheus metrics and alerts, and created Grafana dashboards for real-time performance monitoring.
• Implemented Golang scripts to process raw JSON data and crafted interactive D3.js visualizations to synthesize data insights.`
        },
        {
            jobTitle: "Front Desk & Operations Intern",
            company: "Tufts Conference & Event Services",
            location: "Medford, MA",
            currentlyWorkHere: false,
            description: `• Answered phone calls and checked in guests at the front desk.
• Prepared facilities efficiently and coordinated with team members to meet evolving event needs.`
        }
        // {
        //     jobTitle: "",
        //     company: "",
        //     location: "",
        //     currentlyWorkHere: false,
        //     description: ``
        // }
    ];

    autofillData.forEach((data, index) => {
        if (jobTitleInputs[index] && jobTitleInputs[index].value === "") {
            jobTitleInputs[index].value = data.jobTitle;
        }
        if (companyInputs[index] && companyInputs[index].value === "") {
            companyInputs[index].value = data.company;
        }
        if (locationInputs[index] && locationInputs[index].value === "") {
            locationInputs[index].value = data.location;
        }
        // if (currentlyWorkHereInputs[index]) currentlyWorkHereInputs[index].checked = data.currentlyWorkHere;
        if (descriptionInputs[index] && descriptionInputs[index].value === "") {
            descriptionInputs[index].value = data.description;
        }
    });
}

browser.runtime.onMessage.addListener((message) => {
    console.log("Message received in content.js: ", message);
    if (message.action === "autofill") {
        autofillForm();
    }
});