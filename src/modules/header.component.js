import $ from 'jquery'

$('<h1 />')
  .text('Helo, World from jQuery!')
  .css({
    textAlign: 'center',
    color: "green"
  })
  .appendTo($('header'))