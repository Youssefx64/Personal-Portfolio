import React from 'react';
import { PenTool } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge, insights, and experiences in AI, machine learning, and technology.
          </p>
        </div>

        {/* Simplified Coming Soon Content */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-16">
            <div className="w-24 h-24 mx-auto mb-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <PenTool className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
              Coming Soon
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;