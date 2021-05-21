exports.sigin=function(req, res, next) {
    res.render('success',{
        data: JSON.stringify({"x":0})
    });
}