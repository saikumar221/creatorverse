import { Link } from 'react-router-dom';

function CreatorCard({ id, name, url, description, imageURL }) {
  return (
    <Link to={`/view-creator/${id}`} >
    <article className="card container">
      <header>
        <img src={imageURL} alt={`${name}'s avatar`} className="card-image" />
        <h2>{name}</h2>
      </header>
      <p>{description}</p>
      <div className="actions">
        <a href={url} target="_blank" rel="noopener noreferrer" className="button">Visit Page</a>
        <Link to={`/edit/${id}`} className="button">Edit</Link>
      </div>
    </article>
    </Link>
  );
}

export default CreatorCard;
