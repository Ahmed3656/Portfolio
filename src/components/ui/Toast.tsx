'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { IconX } from '@tabler/icons-react';

type Toast = {
  id: string;
  type: 'success' | 'danger' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
};

type ToastContextType = {
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration (default 5 seconds)
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
};

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(() => onRemove(toast.id), 300);
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <FaCheckCircle size={20} className="text-emerald-400" />;
      case 'danger':
        return <FaExclamationCircle size={20} className="text-red-400" />;
      case 'warning':
        return <FaExclamationTriangle size={20} className="text-amber-400" />;
      case 'info':
        return <FaInfoCircle size={20} className="text-blue-400" />;
      default:
        return <FaInfoCircle size={20} className="text-blue-400" />;
    }
  };

  const getStyleClasses = () => {
    const baseClasses = 'bg-black-200 border border-white/10 backdrop-blur-md';

    switch (toast.type) {
      case 'success':
        return `${baseClasses} border-l-4 border-l-emerald-500 shadow-lg shadow-emerald-500/10`;
      case 'danger':
        return `${baseClasses} border-l-4 border-l-red-500 shadow-lg shadow-red-500/10`;
      case 'warning':
        return `${baseClasses} border-l-4 border-l-amber-500 shadow-lg shadow-amber-500/10`;
      case 'info':
        return `${baseClasses} border-l-4 border-l-blue-500 shadow-lg shadow-blue-500/10`;
      default:
        return `${baseClasses} border-l-4 border-l-blue-500 shadow-lg shadow-blue-500/10`;
    }
  };

  return (
    <div
      className={`
        ${getStyleClasses()}
        rounded-lg p-4 transform transition-all duration-300 ease-in-out
        ${isVisible && !isLeaving ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        ${isLeaving ? 'translate-x-full opacity-0' : ''}
      `}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white">{toast.title}</h4>
          {toast.message && <p className="text-sm text-white-100 mt-1 leading-relaxed">{toast.message}</p>}
        </div>

        <button
          onClick={handleRemove}
          className="flex-shrink-0 text-white/60 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-white/5"
        >
          <IconX size={16} />
        </button>
      </div>
    </div>
  );
};

export const useToastHelpers = () => {
  const { addToast } = useToast();

  return {
    success: (title: string, message?: string, duration?: number) =>
      addToast({ type: 'success', title, message, duration }),

    danger: (title: string, message?: string, duration?: number) =>
      addToast({ type: 'danger', title, message, duration }),

    warning: (title: string, message?: string, duration?: number) =>
      addToast({ type: 'warning', title, message, duration }),

    info: (title: string, message?: string, duration?: number) => addToast({ type: 'info', title, message, duration }),
  };
};
