var Canvas= new fabric.Canvas("myCanvas");

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_objects= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
       

        block_img_objects= Img;

        block_img_objects.scaleToWidth(block_image_width);
        block_img_objects.scaleToHeight(block_image_height);

        block_img_objects.set({
            top:block_y,
            left:block_x
        });
        Canvas.add(block_img_objects);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		block_x = 30;
		block_y=10;
		new_image("rr.jpg");
		console.log("Agni - Red Ranger");
	}
	if(keyPressed == '71')
	{
		block_x = 230;
		block_y=130;
		new_image("gr.png");
		console.log("Juvenile - Green Ranger");
	}

	if(keyPressed == '66')
	{
		block_x = 270;
		block_y=200;
	    new_image("br.png");
		console.log("Aman - Blue Ranger");
	
	}
	
	if(keyPressed == '89')
	{
		block_x =630;
		block_y=-60;
		new_image("yr.png");
		console.log("Happy - Yellow Ranger");
	}
	if(keyPressed == '80')
	{
		block_x = 850;
		block_y=130;
		new_image("pr.png");
		console.log("Amity - Pink Ranger");
	}
	
}

