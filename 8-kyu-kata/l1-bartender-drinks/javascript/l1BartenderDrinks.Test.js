// 8 kyu - L1: Bartender, drinks!  [ ID: 568dc014440f03b13900001d  (l1-bartender-drinks) ]
// URL: https://www.codewars.com/kata/568dc014440f03b13900001d
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
Test.assertEquals(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
Test.assertEquals(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
Test.assertEquals(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
Test.assertEquals(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
Test.assertEquals(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
Test.assertEquals(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
Test.assertEquals(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
Test.assertEquals(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

Test.assertEquals(getDrinkByProfession("jabrOnI"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
Test.assertEquals(getDrinkByProfession("scHOOl COUnselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
Test.assertEquals(getDrinkByProfession("prOgramMeR"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
Test.assertEquals(getDrinkByProfession("bike GanG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
Test.assertEquals(getDrinkByProfession("poLiTiCiAN"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
Test.assertEquals(getDrinkByProfession("RAPPer"), "Cristal", "'Rapper' should map to 'Cristal'");
Test.assertEquals(getDrinkByProfession("punDIT"), "Beer", "'Pundit' should map to 'Beer'");
Test.assertEquals(getDrinkByProfession("pUg"), "Beer", "'Pug' should map to 'Beer'");

describe('Random tests', function() {
  var _, professions, referenceSol;
  _ = require('lodash');
  professions = ['jabroni', 'school counselor', 'programmer', 'bike gang member', 'politician', 'rapper'];
  referenceSol = function(profession) {
    switch (profession.toLowerCase()) {
      case 'jabroni':
        return 'Patron Tequila';
      case 'school counselor':
        return 'Anything with Alcohol';
      case 'programmer':
        return 'Hipster Craft Beer';
      case 'bike gang member':
        return 'Moonshine';
      case 'politician':
        return 'Your tax dollars';
      case 'rapper':
        return 'Cristal';
      default:
        return 'Beer';
    }
  };
  return _.times(40, function() {
    var prof;
    prof = _.random(1) === 0 ? _.sample(professions) : Test.randomToken();
    if (_.random(1) === 0) {
      prof = prof.toUpperCase();
    }
    return it(prof, function() {
      return Test.assertSimilar(getDrinkByProfession(prof), referenceSol(prof));
    });
  });
});
