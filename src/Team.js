import React, { useState } from "react";

function Team({ members, position }) {
  // const members = props.members;
  // const position = props.position;

  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div>
      <p>Meet the team of {position}</p>
      {members.map((member) => (
        <div key={member.id}>
          <p>
            Name: {member.title} {member.name}
          </p>
        </div>
      ))}
      <>
        <button onClick={handleClick}>You have clicked me {click} times</button>
      </>
    </div>
  );
}

export default Team;
