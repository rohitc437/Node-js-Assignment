const { Employe, Tech } = require("../models/employe");

const employedata = async (req, res) => {
  const emp = await Employe.aggregate([
    {
      $lookup: {
        from: "technology",
        localField: "technology",
        foreignField: "tech",
        as: "anything",
      },
    },
  ]);
  res.status(200).send(emp);
};

module.exports = {
  employedata,
};
