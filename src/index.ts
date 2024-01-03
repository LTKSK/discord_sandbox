import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

console.log(process.env.TOKEN);

// const rest = new REST({ version: "10" }).setToken(TOKEN);

// try {
//   console.log("Started refreshing application (/) commands.");

//   await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

//   console.log("Successfully reloaded application (/) commands.");
// } catch (error) {
//   console.error(error);
// }
