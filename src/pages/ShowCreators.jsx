import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/creatorCard.jsx';
import { Link } from 'react-router-dom';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      console.log("call")
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
  console.log("Hi")
  return (
    <div>
      {creators.length > 0 ? (
        creators.map((creator) => (
          <Card
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
          <div>
      <Link to="/add-creator">
        <button>Add New Creator</button>
      </Link>
    </div>
    </div>
  );
}

export default ShowCreators;
