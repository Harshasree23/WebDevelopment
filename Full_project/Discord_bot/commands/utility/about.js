const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('about')
    .setDescription('Info about the developer'),
    async execute(interaction) {
        try {
            const response = await fetch('https://hapi-sfpz.onrender.com/api/contacts');

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            const details = await response.json(); // Assuming JSON response

            await interaction.reply(`Name : ${details[0].name}\nWho am I ? : ${details[0].description}`);
        } 
        catch (error) 
        {
            console.error('Error fetching developer details:', error);
            await interaction.reply('An error occurred while fetching developer details. Please try again later.');
        }
    },
};