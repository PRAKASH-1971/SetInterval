var image = document.getElementById("aaa");

var img_array=["https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg","https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg","https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"];


var index=0;
function slide()
{

     image.src = img_array[index];
    index++;
    if(index>=img_array.length)
    {
    index=0;
    }
}
setInterval("slide()",2000);
