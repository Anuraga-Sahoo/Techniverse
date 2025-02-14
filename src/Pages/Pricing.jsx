import { useState } from 'react';
import { CheckIcon, StarIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 0,
      duration: 'forever',
      features: [
        'Basic features',
        '5 projects limit',
        '1GB storage',
        'Community support',
        'Analytics dashboard'
      ],
      image: 'bg-black', // Black background
      icon: <StarIcon className="w-12 h-12 text-violet-400" /> // Violet icon color
    },
    {
      name: 'Pro',
      price: 9,
      duration: 'month',
      features: [
        'All Starter features',
        'Unlimited projects',
        '10GB storage',
        'Priority support',
        'Advanced analytics',
        'Team members'
      ],
      image: 'bg-black', // Black background
      icon: <SparklesIcon className="w-12 h-12 text-violet-400" />, // Violet icon color
      popular: true
    },
    {
      name: 'Enterprise',
      price: 90,
      duration: 'year',
      features: [
        'All Pro features',
        'Unlimited storage',
        '24/7 support',
        'Custom domains',
        'SSO & SAML',
        'Dedicated account manager'
      ],
      image: 'bg-black', // Black background
      icon: <CheckIcon className="w-12 h-12 text-violet-400" /> // Violet icon color
    }
  ];

  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8"> {/* Dark background */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-white sm:text-5xl" // White text
          >
            Simple, transparent pricing
          </motion.h2>
          <p className="mt-4 text-xl text-gray-300"> {/* Lighter text for better contrast */}
            Choose the plan that works best for you. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-2xl shadow-violet-500/50 shadow-lg ${plan.image} transition-all duration-300 ease-in-out hover:shadow-violet-500/70 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-violet-600 text-white px-4 py-1 rounded-tr-2xl rounded-bl-xl text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gray-800 p-4 rounded-full"> {/* Darker background for icon container */}
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-center mb-2 text-white">{plan.name}</h3> {/* White text */}
                <div className="flex items-center justify-center mb-6">
                  <span className="text-5xl font-extrabold text-white">${plan.price}</span> {/* White text */}
                  <span className="ml-2 text-gray-300">/{plan.duration}</span> {/* Lighter text */}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-violet-400 mr-2" /> {/* Violet icon color */}
                      <span className="text-gray-300">{feature}</span> {/* Lighter text */}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
                    plan.popular 
                      ? 'bg-violet-600 text-white hover:bg-violet-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700' // Darker button for non-popular plans
                  }`}
                >
                  <span>Get started</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-gray-400 text-sm" 
        >
          <p>Need something custom? Contact us for enterprise solutions</p>
          <p className="mt-2">Save 16% with yearly billing</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;