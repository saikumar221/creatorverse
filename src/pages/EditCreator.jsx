import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useParams } from 'react-router-dom';

function EditCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    // Fetch the content creator's details
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (data) {
        setCreator({
          name: data.name,
          url: data.url,
          description: data.description,
          imageURL: data.imageURL
        });
      }

      if (error) {
        console.error('Error fetching creator:', error);
      }
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prevCreator) => ({
      ...prevCreator,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('creators')
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating creator:', error);
    } else {
      console.log('Creator updated successfully!');
      // Optionally, redirect the user after a successful update
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);
  
    if (error) {
      console.error('Error adding creator:', error);
    } else {
      navigate('/'); // Redirect back to the home page
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
        />
      </label>
      <label>
        URL:
        <input
          type="text"
          name="url"
          value={creator.url}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update Creator</button>
      <button onClick={handleDelete}>Delete Creator</button>
    </form>
  );
}

export default EditCreator;
