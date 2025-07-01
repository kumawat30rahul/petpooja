import React from "react";

const AIReviewCard = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 w-full max-w-md mx-auto shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
          <div className="relative">
            {/* Chat bubble icon */}
            <div className="w-6 h-5 bg-white rounded-md relative">
              <div className="absolute bottom-0 left-1 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-0 left-3 w-1 h-1 bg-white rounded-full"></div>
            </div>
            {/* Star */}
            <div className="absolute -top-1 -right-1 w-3 h-3 text-white text-xs">
              ★
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">22 Ai Review</h1>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Manually Approve</span>
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-medium">
            2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Completed</span>
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-medium">
            10
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Rejected by Ai</span>
          <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm font-medium">
            10
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIReviewCard;
