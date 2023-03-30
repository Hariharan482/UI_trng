$(document).ready(function () {
    let countNotes= 0;
    var colorObj = {
        pink: "#e6cdeb",
        white: "#ffffff",
        yellow: "#f7cc7f",
        green: "#e6ed9c",
        orange: "#f3ab91"
    }
    var selColor = "";

    let checkloadMore=()=>{
        let notes = JSON.parse(localStorage.getItem('notes'));
        if(notes.length>10){
                $('.load-more').css("display","flex");
        }
    }

    const renderCards = (data) => {
        $card = $("<div>");
        $card.attr('class', 'card');
        $card.attr('id', data.id);
        $card.append($('<h3>').text(data.title));
        $card.append($('<p>').text(data.date));
        if ($('.url').val())
            $card.append($('<img>').attr('src', data.url));
        $card.append($('<p>').text(data.content));
        $card.css("background-color", colorObj[data.backgroundColor]);
        $('.notes-list').prepend($card);
        $('.right-float').hide();
        $('.empty-list').hide();
        checkloadMore();
    }
    
    let initialise=()=>{
        $('.del-confr').html('YES,DELETE');
        $('.empty-list').show();
        $('.right-float').hide();
        $('.popup-sect').hide();
        $('.load-more').hide();
        $('.add').prop('disabled', true);
        if (!localStorage.getItem('notes')) {
            // console.log("hjbgsf");
            localStorage.setItem('notes', JSON.stringify([]));  
        }
        else {
            if (JSON.parse(localStorage.getItem('notes')).length != 0) {
                let notes = JSON.parse(localStorage.getItem('notes'));
                condition = notes.length > 10 ? 10 : notes.length;
                countNotes = condition;
                if(notes.length>10){
                    $('.load-more').css("display","flex");
                }
                else {
                    $('.load-more').hide();
                }
                for (i = condition - 1; i >= 0; i--) {
                    renderCards(notes[i]);
                    // console.log(countNotes);
                }
            }
        }
    }
    initialise();

    backButtonFunct=()=>{
        $('.notes-list').css("display", "flex");
        $('.back-button').css("display", "none");
        $('.display-card').css('display', 'none');
        $('.display-card').html("");
        $('.title').val("");
        $('.url').val("");
        $('.content').val("");
        // $('.add').prop('disabled', true);
        $('.delete-all').html('DELETE ALL');
        $('.new').html('NEW');
        $('.add').html('ADD');
        $('.notes-list').html("");
        initialise();
    }

    $('.add-head i').click(function () {
        if (($('.title').val().trim().length != 0) || ($('.content').val().trim().length != 0)) {
            $('.popup-sect h3').text("CONFIRM");
            $('.popup-sect p').text("Seems like you are in the middle of adding/editing content! Do you want to leave ? ");
            $('.popup-sect button').html("YES,CLOSE");
            $('.popup-sect').show();
        }
        else
        {
            $('.right-float').hide();
        }
    })

    $('.content').keyup(function () {
        if (($('.title').val().trim().length == 0) || ($('.content').val().trim().length == 0)) {
            $('.add').prop('disabled', true);
        }
        else {
            $('.add').prop('disabled', false);
        }
    })

    $('.title').keyup(function () {
        if (($('.title').val().trim().length == 0) || ($('.content').val().trim().length == 0)) {
            $('.add').prop('disabled', true);
        }
        else {
            $('.add').prop('disabled', false);
        }
    })

    $('.delete-all').click(function () {
        if( $('.delete-all').html() == "DELETE ALL" )
        {
            $('.popup-sect h3').text("DELETE ALL NOTES");
            $('.popup-sect p').text("Are you sure you want to delete all notes?");
        }
        else
        {
            $('.popup-sect h3').text("DELETE NOTE");
            $('.popup-sect p').text("Are you sure you want to delete note?");
        }
        $('.popup-sect').show();
        
    })
    $('.del-confr').click(function(){
        if($('.del-confr').html()== "YES,CLOSE"){
            $('.title').val("");
            $('.url').val("");
            $('.content').val("");
            $('.add').prop('disabled', true);
            $('.right-float').hide();
            $('.del-conf').html("YES,DELETE");
        }
        else if( $('.delete-all').html() == "DELETE ALL" )
        {
            // console.log("hgf");
            $('.notes-list').html('');
            localStorage.removeItem('notes');
            initialise();
        }
        else{
            $displaycard = document.querySelector('.display-card');
            let selNotes=JSON.parse(localStorage.getItem('notes'));
            let selNote=selNotes.filter(item=>item.id!=$dispcard.id);
            $($dispcard).html("");
            localStorage.setItem('notes',JSON.stringify(selNote));
            backButtonFunct();
        }
        
    })

    $('.popup-head i').click(function () {
        $('.popup-sect').hide();
        $('.del-conf').html("YES,DELETE");
    })

    function removeTick() {
        $('.tick').remove();
    }

    $('.colordiv div').click(function () {
        // console.log("heloo");
        selColor = this.className;
        removeTick();
        $div = $('<div>').attr('class', 'tick');
        $div.append($('<i>').attr('class', 'fa-solid fa-check'));
        $(this).append($div);
    })

    setObj=()=>{
        $date = new Date().toDateString();
        let data = {
            id: Date.now(),
            title: $('.title').val(),
            date: $date.slice(4, 10) + "," + $date.slice(11,),
            url: $('.url').val(),
            content: $('.content').val(),
            backgroundColor: selColor,
        }
        return data;
    }

    const displaySelectedCard = (data)=>{
        $dispcard=document.querySelector('.display-card');
        // console.log($dispcard);
        $($dispcard).attr('id', data.id);
        $disphead = $('<div>');
        $disphead.attr('class', 'disp-head');
        $disphead.append($('<h3>').text(data.title));
        $disphead.append($('<p>').text(data.date));
        $($dispcard).append($disphead);
        // $img = $(this).find('img');
        if (data.url) {
            $div = $('<div>');
            $div.attr('class', 'display-img');
            $div.append($('<img>').attr('src', data.url));
            $($dispcard).append($div);
        }
        $($dispcard).append($('<p>').text(data.content));
        // $('.display-card').append($dispcard);

        $('.delete-all').html('DELETE');
        $('.new').html('EDIT');
        $('.load-more').hide();
    }


    $('.add-footer').on('click', '.add', function () {
        if ($('.add').html() == 'ADD') {
            let data=setObj();
            renderCards(data);
            $('.title').val("");
            $('.url').val("");
            $('.content').val("");
            $('.add').prop('disabled', true);

            const notes = JSON.parse(localStorage.getItem('notes'));
            notes.unshift(data);
            localStorage.setItem('notes', JSON.stringify(notes));
        }
        else {
            let data=setObj();
            renderCards(data);
            $displaycard = document.querySelector('.display-card');
            let selNotes=JSON.parse(localStorage.getItem('notes'));
            let selNote=selNotes.filter(item=>item.id!=$dispcard.id);
            selNote.unshift(data);
            $($dispcard).html("");
            displaySelectedCard(data);
            localStorage.setItem('notes',JSON.stringify(selNote));
        }
    })

    
    $('.notes-list').on('click', '.card', function () {
        $('.display-card').css('display', 'flex');
        $('.back-button').css("display", "block");
        $('.notes-list').css("display", "none");
        // $('.notes-list').hide();
        let selId=this.id;
        let selNotes=JSON.parse(localStorage.getItem('notes'));
        let selNote=selNotes.find(item=>item.id==selId);
        displaySelectedCard(selNote);
    })
    
    $('.back-button').click(function () {
        backButtonFunct();
    })

    $('.nav-right').on('click', '.new', function () {
        $('.right-float').show();
        if ($(this).html() == "EDIT") {
            $('.add').html('SAVE');
            $displaycard = document.querySelector('.display-card');
            let data=JSON.parse(localStorage.getItem('notes'));
            let selData=data.find(item=>item.id==$displaycard.id);
            // console.log(data);
            $('.title').val(selData.title);
            $('.url').val(selData.url);
            $('.content').val(selData.content);
        }
    })

    $('.load-more').click(() => {
        let notes = JSON.parse(localStorage.getItem('notes'));
        countNotes += 5;
        condition = notes.length > countNotes ? countNotes : notes.length-1;
        // console.log("condition", notes.length, countNotes, condition)
        $('.notes-list').html('');
        for(let index = condition; index >= 0; index--) {
            renderCards(notes[index]);
            // console.log("in", index);
        }
        if(condition < notes.length-1) {
            $('.load-more').css("display","flex");
        }
        else {
            $('.load-more').css("display","none");
        }
    })

})