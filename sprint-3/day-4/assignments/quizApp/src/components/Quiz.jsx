import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from '../redux/actions/quizActions';
import { Navigate } from 'react-router-dom';
import { Container, Typography, FormControl, FormControlLabel, Radio, RadioGroup, Button, Box, CircularProgress } from '@mui/material';

const Quiz = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);
  const { questions, isLoading, error } = useSelector(state => state.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  const handleOptionChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestionIndex]: event.target.value,
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handleSubmit = () => {
    const totalQuestions = questions.length;
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (question.correctOptionIndex.toString() === selectedOptions[index]) {
        correctAnswers++;
      }
    });
    const calculatedScore = Math.round((correctAnswers / totalQuestions) * 100);
    setScore(calculatedScore);
    setSubmitted(true);
  };


  if (error) {
    return (
      <Container maxWidth="m">
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Typography variant="h4" component="h1" gutterBottom>
            Error
          </Typography>
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </Box>
      </Container>
    );
  }
 
  return (
    <Container maxWidth="sm">
      {!submitted ? (
        <>
          <Typography variant="h4">{questions[currentQuestionIndex]?.question}</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="quiz-options"
              name="quiz-options"
              value={selectedOptions[currentQuestionIndex] || ''}
              onChange={handleOptionChange}
            >
              {questions[currentQuestionIndex]?.options.map((option, index) => (
                <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          {currentQuestionIndex < questions.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNextQuestion} >
              Next Question
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleSubmit} >
              Submit Quiz
            </Button>
          )}
        </>
      ) : (
        <Box textAlign="center" mt={5}>
          <Typography variant="h4">Quiz Completed!</Typography>
          <Typography variant="h5">Your Score: {score}%</Typography>
        </Box>
      )}
    </Container>
  );
};

export default Quiz;
