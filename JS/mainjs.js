$(document).ready(function () {
  /****************MENUS********************/
  $('#BIO').click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('.BIO').offset().top
      },
      800
    );
  });
  $('#SKILLS').click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('.SKILLS').offset().top
      },
      800
    );
  });
  $('#EXPERIENCE').click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('.EXPERIENCE').offset().top
      },
      800
    );
  });
  $('#WORKS').click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('.WORKS').offset().top
      },
      800
    );
  });

  /****************SCROLL TOP********************/
  $(window).scroll(function () {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 300) {
      $('.scrollTop').css('opacity', '1');
    } else {
      $('.scrollTop').css('opacity', '0');
    }
  }); // scroll END

  //Click event to scroll to top
  $('.scrollTop').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });

  setTimeout(function () {
    $('#overlay').fadeOut();
  }, 1000);

  $('.mymodal').click(function () {
    $('#moreInfo').show();

    var id = $(this).attr('id');
    var title = $(this).find('.titleEXP').text();
    var local = $(this).find('.local').text();

    switch (id) {
      case '1':
        var link = 'https://terradasideias.com/';
        var time = '1 month';
        var mark = '14';
        var desc =
          'This internship was more focus on video and design. It was one month of work doing many projects on Adobe After Effects and Adobe Photoshop, which gave me experience in video and motion graphics.';
        break;
      case '2':
        var link =
          'http://www.ae-salvaterra.pt/portal/index.php/aprender/cursos-profissionais/tecnico-de-multimedia';
        var time = '3 Years';
        var mark = '17';
        var desc =
          "In this course, I learned all the basics of design, 3D modeling, animation, video, and programming. I learned mostly Adobe Software like Photoshop, After Effects, Premiere,  Flash, Illustrator, Dreamweaver and also some basic programming language's like HTML, CSS, Javascript and, PHP.";
        break;
      case '3':
        var link = 'http://www.centroeducatis.net';
        var time = '2 months';
        var mark = '19';
        var desc =
          'In this internship, I was responsible for creating the backend for this company website. It was made in PHP using Dreamweaver.';
        break;
      case '4':
        var link =
          'https://www.istec.pt/ctesp-desenvolvimento-de-produtos-multimedia/';
        var time = '2 Years';
        var mark = '17';
        var desc = 'Acquired knowledge in programming. design, video, and 3D.';
        break;
      case '5':
        var link = 'https://creative-minds.pt/';
        var time = '6 months';
        var mark = '20';
        var desc = 'Mostly frontend development using HTML, CSS and Jquery.';
        break;
      case '6':
        var link = 'https://www.istec.pt/engenharia-multimedia/';
        var time = '2 Years';
        var mark = '16';
        var desc =
          'In this course, I learned the fundamentals of programming, data structures, cryptography, and web development.';
        break;
      case '7':
        var link = 'https://www.runtime-revolution.com/';
        var time = 'Since Set 2019';
        var mark = 'Not applicable';
        var desc =
          "This is my first job as a software developer and I'm using different types of technologies and frameworks such as React, React-Native, Ruby on Rails, Java and others.";
        break;
      default:
        var title = 'Null';
        var local = 'Null';
        var link = 'Null';
        var time = 'Null';
        var mark = 'Null';
    }

    $('.modalTitle').html('<h3>' + title + '</h3>');
    $('.modalLocal').html(
      '<a href="' + link + '" target="_blank">' + local + '</a>'
    );
    $('.modalTime').html('<b>Time:</b> ' + time);
    $('.modalMark').html('<b>Final:</b> ' + mark);
    $('.modalDesc').html('<b>Description:</b> <br>' + desc);
  });

  $('.close').click(function () {
    $('#moreInfo').hide();
  });
});
