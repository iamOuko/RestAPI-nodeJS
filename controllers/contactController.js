const asyncHandler = require("express-async-handler");
//@route GET /api/contacts
const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "Get all contacts" })
});

//@route POST /api/contacts
const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields required!")
    }
    res.status(201).json({ message: "Create new contact" })
});


//@route GET /api/contacts/:id
const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@route PUT /api/contacts/:id
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@route DELETE /api/contacts/:id
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});


module.exports = { 
    getContacts,
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
};