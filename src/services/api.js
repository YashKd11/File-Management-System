// This file is where you will connect your real backend later.
// Currently, it mocks responses so the UI works immediately.

const API_BASE = 'http://localhost:3000/api'; // Change this when you have a backend

export const api = {
  login: async (email, password) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    if (email === 'admin@example.com') return { token: '12345', user: { name: 'Admin' } };
    throw new Error('Invalid credentials');
  },
  
  getFeedback: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      { id: 1, user: 'Alice', text: 'Great UI!', rating: 5, date: '2023-10-01' },
      { id: 2, user: 'Bob', text: 'Needs dark mode.', rating: 3, date: '2023-10-02' },
      { id: 3, user: 'Charlie', text: 'Fast performance.', rating: 5, date: '2023-10-05' },
    ];
  }
};