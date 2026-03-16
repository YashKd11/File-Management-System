import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Note: You need to install recharts: npm install recharts
// If you prefer not to install another lib, you can use simple CSS bars.

const data = [
  { name: 'UI/UX', value: 400 },
  { name: 'Performance', value: 300 },
  { name: 'Features', value: 300 },
  { name: 'Support', value: 200 },
];

const COLORS = ['#4f46e5', '#06b6d4', '#8b5cf6', '#ec4899'];

const Reports = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Analytics Reports</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Feedback Categories</h3>
          <div className="h-[300px] w-full">
             {/* Placeholder for Chart - In a real app, use Recharts or Chart.js */}
             <div className="flex items-center justify-center h-full bg-slate-50 rounded-lg border border-dashed border-slate-300 text-slate-400">
                Chart Visualization Area
             </div>
          </div>
        </motion.div>

        {/* Text Report Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Monthly Summary</h3>
          <div className="space-y-4">
            {[
              { label: 'Total Responses', val: '85%', color: 'bg-indigo-600' },
              { label: 'Positive Sentiment', val: '62%', color: 'bg-green-500' },
              { label: 'Feature Requests', val: '45%', color: 'bg-blue-500' },
              { label: 'Bug Reports', val: '12%', color: 'bg-red-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">{item.label}</span>
                  <span className="font-bold text-slate-900">{item.val}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className={`${item.color} h-2.5 rounded-full`} style={{ width: item.val }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reports;