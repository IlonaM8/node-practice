const figlet = require("figlet");

figlet.text('Hello There!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data){
    if(err){
        console.log('Something is wrong... dah!');
        console.log(err);
        return;
    }
    console.log(data);
});


