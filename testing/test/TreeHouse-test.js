if(typeof require === 'function') {
   var chai = require('chai')
}

var expect = chai.expect

describe('intersectBadges', function() {

  describe('returned value')
    it('should return an array of two url links', function() {
      expect(intersectBadges('Ty Brenner', 'Kathleen Kent').to.equal(["https://achievement-images.teamtreehouse.com/Generic_Newbie.png", "https://achievement-images.teamtreehouse.com/badges_html_howtomakeawebsite_stage01.png"]))
    })
  })

  describe('typeof returned value', function() {
    it('should return an array', function() {
    expect(intersectBadges('Ty Brenner', 'Kathleen Kent').to.be.a('array'))
    })
  })

