import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard'; // Updated import
import { Link } from 'react-router-dom';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*');

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    };

    fetchCreators();
  }, []);

  return (
    <section className="container">
      <h1>Content Creators</h1>
      <div className="grid">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          ))
        ) : (
          <p>No content creators found.</p>
        )}
      </div>
      <div className="actions">
        <Link to="/add-creator" className="button">Add New Creator</Link>
      </div>
    </section>
  );
}

export default ShowCreators;
