const { contactModel } = require("../models/contact")



const handleGetApicontact = async (req,res) => 
{
    try {
        const contacts = await contactModel.find({}, { _id: 0, __v: 0 });
        res.json(contacts);
    }  
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve contacts' });
    }
}



const handleGetcontact = async (req,res) => {
    try{
        return res.render('contact');
    }
    catch(err)
    {
        return res.json({ error:"Error in rendering home page" });
    }
}


const handlePostApicontact = async (req,res) => {
    
    // getting contact data from the form
     try{
        const mediaData = req.body;
        // console.log(mediaData);
        const contactName = mediaData.contactName[0];
        const desc = mediaData.contactDescription[0];
        
        let media = [];
        for(let i=0 ; i< mediaData.mediaName.length ; i++)
        {
            let temp = {
                media : `${mediaData.mediaName[i]}`,
                link : `${mediaData.mediaLink[i]}`
            }
            media.push(temp);
        }
       
        // console.log(contactName, "\n" , desc , "\n" , media);

        await contactModel.create({
            name: contactName,
            description : desc,
            contacts: media,
        });

        return res.redirect('/api/contacts');
        
    }
    catch(err){
        return res.json({ error:"Error in getting contact data", err: err });   
    }
    
}

module.exports = {
    handleGetApicontact,
    handleGetcontact,
    handlePostApicontact,
}