const blogPosts = [
  { id: 1, date: 'April 4, 2026' },
  { id: 2, date: 'March 28, 2026' },
  { id: 3, date: 'March 15, 2026' },
  { id: 4, date: 'February 22, 2026' },
  { id: 5, date: 'September 10, 2026' },
  { id: 6, date: 'August 18, 2026' },
  { id: 7, date: 'July 22, 2026' },
  { id: 8, date: 'June 10, 2026' },
  { id: 9, date: 'May 30, 2026' },
  { id: 10, date: 'April 20, 2026' },
  { id: 11, date: 'March 05, 2026' },
  { id: 12, date: 'February 12, 2026' },
  { id: 13, date: 'January 18, 2026' },
  { id: 14, date: 'January 05, 2026' },
  { id: 15, date: 'December 12, 2025' },
  { id: 16, date: 'November 20, 2025' },
  { id: 17, date: 'October 14, 2025' },
  { id: 18, date: 'September 02, 2025' },
  { id: 19, date: 'April 17, 2026' },
  { id: 20, date: 'April 17, 2026' },
  { id: 21, date: 'April 22, 2026' },
  { id: 22, date: 'April 21, 2026' },
  { id: 23, date: 'April 22, 2026' },
  { id: 24, date: 'April 21, 2026' },
  { id: 25, date: 'April 21, 2026' }
];

const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
console.log(sorted.map(p => `${p.date} (ID: ${p.id})`));
