const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('contact')
    .setDescription('Ways to contact me'),
    async execute(interaction) {
        try {
            const response = await fetch('https://hapi-sfpz.onrender.com/api/contacts');

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            const details = await response.json(); // Assuming JSON response

            const email = details[0].contacts.find(contact => contact.media === "Mail").link;
            const linkedIn = details[0].contacts.find(contact => contact.media === "Linked In").link;
            const git = details[0].contacts.find(contact => contact.media === "Git").link;

            await interaction.reply(`Email : ${email}\nLinked In : ${linkedIn}\nGit : ${git}`);
        } 
        catch (error) 
        {
            console.error('Error fetching developer details:', error);
            await interaction.reply('An error occurred while fetching developer details. Please try again later.');
        }
    },
};