const { badgeModel } = require("../models/badges")



const handleGetApiBadge = async (req,res) => 
{
    try {
        const badges = await badgeModel.find({});
        res.json(badges);
    }  
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve badges' });
    }
}



const handleGetBadge = async (req,res) => {
    res.render('badges');
}


const handlePostApiBadge = async (req,res) => {
    const { badgeName, badgeDescription, badgeUrl, skills, verify, company } = req.body;

    skillsArray =  skills.split(',').map(skill => skill.trim()); // Split and trim skills
  
    console.log(skills , skillsArray);

    const newBadge = await badgeModel.create({
      badgeName,
      badgeDescription,
      badgeUrl,
      skills: skillsArray,
      verify,
      company,
    });
    res.render('badges');
}

module.exports = {
    handleGetApiBadge,
    handleGetBadge,
    handlePostApiBadge,
}