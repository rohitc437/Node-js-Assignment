const mongoose = require("mongoose");

const profilesSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
});

const main = async () => {
  const Profile = mongoose.model("Profiles", profilesSchema);
  let data = new Profile({
    firstName: "Ram",
    lastName: "Sita",
    gender: "Male",
  });
  const result = await data.save();
  console.log(result);
};

main();
