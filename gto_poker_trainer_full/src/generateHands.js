export function generateRandomHand() {
  const positions = ['BTN', 'CO', 'HJ', 'UTG', 'SB', 'BB'];
  const hands = ['A♠K♣', '7♦7♣', 'Q♥J♥', 'T♠9♠', '5♣5♦', 'K♠Q♦'];
  const actions = ['Raise', 'Call', 'Fold'];
  const pos = positions[Math.floor(Math.random() * positions.length)];
  const hand = hands[Math.floor(Math.random() * hands.length)];
  const move = actions[Math.floor(Math.random() * actions.length)];

  return {
    id: Date.now(),
    position: pos,
    action: `You are at ${pos} with ${hand}. What’s your move?`,
    options: ['Fold', 'Call', 'Raise'],
    correct: move,
    explanation: `This is a dynamically generated hand. GTO suggests ${move}.`
  };
}
