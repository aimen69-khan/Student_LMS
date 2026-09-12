import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./AddTrainerModal.css";

const availableCourses = [
  "Web & App Development",
  "Data Science",
  "Digital Marketing",
];

export default function AddTrainerModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [courses, setCourses] = useState([]);
  const [campus, setCampus] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const toggleCourse = (course) => {
    setCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const handleSubmit = () => {
    if (!name || courses.length === 0) {
      setError("Enter a name and assign at least one course.");
      return;
    }

    onAdd({
      id: Date.now(),
      name,
      courses,
      campus: campus || "—",
      city: city || "—",
      progress: 0,
    });
    onClose();
  };

  return (
    <Modal title="Add new trainer" onClose={onClose}>
      <Input
        label="Trainer name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. Hassan Tariq"
      />

      <div className="course-select-group">
        <label className="course-select-label">
          Assign courses <span className="required">*</span>
        </label>
        <div className="course-select-options">
          {availableCourses.map((course) => (
            <label key={course} className="course-checkbox">
              <input
                type="checkbox"
                checked={courses.includes(course)}
                onChange={() => toggleCourse(course)}
              />
              <span>{course}</span>
            </label>
          ))}
        </div>
      </div>

      <Input
        label="Campus"
        value={campus}
        onChange={(e) => setCampus(e.target.value)}
        placeholder="e.g. Zaitoon Ashraf IT Park"
      />
      <Input
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="e.g. Karachi"
      />

      {error && <p className="add-trainer-error">{error}</p>}

      <Button variant="primary" onClick={handleSubmit}>
        Add trainer
      </Button>
    </Modal>
  );
}