import AgentList from "./components/AgentList";
import Title from "./components/Title";
import axios from "axios";

const getAgents = async () => {
const res = await axios.get("https://valorant-api.com/v1/agents?language=tr-TR&isPlayableCharacter=true");
return res.data;
}


export default async function Home() {

  const {data:agents} = await getAgents();

  return (
   <main className="flex flex-col gap-6">
    <Title title="Agents" />
    <AgentList agents={agents} />
   </main>
  )
}
