class Form {
    constructor(){

    }
    display(){
      var title = createElement('h2');
      title.html("Car Racing Game");
      title.position(300,200);

      var input = createInput('Name');
      input.position(400,200);

      var button = createButton('Ready!');
      button.position(400,400);
      button.mousePressed();


      var greeting = createElement('h2');
      button.mousePressed(function(){

        input.hide();
        button.hide();
        var name = input.value();
        playerCount++;
        player.updateCount(playerCount);
        player.update(name);
        greeting.html(name + ',' + 'Welcome to the game!');
        greeting.position(200,200);
        
      })
    }
}