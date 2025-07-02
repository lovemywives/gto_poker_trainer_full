import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { motion } from 'framer-motion';

const sampleHands = [
  {
    id: 1,
    position: 'BTN',
    action: 'You are on the button with A♠K♣. The big blind raises 3bb. What’s your move?',
    options: ['Fold', 'Call', '3-bet to 9bb'],
    correct: '3-bet to 9bb',
    explanation: 'AK offsuit is a premium hand on the button. GTO recommends a 3-bet here.'
  },
  {
    id: 2,
    position: 'CO',
    action: 'You are in the cutoff with 7♠7♦. Everyone folds to you. What’s your move?',
    options: ['Fold', 'Call', 'Raise to 2.5bb'],
    correct: 'Raise to 2.5bb',
    explanation: 'Pocket pairs are typically opened from CO. Standard GTO opening size is 2.5bb.'
  }
];

export default function PokerTrainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const hand = sampleHands[currentIndex];

  const handleNext = () => {
    setSelected('');
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % sampleHands.length);
  };

  return (
    <motion.div
      className="p-4 max-w-xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-4">
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Position: {hand.position}</h2>
          <p>{hand.action}</p>
          <RadioGroup onValueChange={setSelected} value={selected}>
            {hand.options.map((opt) => (
              <div key={opt} className="flex items-center space-x-2">
                <RadioGroupItem value={opt} />
                <label>{opt}</label>
              </div>
            ))}
          </RadioGroup>
          {showAnswer && (
            <div className="mt-4 p-2 border rounded bg-gray-100">
              <p>
                <strong>Correct Answer:</strong> {hand.correct}
              </p>
              <p>{hand.explanation}</p>
            </div>
          )}
          <div className="flex justify-between">
            {!showAnswer ? (
              <Button
                disabled={!selected}
                onClick={() => setShowAnswer(true)}
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNext}>Next Hand</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
