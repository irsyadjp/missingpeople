const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /posts'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST request to /posts'
  });
});

router.get('/:commentId', (req, res, next) => {
  const id = req.params.commentId;

  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

module.exports = router;
