import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  console.log("VC")
  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single(); // single() because we expect only one record

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="creator-detail">
      <img src={creator.imageURL} alt={`${creator.name}'s avatar`} />
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit Page</a>
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default ViewCreator;
