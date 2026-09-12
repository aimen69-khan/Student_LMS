import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./AddAssignmentModal.css";


export default function AddAssignmentModal({ onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [topics, setTopics] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title || !dueDate) {
      setError("Enter a title and a due date.");
      return;
    }

    onAdd({
      id: Date.now(),
      title,
      dueDate,
      topics: topics ? Number(topics) : null,
      submissions: [],
    });
    onClose();
  };

  return (
    <Modal title="Add new assignment" onClose={onClose}>
      <Input
        label="Assignment title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="e.g. Portfolio Website"
      />
      <Input
        label="Due date"
        required
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Input
        label="Topics"
        type="number"
        value={topics}
        onChange={(e) => setTopics(e.target.value)}
        placeholder="e.g. 5 (optional)"
      />

      {error && <p className="add-assignment-error">{error}</p>}

      <Button variant="primary" onClick={handleSubmit}>
        Add assignment
      </Button>
    </Modal>
  );
}