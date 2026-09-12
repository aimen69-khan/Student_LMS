import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./AddQuizModal.css";

export default function AddQuizModal({ onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [module, setModule] = useState("");
  const [questions, setQuestions] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title || !module || !questions || !dueDate) {
      setError("Fill in all fields to add the quiz.");
      return;
    }

    onAdd({
      id: Date.now(),
      title,
      module,
      questions: Number(questions),
      dueDate,
      status: "ACTIVE",
    });
    onClose();
  };

  return (
    <Modal title="Add new quiz" onClose={onClose}>
      <Input
        label="Quiz title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="e.g. CSS Quiz"
      />
      <Input
        label="Module"
        required
        value={module}
        onChange={(e) => setModule(e.target.value)}
        placeholder="e.g. Front-End Development"
      />
      <Input
        label="Number of questions"
        required
        type="number"
        value={questions}
        onChange={(e) => setQuestions(e.target.value)}
        placeholder="e.g. 40"
      />
      <Input
        label="Due date"
        required
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      {error && <p className="add-quiz-error">{error}</p>}

      <Button variant="primary" onClick={handleSubmit}>
        Add quiz
      </Button>
    </Modal>
  );
}