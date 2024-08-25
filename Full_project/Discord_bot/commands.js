const { REST, Routes } = require('discord.js');
const { client_id, server_id, token } = require('./config');
const fs = require('node:fs/promises'); // Using promises for cleaner async/await handling
const path = require('node:path');

const commands = [];
const foldersPath = path.join(__dirname, 'commands');

async function registerCommands() {
  const commandFolders = await fs.readdir(foldersPath);

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = await fs.readdir(commandsPath);

    for (const file of commandFiles) {
      if (!file.endsWith('.js')) continue; // Only process JavaScript files

      const filePath = path.join(commandsPath, file);
      const command = require(filePath);

      if ('data' in command && 'execute' in command) {
        commands.push(command.data.toJSON()); // Add valid commands to the array
        console.log(`Adding command: ${command.data.name}`);
      } else {
        console.warn(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
      }
    }
  }

  // Register the commands (if any)
  if (commands.length > 0) {
    try {
      console.log(`Started registering ${commands.length} application (/) commands.`);
      await rest.put(Routes.applicationGuildCommands(client_id, server_id), {
        body: commands,
      });
      console.log(`Successfully registered ${commands.length} application (/) commands.`);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log('No new commands found to register.');
  }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// Register commands
registerCommands();