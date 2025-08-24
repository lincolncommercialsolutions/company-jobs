import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "./firebase";

export default function Apply() {
  const location = useLocation();
  const job = location.state?.job;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "applications"), {
        jobTitle: job.title,
        jobId: job.id,
        name,
        email,
        reason,
        createdAt: Timestamp.now()
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting application: ", error);
    }
  };

  if (!job) {
    return <h2>No job selected. Go back to the Jobs page.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Apply for {job.title}</h1>

      {submitted ? (
        <h3>✅ Your application has been submitted!</h3>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name: </label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              style={{ marginLeft: "10px" }} 
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email: </label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ marginLeft: "10px" }} 
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Why are you a good fit? </label>
            <textarea 
              rows="4" 
              value={reason} 
              onChange={(e) => setReason(e.target.value)} 
              style={{ marginLeft: "10px", width: "100%" }} 
              required 
            />
          </div>
          <button 
            type="submit" 
            style={{ 
              padding: "10px 15px", 
              backgroundColor: "#4CAF50", 
              color: "white", 
              border: "none", 
              borderRadius: "6px", 
              cursor: "pointer" 
            }}
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
