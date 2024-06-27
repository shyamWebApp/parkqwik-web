import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
const questions = [
  {
    id: 1,
    question: "Can I reserve a parking spot in advance?",
    answer:
      "Yes, you can book your parking space in advance. You can choose the date and time when you need your parking space.",
  },
  {
    id: 2,
    question: "Can I Cancel my parking reservation?",
    answer:
      "Yes, you can cancel your parking reservation before your allotted time by calling our customer support number.",
  },
  {
    id: 3,
    question: "Does ParkQwik operate in multiple cities?",
    answer: "Yes, we operate in all metro cities and the cities around them.",
  },
  {
    id: 4,
    question: "How can I extend my parking reservation?",
    answer:
      "You can either rebook or contact customer support to extend your parking.",
  },
  {
    id: 5,
    question: "Do you offer valet parking service?",
    answer:
      "Yes, we do offer valet parking services. You can reach out to our customer support number at 842 842 88 33 to book your valet parking.",
  },
];

const variants = {
  open: {
    maxHeight: "150px",
    transition: {
      duration: 0.01,
    },
  },
  close: {
    maxHeight: "58px",
    transition: {
      duration: 0.01,
    },
  },
};

const arrowVariants = {
  open: {
    rotate: 90,
    transition: {
      duration: 0.2,
    },
  },
  close: {
    rotate: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Questions = () => {
  const [answer, setAnswer] = useState([]);

  const toggleAnswer = (n) => {
    if (answer.includes(n)) {
      const newAns = answer.filter((item) => item !== n);
      setAnswer(newAns);
    } else {
      const newAns = [...answer, n];
      setAnswer(newAns);
    }
  };

  function CustomToggle({ eventKey, data }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      toggleAnswer(eventKey)
    );

    return (
      <motion.div className="question-content" onClick={decoratedOnClick}>
        <p>{data.question}</p>
        <motion.div
          variants={variants}
          initial="close"
          animate={answer.includes(eventKey) ? "open" : "close"}
        >
          <motion.div variants={arrowVariants}>
            <Icon
              className="question-arrow"
              icon="mingcute:right-fill"
              color="#1a9e75"
              width={24}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center mt-5 pt-5">
      <p className="fs-1 fw-medium text-center mb-5">
        Frequently Asked Questions
      </p>
      <div className="question-content-container">
        {questions.map((data) => (
          <motion.div
            variants={variants}
            animate={answer.includes(data.id) ? "open" : "close"}
            key={data.id}
            className="question-container"
            onClick={() => toggleAnswer(data.id)}
          >
            <div className="question-content">
              <p>{data.question}</p>
              <motion.div
                variants={arrowVariants}
                animate={answer.includes(data.id) ? "open" : "close"}
              >
                <Icon
                  className="question-arrow"
                  icon="mingcute:right-fill"
                  color="#1a9e75"
                  width={24}
                />
              </motion.div>
            </div>
            <p
              variants={variants}
              initial="closed"
              animate={answer.includes(data.id) ? "open" : "closed"}
              className="w-75 text-center mt-3 mb-4"
            >
              {data.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
