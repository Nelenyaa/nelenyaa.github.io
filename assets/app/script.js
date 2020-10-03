$(document).ready( () => {
    bgSwitch();
})


function bgSwitch () {
  console.log('ui');
    //using jQuery
    // hardcode number of files, first bg must be 0.jpg (or png)
    var n = 1;
    var i = 0;

    // while (i <= n) {
    //   let bgN = 'assets/img/bg' + i + '.jpg';
    //     setTimeout( function() {
    //         $('#bg').css('background', bgN);
    //         console.log(bgN);
    //         if (i == n) {
    //             i = 0;
    //             i++;
    //         } else
    //             i++;
    //     }, 1000);
    // }

    for (var i = 0; i <= n; i++) {
      let bgN = 'img/bg' + i + '.jpg';
          setTimeout( function() {
              $('#bg').css('background', bgN);

              if (i == n)
                  i = 0;
          }, 1000);
      console.log($('#bg').css('background'));
    }
}
