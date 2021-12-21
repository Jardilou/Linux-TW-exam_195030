
let room = require('../models/roomModel')

let roomlist = [];




exports.roomNew = function(req, res){
    let nom_pièce = req.params.nom_pièce;
    let largeur = req.body.largeur;
    let longueur = req.body.longueur;

    var surface = largeur * longueur;

    let Room = new room (nom_pièce, surface)
    roomlist.push(Room)
    res.redirect("/room/list")
}

exports.roomList = function(req,res){
    res.render('roomList.ejs', { pièces_infos : roomlist});
}

exports.roomAdd = function(req,res){
    res.render('roomAdd.ejs', {"nom_pièce":"", "largeur":"", "longueur":""})
}