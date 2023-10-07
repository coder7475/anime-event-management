import { useEffect, useState } from "react";
import Member from "../Member/Member";

function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/src/assets/data/members.json")
      .then(res => res.json())
      .then(data => setMembers(data));
  },[]);

  console.log(members);

  return (
    <div className="mt-20 mb-40 max-w-5xl mx-auto">
      <h2 className="text-5xl text-center mt-10 font-bold text-burntSienna">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center mt-20 gap-10 items-center">
        {members.map(member => <Member key={member.id} member={member}></Member>)}
      </div>
    </div>
  );
}

export default Team;
