import React from "react";
import { useNavigate } from "react-router-dom";

export default function Jobs() {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Project Manager",
      description: "Oversee all teams, manage timelines, investor prep, and ensure smooth project execution.",
      compensation: "4% Net Revenue Share (after 6 months)",
      commitment: "6 hours per day",
      location: "Remote"
    },
    {
      id: 2,
      title: "Management Assistant",
      description: "Support the project manager with scheduling, communications, and coordination across teams.",
      compensation: "2.5% Net Revenue Share (after 6 months)",
      commitment: "6 hours per day",
      location: "Remote"
    },
    {
      id: 3,
      title: "Legal Consultant",
      description: "Provide legal guidance for contracts, compliance, and regulatory requirements in crypto and gaming.",
      compensation: "1% Net Revenue Share (after 6 months)",
      commitment: "Flexible (advisory role)",
      location: "Remote"
    },
    {
      id: 4,
      title: "Business Consultant",
      description: "Advise on strategy, partnerships, and operational scaling for the crypto gaming platform.",
      compensation: "1% Net Revenue Share (after 6 months)",
      commitment: "Flexible (advisory role)",
      location: "Remote"
    },
    {
      id: 5,
      title: "Finance Consultant",
      description: "Oversee financial planning, budgeting, and investor reporting to ensure sustainable growth.",
      compensation: "1% Net Revenue Share (after 6 months)",
      commitment: "Flexible (advisory role)",
      location: "Remote"
    },
    {
      id: 6,
      title: "Marketing Specialist",
      description: "Lead marketing campaigns, content strategy, and community growth for platform launch.",
      compensation: "2.5% Net Revenue Share (after 6 months)",
      commitment: "6 hours per day",
      location: "Remote"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Open Positions</h1>
      {jobs.map((job) => (
        <div 
          key={job.id} 
          style={{ 
            border: "1px solid #ccc", 
            borderRadius: "8px", 
            padding: "16px", 
            marginBottom: "20px" 
          }}
        >
          <h2>{job.title}</h2>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Compensation:</strong> {job.compensation}</p>
          <p><strong>Commitment:</strong> {job.commitment}</p>
          <p><strong>Location:</strong> {job.location}</p>

          <button 
            style={{ 
              marginTop: "10px", 
              padding: "10px 15px", 
              backgroundColor: "#4CAF50", 
              color: "white", 
              border: "none", 
              borderRadius: "6px", 
              cursor: "pointer" 
            }}
            onClick={() => navigate(`/apply/${job.id}`, { state: { job } })}
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}
