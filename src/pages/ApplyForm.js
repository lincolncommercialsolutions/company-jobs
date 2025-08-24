import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function ApplyForm() {
  const { id } = useParams();
  const location = useLocation();
  const [job, setJob] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [resume, setResume] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.job) {
      setJob(location.state.job);
    } else {
      setJob({ title: `Job #${id}` });
    }
  }, [location.state, id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setStatusMessage("Only PDF files are allowed for resume.");
      setResume(null);
      autoClearStatus();
      return;
    }
    setStatusMessage("");
    setResume(file);
  };

  const autoClearStatus = () => {
    setTimeout(() => setStatusMessage(""), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatusMessage("Please fill in your name and email.");
      autoClearStatus();
      return;
    }

    try {
      let resumeURL = "";
      if (resume) {
        const storageRef = ref(storage, `resumes/${Date.now()}_${resume.name}`);
        await uploadBytes(storageRef, resume);
        resumeURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "applications"), {
        jobTitle: job.title,
        name: form.name,
        email: form.email,
        message: form.message,
        resumeURL,
        createdAt: serverTimestamp()
      });

      setStatusMessage("✅ Application submitted successfully!");
      setForm({ name: "", email: "", message: "" });
      setResume(null);
      document.getElementById("resumeInput").value = "";
      autoClearStatus();
    } catch (err) {
      console.error("Error submitting application:", err);
      setStatusMessage("❌ There was an error submitting your application.");
      autoClearStatus();
    }
  };

  if (!job) return <p>Loading opportunity info...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Apply for: {job.title}</h2>
      {statusMessage && (
        <p style={{ color: statusMessage.startsWith("✅") ? "green" : "red" }}>{statusMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px" }}
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px", height: "100px" }}
        />
        <input
          type="file"
          id="resumeInput"
          onChange={handleFileChange}
          style={{ display: "block", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
