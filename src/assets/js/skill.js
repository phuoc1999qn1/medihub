import $ from 'jquery'

let skill = () => {
    $('.skill-percent').each(function () {
        let $this = $(this)
        let per = $this.attr('per')
        $this.css('width', per + '%')
        $({ animatedValue: 0 }).animate({ animatedValue: per }, {
            duration: 2000,
            step: function () {
                $this.attr('per', Math.floor(this.animatedValue))
            },
            complete: function () {
                $this.attr('per', Math.floor(this.animatedValue))
            }
        })
    })
}
let x = true;
$(window).on('scroll', function() { 
    const scrollable = document.querySelector(".skill").offsetTop;
    if ($(window).scrollTop() >= scrollable - 300 && x) { 
        skill();
        x = false
    } 
}); 
