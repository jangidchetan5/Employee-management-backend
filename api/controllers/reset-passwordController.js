const { authCollectionObj } = require("../../models/user");
const bcrypt = require("bcrypt");

exports.reset_password = async function (req, res) {
    const _id = req.body._id;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const user = await authCollectionObj.find({ _id });
    try {

        bcrypt.compare(oldPassword, user[0].password, function (err, result) {
            if (err) {
                res.status(401).json({ message: "something went wrong" });
            }
            if (result) {
                bcrypt.hash(newPassword, 10, async function (err, hash) {
                    // Store hash in your password DB.
                    if (err) {
                        return res.status(500).json({ message: "something  went wrong" });
                    }
                    else {
                        //console.log(hash)
                        const update = { password: hash }

                        authCollectionObj.findByIdAndUpdate(_id, update, (err, updatedRes) => {
                            if (err) {
                                return res.status(500).json({ message: "something  went wrong" });
                            }
                            else {

                                res.status(200).json({ message: "successful password updated" });
                            }
                        });


                    }
                });

            } else {
                res.status(401).json({ message: "old password not matched" });
            }
        });


    } catch (e) {
        res.status(500).send(e);
    }
};