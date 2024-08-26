import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import './ViewCreator.css';

function ViewCreator() {
  const { id } = useParams(); // Get the creator ID from the URL
  const [creator, setCreator] = useState(null); // State to store creator data
  console.log("VC");

  useEffect(() => {
    // Function to fetch creator data from Supabase
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single(); // Fetch a single record

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data); // Set the creator data in state
      }
    };

    fetchCreator();
  }, [id]);

  if (!creator) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div className="container">
        <div className="card-image">
          <img src={creator.imageURL} alt={`${creator.name}'s avatar`} />
        </div>
        <div className="card-body">
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>
          <a href={creator.url} target="_blank" rel="noopener noreferrer" className="button">Visit Page</a>
        </div>
        <div className="card-footer">
          <Link to={`/edit/${id}`}>
            <button className="button">Edit</button>
          </Link>
        </div>
    </div>
  );
}

export default ViewCreator;
