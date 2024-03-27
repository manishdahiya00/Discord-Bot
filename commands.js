import { REST, Routes } from "discord.js";
import { Client_Id, Login_Key } from "./keys.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];
const rest = new REST({ version: "10" }).setToken(Login_Key);
try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(Client_Id), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
