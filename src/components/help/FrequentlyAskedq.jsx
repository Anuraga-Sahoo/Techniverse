import React, { useState } from 'react'
// import { FcAnswers } from 'react-icons/fc'
import { FaPlus } from "react-icons/fa6";

const FrequentlyAskedq = () => {
  const questionsAnswer = [
    {
      name: "Q: What is the best way to learn React?",
      answer: "The best way to learn React is by building projects and experimenting with different features"
    },
    {
      name: "Q: What is the best way to learn MongoDB?",
      answer: "Start with understanding NoSQL concepts, then practice through hands-on database projects and real-world applications"
    },
    {
      name: "Q: What is the best way to learn JavaScript?",
      answer: "Begin with core concepts, then build interactive projects and contribute to open-source repositories"
    },
    {
      name: "Q: What is the best way to learn CSS?",
      answer: "Practice daily by replicating designs, learn CSS Grid/Flexbox, and experiment with modern frameworks"
    },
    {
      name: "Q: What is the best way to learn HTML?",
      answer: "Start with semantic markup, then gradually incorporate accessibility features and modern HTML5 elements"
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 lg:mb-10">
        Frequently Asked Questions
      </h1>
      
      <div className="space-y-4">
        {questionsAnswer.map((question, index) => (
          <div 
            key={index}
            className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div 
              className="flex justify-between items-center p-4 md:p-5 cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h2 className="text-base md:text-lg lg:text-xl font-medium text-gray-100">
                {question.name}
              </h2>
              <button 
                className="text-blue-600 hover:text-blue-800 focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`answer-${index}`}
              >
                <FaPlus  className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>
            </div>

            <div
              id={`answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-4 md:px-5 pb-4 md:pb-5 text-gray-300 text-sm md:text-base">
                {question.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FrequentlyAskedq