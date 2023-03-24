$(document).ready(function(){
    let ajax=(url,funct)=>{
        $.ajax(
            {
                url : url,
                success : function(res){
                    funct(res);
                },
            }
        )
    }

    let leftContainer=(res)=>{
        let videoSect=$(".video-section");
        let $video = $("<video>");
        $video.attr("src",res.videoUrl);
        $video.attr("controls",true);
        $video.attr("poster","/images/Screenshot 2023-03-22 at 7.25.34 PM.png");
        videoSect.append($video);
        let h2=$("<h2>");
        h2.text(res.title);
        videoSect.after(h2);
        let p=$("<p>");
        p.attr("class","video-descrptn");
        p.text(res.description);
        h2.after(p);
        let hr=$("<hr>");
        p.after(hr);
        let h3=$("<h3>");
        h3.text("Comments");
        hr.after(h3);

        res.comments.forEach(comment => {
            let card=$("<div>");
            card.attr("class","card");
            let cardimg=$("<div>");
            cardimg.attr("class","cardimg");
            let img=$("<img>");
            img.attr("src",comment.image);
            cardimg.append(img);
            let text=$("<div>");
            text.attr('class','text');
            let p=$("<p>");
            p.text(comment.name);
            p.attr("class","name");
            let p1=$("<p>");
            p1.text(comment.comment);
            p1.attr("class","comment");
            text.append(p);
            text.append(p1);
            card.append(cardimg);
            card.append(text);
            $('.comment-section').append(card);
        
        });
    }
    
    let rightContainer=(res)=>{
        res.forEach(image=>{
            let div=$("<div>");
            div.attr("class","imag-container");
            let img=$("<img>");
            img.attr("src",image.imageUrl);
            img.attr("alt",image.title);
            div.append(img);
            $(".right-container").append(div);
        })
    }
    ajax("https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",leftContainer);
    ajax("https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",rightContainer);
});