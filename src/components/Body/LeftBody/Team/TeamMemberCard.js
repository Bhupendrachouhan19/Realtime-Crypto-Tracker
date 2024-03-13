import React from 'react'

const TeamMemberCard = ({ name, profilePicPath, designation, bio }) => {
  // console.log(profilePicPath)
  return (
    <div className="flex flex-col md:flex-row md:items-center text-center md:text-left p-4 gap-2 bg-[#e8f4fd] mx-6 mt-6 rounded-xl border border-gray-800">
      <div className="flex-col justify-center text-center md:ml-3 md:mt-3">
        <div className="mx-auto w-28 h-28 md:w-32 md:h-36 rounded-lg overflow-hidden">
          <img
            src={require("../../../../utils/assets/" + profilePicPath)}
            alt={name}
            className="w-full h-full"
          />
        </div>
        <div className="mt-3">
          <span className="font-bold text-lg">{name}</span>
        </div>
        <div className="leading-[0rem]">
          <span className="text-[#7b8c96] text-sm ">{designation}</span>
        </div>
      </div>
      <div className="text-justify mx-3 md:ml-5 md:mr-3">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard