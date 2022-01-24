const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/checkAuth')


// profile Page
router.get('/profile', ensureAuthenticated, (req, res) => res.render('profile', {
  title: 'Welcome'
}));



// landing page
router.get('/',  (req, res) => res.render('dash', {
    title: 'Homepage',
    // name: req.user.name
    
}));



router.get('/about', (req, res) => res.render('about-us', {
  title: 'about us'
}));

router.get('/team', (req, res) => res.render('team', {
  title: 'The Team'
}));

router.get('/booking', (req, res) => res.render('booking', {
  title: 'our booking'
}));

router.get('/ibeno-overview', (req, res) => {
  res.render('ibenoOverview', {
    title:'ibeno beach'
  })
})
router.get('/timeline',  (req, res) => {
  res.render('timeline', {
    title:'Timeline'
  })
})
router.get('/contestant', (req, res) => res.render('contestants', {
  title: 'The Contestant'
}));


// profile routes

router.get('/profile1', (req, res) => {
    res.render('./contestants/contestant01', {
        title: 'contestant number one'
    })
  })
  
  router.get('/profile2',  (req, res) => {
    res.render('./contestants/contestant02', {
        title: 'contestant number two'
    })
  })
  
  
  router.get('/profile3',  (req, res) => {
    res.render('./contestants/contestant03', {
        title: 'contestant number three'
    })
  })
  
  
  router.get('/profile4',  (req, res) => {
    res.render('./contestants/contestant04', {
        title: 'contestant number four'
    })
  })
  
  
  router.get('/profile5',  (req, res) => {
    res.render('./contestants/contestant05', {
        title: 'contestant number five'
    })
  })
  
  
  router.get('/profile6',  (req, res) => {
    res.render('./contestants/contestant06', {
        title: 'contestant number six'
    })
  })
  
  
  router.get('/profile7',  (req, res) => {
    res.render('./contestants/contestant07', {
        title: 'contestant number seven'
    })
  })
  
  
  router.get('/profile8',  (req, res) => {
    res.render('./contestants/contestant08', {
        title: 'contestant number eight'
    })
  })
  
  
  router.get('/profile9',  (req, res) => {
    res.render('./contestants/contestant09', {
        title: 'contestant number nine'
    })
  })
  
  
  router.get('/profile010',  (req, res) => {
    res.render('./contestants/contestant010', {
        title: 'contestant number ten'
    })
  })
  
module.exports = router;