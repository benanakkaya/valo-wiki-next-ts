import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AgentType } from "../types/Types";

type PropTypes = {
  agent: AgentType;
};

const AgentCard: React.FC<PropTypes> = ({ agent }) => {
  return (
    <div className="relative bg-darkTwo border-[1px] border-white hover:border-primary rounded-lg p-4 flex items-center justify-center  group">
      <Image
        className="group-hover:opacity-0 group-hover:scale-50 transition-all duration-500"
        src={agent.displayIcon}
        alt={agent.displayName}
        width={200}
        height={200}
      />
      <div className="p-4 text-golden top-0 left-0 rounded-lg group-hover:opacity-100 flex flex-col gap-2 items-center justify-between opacity-0 absolute w-full h-full  transition-all duration-700 ">
        <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 text-lg font-bold lading-6">
          {agent.displayName}{" "}
          <span>
            <Image
              src={agent.displayIconSmall}
              alt={agent.displayName}
              width={16}
              height={16}
            />
          </span>
        </div>
        <p className="text-xs text-white">{agent.description}</p>
        </div>
        <Link href={`/agent/${agent.uuid}`} className="w-full text-center bg-primary border-white border-[1px] text-sm text-white px-2 py-1 rounded-lg">İncele</Link>
      </div>
    </div>
  );
};

export default AgentCard;
