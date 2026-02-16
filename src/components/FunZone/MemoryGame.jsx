import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

const ICONS = ['🎓', '📚', '⚽', '🎨', '✝️', '🚌', '🔬', '🎵'];
// Duplicate icons to create pairs
const CARD_PAIRS = [...ICONS, ...ICONS];

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [won, setWon] = useState(false);
    const [moves, setMoves] = useState(0);

    // Initialize game
    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const shuffled = [...CARD_PAIRS]
            .sort(() => Math.random() - 0.5)
            .map((emoji, index) => ({ id: index, emoji }));

        setCards(shuffled);
        setFlipped([]);
        setSolved([]);
        setWon(false);
        setMoves(0);
    };

    const handleCardClick = (id) => {
        // Prevent clicking if disabled or already flipped/solved
        if (flipped.length === 2 || flipped.includes(id) || solved.includes(id) || won) return;

        const newFlipped = [...flipped, id];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            checkForMatch(newFlipped);
        }
    };

    const checkForMatch = ([firstId, secondId]) => {
        const firstCard = cards.find(c => c.id === firstId);
        const secondCard = cards.find(c => c.id === secondId);

        if (firstCard.emoji === secondCard.emoji) {
            setSolved(prev => [...prev, firstId, secondId]);
            setFlipped([]);
        } else {
            // Delay flipping back
            setTimeout(() => {
                setFlipped([]);
            }, 1000);
        }
    };

    useEffect(() => {
        if (solved.length === cards.length && cards.length > 0) {
            setWon(true);
        }
    }, [solved, cards]);

    return (
        <div className="fun-zone-container glass-panel p-8 text-center" style={{ padding: '2rem', borderRadius: '16px' }}>
            {won && <Confetti recycle={false} numberOfPieces={500} />}

            <h2 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>🎮 Kids' Fun Zone: Memory Match!</h2>
            <p style={{ marginBottom: '2rem' }}>Match the school spirit icons to win! Moves: {moves}</p>

            <div className="game-board">
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className={`game-card ${flipped.includes(card.id) || solved.includes(card.id) ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(card.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {flipped.includes(card.id) || solved.includes(card.id) ? (
                            <span style={{ fontSize: '2.5rem' }}>{card.emoji}</span>
                        ) : (
                            <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>❓</span>
                        )}
                    </motion.div>
                ))}
            </div>

            {won && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginTop: '2rem' }}
                >
                    <h3 style={{ color: 'var(--accent-secondary)' }}>🎉 Outstanding Job! 🎉</h3>
                    <button onClick={initializeGame} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                        Play Again
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default MemoryGame;
