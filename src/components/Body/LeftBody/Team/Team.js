import React from 'react';
import { teamData } from '../../../../utils/assets/constants/teamData';
import TeamMemberCard from './TeamMemberCard';

const Team = () => {
  return (
    <div className="border-4 bg-white pt-5 pb-6 rounded-xl border-red-500 max-w-[93vw] grow ">
      <div className="ml-6 mb-3">
        <span className="text-4xl font-bold">Team</span>
      </div>
      <div className="mx-6 text-justify">
        <p className='md:text-2xl leading-5 '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda in commod.
        </p>
      </div>
      <div>
        {teamData.map((teamMate) => (
          <TeamMemberCard
            name={teamMate.name}
            profilePicPath={teamMate.profilePicPath}
            designation={teamMate.designation}
            bio={teamMate.bio}
            key={teamMate.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Team