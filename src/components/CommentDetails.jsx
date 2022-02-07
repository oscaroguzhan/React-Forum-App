import React from "react";


const CommentDetails = ({ comment }) => {
  
  
  const { body, name, email } = comment;
  return (
    <div className="active">
      <section>
        <h6>
          <strong>Name: </strong>
          {name}
        </h6>
        <h6>
          <strong>Email:</strong> {email}
        </h6>
        <h6 >
          <strong>Comment: </strong> {body}
        </h6>
      </section>

      
    </div>
  );
};

export default CommentDetails;
