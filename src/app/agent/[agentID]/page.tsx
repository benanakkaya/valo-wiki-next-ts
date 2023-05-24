import axios from "axios";
import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";
import React from "react";
import AgentVoice from "./components/AgentVoice";


type PropTypes = {
  params: { agentID: String };
};

const getAgent = async (id: String) => {
  const res = await axios.get(
    `https://valorant-api.com/v1/agents/${id}?language=tr-TR`
  );
  return res.data;
};

interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string | null;
}



/* @ts-expect-error Async Server Component */
const AgentPage: React.FC<PropTypes> = async ({ params }) => {
  const { data: agent } = await getAgent(params.agentID);


  return (
    <div className={`text-golden`}>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-2">
          <Image
            src={agent.fullPortrait}
            alt={agent.displayName}
            width={2048}
            height={1860}
          />
        </div>
        <div className="col-span-5 lg:col-span-3 py-12 flex flex-col gap-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            {agent.displayName}{" "}
            <AgentVoice voice={agent.voiceLine.mediaList[0].wave} />
          </h1>
          <p className="text-lg text-white">{agent.description}</p>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Yetenekler</h2>
            <div className="grid grid-cols-2 gap-2">
              {agent.abilities?.map(
                (ability: Ability) =>
                  ability.displayIcon && (
                    <div className="border-[1px] border-white rounded-lg p-3 flex flex-col md:flex-row items-center gap-2 text-white">
                      <Image
                        src={ability.displayIcon}
                        alt={ability.displayName}
                        width={64}
                        height={64}
                      />
                      <div className="flex-1 text-center ">
                        <h4 className="text-wghite">{ability.displayName}</h4>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPage;

type PropsMetadata = {
  params: { agentID: string };
};


export async function generateMetadata(
  { params }: PropsMetadata,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.agentID;
 
  // fetch data
  const {data:agent} = await getAgent(id);

 
 
  return {
    title: agent.displayName,
    description: agent.description,
    icons: {
      icon: agent.displayIconSmall,
    },
  };
}