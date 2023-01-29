const Profile = require("../models/profiles");

const AllProfiles = async (req, res) => {
  const allProfiles = await Profile.find();
  res.status(200).send(allProfiles);
};

const AddProfile = async (req, res) => {
  const profile = await Profile.create(req.body);
  res.status(201).send(profile);
};

const OneProfile = async (req, res) => {
  const { id } = req.params;
  const profile = await Profile.findById({ _id: id });
  res.json(profile);
};

module.exports = {
  AllProfiles,
  OneProfile,
  AddProfile,
};
