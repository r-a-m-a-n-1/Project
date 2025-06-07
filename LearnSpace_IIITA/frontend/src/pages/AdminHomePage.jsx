import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useAuth } from "../context/AuthContext";
import api from "../api/api";
import { Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { db } from "../firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore"; // Firestore for metadata

const semesters = [
  { name: "Semester 1" },
  { name: "Semester 2" },
  { name: "Semester 3" },
  { name: "Semester 4" },
  { name: "Semester 5" },
  { name: "Semester 6" },
  { name: "Semester 7" },
  { name: "Semester 8" },
];

const branches = ["CSE", "IT", "ECE", "Other"];

const semesterSubjects = {
  "Semester 1": [
    "Engineering Physics",
    "Fundamentals of Electrical & Electronics Engineering",
    "Linear Algebra",
    "Problem Solving with Programming",
    "Technical Communication Skills",
    "Professional Ethics",
  ],
  "Semester 2": [
    "Computer Organization and Architecture",
    "Data Structures and Algorithms",
    "Discrete Mathematical Structures",
    "Principles of Data Communication",
    "Principles of Management",
    "Web Development",
    "Physical Education",
  ],
  "Semester 3": [
    "Object Oriented Methodologies",
    "Operating System",
    "Probability and Statistics",
    "Software Engineering",
    "Theory of Computation",
    "Introduction to Finance",
    "Yoga",
    "Indian Economics",
  ],
  "Semester 4": [
    "Computer Graphics and Visualization",
    "Computer Networks",
    "Database Management System",
    "Design and Analysis of Algorithms",
    "Principles of Programming Language",
    "Money and Banking",
  ],
  "Semester 5": [
    "Artificial Intelligence",
    "Cyber Security",
    "Design Thinking and Innovation",
    "Image and Video Processing",
    "Introduction to Machine Learning",
    "Project-I (Research Methodology)",
    "Economics of Business Environment",
  ],
};

export default function AdminHomePage() {
  const navigate = useNavigate();
  const { userName, logout } = useAuth();
  const name = userName.charAt(0).toUpperCase() + userName.slice(1);
  const initial = name.charAt(0);

  // Prevent back navigation
  useEffect(() => {
    const block = () => window.history.pushState(null, "", window.location.href);
    block();
    window.addEventListener("popstate", block);
    return () => window.removeEventListener("popstate", block);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white">
      <nav className="bg-blue-950 p-4 flex items-center justify-between">
        <div className="text-lg font-bold">
          Welcome,&nbsp;
          <Typewriter
            words={[name]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={90}
          />
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-800 rounded-full">
            {initial}
          </div>
          <span
            onClick={() => {
              logout();
              navigate("/admin/login", { replace: true });
            }}
            className="cursor-pointer text-white transition duration-300 hover:text-red-400 hover:underline"
          >
            Logout
          </span>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-4">
        <UploadMaterialForm />
      </main>
    </div>
  );
}


function UploadMaterialForm() {
  const [data, setData] = useState({
    sem: "Semester 1",
    branch: "",
    materialType: "Previous Year Paper", // Default
    lectureType: "", // holds the chosen lecture type
    customType: "",  // if lectureType === "Other"
    subject: "",
    year: "",
    paperType: "Mid Sem", // (only used if Previous Year Paper)
    title: "",
    file: null,
  });

  const [subjects, setSubjects] = useState(semesterSubjects["Semester 1"]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    setSubjects(semesterSubjects[data.sem] || []);
    setData((prev) => ({ ...prev, subject: "" }));
  }, [data.sem]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      sem,
      branch,
      year,
      materialType,
      lectureType,
      customType,
      paperType,
      title,
      subject,
      file,
    } = data;

    const showBranch = sem !== "Semester 1";
    const isPreviousYear = materialType === "Previous Year Paper";
    const isLectureNotes = materialType === "Lecture Notes and Assignment";

    // Basic required-fields check
    if (!file || !year || !subject || !title || (showBranch && !branch)) {
      return alert("Please fill in all required fields.");
    }

    // If uploading Lecture Notes, ensure lectureType is chosen
    if (isLectureNotes) {
      if (!lectureType) {
        return alert("Please select a Lecture Type.");
      }
      if (lectureType === "Other" && !customType.trim()) {
        return alert("Please specify the 'Other' lecture type.");
      }
    }

    // Compute the final lectureType string
    let finalLectureType = "";
    if (isLectureNotes) {
      finalLectureType =
        lectureType === "Other" ? customType.trim() : lectureType;
    }

    const finalType = materialType;

    try {
      const cloudName = "dv5djzhni";
      const uploadPreset = "unsigned_preset";
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`;

      const formData = new FormData();
      const uniqueFileName = `${file.name
        .split(".")[0]
      }_${Date.now()}.${file.name.split(".").pop()}`;
      formData.append("file", file, uniqueFileName);
      formData.append("upload_preset", uploadPreset);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", cloudinaryUrl, true);

      // Upload start
      xhr.upload.onloadstart = () => {
        setUploading(true);
        setUploadProgress(0);
      };

      // Real progress tracking
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentCompleted = Math.round(
            (event.loaded / event.total) * 100
          );
          setUploadProgress(percentCompleted);
        }
      };

      xhr.onerror = () => {
        throw new Error("Upload failed. Please try again.");
      };

      xhr.onload = async () => {
        if (xhr.status !== 200 && xhr.status !== 201) {
          const err = JSON.parse(xhr.responseText);
          throw new Error(err.error?.message || "Cloudinary upload failed.");
        }

        const result = JSON.parse(xhr.responseText);
        const url = result.secure_url;

        // Ensure the year document exists
        const yearRef = doc(db, "semesters", sem, "years", year);
        const yearSnap = await getDoc(yearRef);
        if (!yearSnap.exists()) {
          await setDoc(yearRef, {});
        }

        // Now save in “materials” subcollection
        const matColl = collection(yearRef, "materials");
        const matRef = doc(matColl);
        await setDoc(matRef, {
          title,
          materialType: finalType,
          // If it's a previous year paper, keep existing paperType; otherwise, empty
          paperType: isPreviousYear ? paperType : "",
          subject,
          branch: showBranch ? branch : "",
          fileURL: url,
          lectureType: finalLectureType, // stores chosen lectureType or custom
          uploadedAt: new Date().toISOString(),
        });

        alert("Material uploaded!");

        // Reset form (but keep materialType so you can quickly upload another of same kind)
        setData((prev) => ({
          ...prev,
          branch: "",
          subject: "",
          year: "",
          title: "",
          file: null,
          lectureType: "", // reset the dropdown
          customType: "",  // reset the “Other” box
          // materialType remains, so you can keep uploading same category
          paperType: "Mid Sem",
        }));
        setUploading(false);
        setUploadProgress(0);
      };

      xhr.send(formData);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload material.");
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const showBranch = data.sem !== "Semester 1";
  const isPreviousYear = data.materialType === "Previous Year Paper";
  const isLectureNotes = data.materialType === "Lecture Notes and Assignment";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-xl w-full max-w-2xl shadow-lg text-white space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-blue-400">
        Upload Study Material / Paper
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          name="sem"
          value={data.sem}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700"
        >
          {semesters.map((s) => (
            <option key={s.name}>{s.name}</option>
          ))}
        </select>

        {showBranch && (
          <select
            name="branch"
            value={data.branch}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700"
          >
            <option value="">Select Branch</option>
            {branches.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        )}

        <select
          name="materialType"
          value={data.materialType}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700"
        >
          <option>Previous Year Paper</option>
          <option>Lecture Notes and Assignment</option>
        </select>

        <input
          type="text"
          name="year"
          placeholder="Year (e.g., 2023)"
          value={data.year}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700"
        />

        <select
          name="subject"
          value={data.subject}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700"
        >
          <option value="">Select Subject</option>
          {subjects.map((subj) => (
            <option key={subj}>{subj}</option>
          ))}
        </select>

        {isPreviousYear && (
          <select
            name="paperType"
            value={data.paperType}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700"
          >
            <option>Mid Sem</option>
            <option>End Sem</option>
            <option>Quiz</option>
          </select>
        )}

        {isLectureNotes && (
          <div className="col-span-full flex flex-col gap-2">
            <select
              name="lectureType"
              value={data.lectureType}
              onChange={handleChange}
              className="p-2 rounded bg-gray-700"
            >
              <option value="">Select Lecture Type</option>
              <option>Assignment</option>
              <option>Tutorial Sheet</option>
              <option>Lecture Notes</option>
              <option>PPT</option>
              <option>Handwritten Notes</option>
              <option>Other</option>
            </select>

            {data.lectureType === "Other" && (
              <input
                type="text"
                name="customType"
                placeholder="Please specify (e.g., 'Lab Manual')"
                value={data.customType}
                onChange={handleChange}
                className="p-2 rounded bg-gray-700"
              />
            )}
          </div>
        )}

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700"
        />

        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>

      {uploading && (
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-700 rounded-full overflow-hidden h-4">
            <div
              className="h-4 bg-gradient-to-r from-green-400 to-teal-500 transition-all duration-200"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <span className="text-white text-sm w-12 text-right">
            {uploadProgress}%
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={uploading}
        className={`px-6 py-2 rounded ${
          uploading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
}
