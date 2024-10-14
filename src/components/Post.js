import React from 'react';
import TrashBin from '../trash-bin.png';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

const PostComponent = ({ post: { titulo, body, id }, onDelete }) => {
  return (
    <div style={styles}>
      <h3>{titulo}</h3>
      <p>{body}</p>
      <button className="btn btn-danger btn-trash" type="button" onClick={() => onDelete(id)}>
        <img width="15" src={TrashBin}/>
      </button>
    </div>
  );
};

export default PostComponent;
