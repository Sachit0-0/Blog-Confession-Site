import React, { useState, ChangeEvent, FormEvent } from 'react';

const ConfessForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    setTitle('');
    setDescription('');
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="container confess-form">
      <h2>Confess here</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Confession Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Confession Description (At least 15 Characters)
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Confession
        </button>
      </form>
    </div>
  );
};

export default ConfessForm;
