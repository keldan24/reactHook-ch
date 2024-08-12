import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const validateInputs = () => {
    if (!title || !description || !rating || !imageFile) {
      return 'Please fill in all fields and upload an image.';
    }
    if (isNaN(rating) || rating < 1 || rating > 10) {
      return 'Rating must be a number between 1 and 10.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

// Validate inputs
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      setTimeout(() => setError(''), 2000);
      return;
    }

    setError('');

// Handle image upload
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await fetch('http://localhost:3004/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      const imageURL = `http://localhost:3004/images/${data.fileName}`; // Correct URL
      setPosterURL(imageURL);
      onAdd({ title, description, posterURL: imageURL, rating });

// Reset form fields
      setTitle('');
      setDescription('');
      setImageFile(null);
      setRating('');
    } catch (err) {
      setError('Error uploading file.');
      setTimeout(() => setError(''), 2000);
      console.error('Error uploading file:', err);
    }
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="add-movie">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="10"
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
