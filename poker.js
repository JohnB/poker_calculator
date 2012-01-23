
var Poker = {
  usual_suspects: [
    'ChrisH', 'ChrisR', 'DavidR',  'DavidW',  'EJ',  'GordonC',  'HughB',  'JayN',  'JohnB',  'MarkF',  'OtisW',  'SteveF'
  ],
  players: {},
  current_player: '',
  buy_in: 25.00,
  num_players: 7,

  init: function() {
    // Create list of "buttons" in the #players_to_choose_from span
  },

};



$(document).ready(function() {
  $(".player").click(function(event) {
    console.log(event)
    window.location = "#chip_value_page"
  })
})
