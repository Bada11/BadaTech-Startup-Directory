import { motion } from "framer-motion";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">Preparing your experience</h2>
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default loading;
