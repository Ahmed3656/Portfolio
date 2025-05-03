'use client';

import { motion } from 'framer-motion';

interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: "message" | "connect") => void
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabVariants = {
    active: { color: "#ffffff", opacity: 1 },
    inactive: { color: "#ffffff99", opacity: 0.7 }
  }

  return (
    <div className="flex border-b border-white/10">
      <motion.button
        className={`flex-1 py-3 px-4 font-medium ${activeTab === "message" ? "text-white" : "text-white/70"}`}
        onClick={() => onTabChange("message")}
        variants={tabVariants}
        animate={activeTab === "message" ? "active" : "inactive"}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
      <motion.button
        className={`flex-1 py-3 px-4 font-medium ${activeTab === "connect" ? "text-white" : "text-white/70"}`}
        onClick={() => onTabChange("connect")}
        variants={tabVariants}
        animate={activeTab === "connect" ? "active" : "inactive"}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        whileTap={{ scale: 0.98 }}
      >
        Connect Directly
      </motion.button>
    </div>
  )
}
