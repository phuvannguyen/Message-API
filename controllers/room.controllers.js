import Rooms from "../models/room.model"


export const { listChat } = async function(req, res) {
    await Rooms.find({member: Rooms.member.find(member => member === req.body.username)},
                                function(err, result) {
                                    if (err) {
                                        res.send(err)
                                    };
                                    res.json(result)
                                });    
};


