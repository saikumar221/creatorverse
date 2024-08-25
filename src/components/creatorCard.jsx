import { Link } from 'react-router-dom';

function creatorCard({ id,name, url, description, imageURL }) {
  console.log("CC")
  return (
    <div className="card">
    <Link to={`/view-creator/${id}`}>
      <img src={imageURL} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit Page</a>
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </Link>
  </div>
  );
  }
  
  export default creatorCard;