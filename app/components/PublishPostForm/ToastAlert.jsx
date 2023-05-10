import { useEffect } from 'react'
import { useState } from 'react'

export default function ToastAlert ({
  title,
  info,
  success,
  error,
  warning,
  onClose,
  timeout,
  position
}) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onClose()
    }, timeout)

    return () => clearTimeout(timer)
  }, [onClose, timeout])

  if (!visible) {
    return null
  }

  return (
    <div
      id="toast-notification"
      className={`w-1/4 animate-shake max-md:w-3/4 p-4 text-gray-900 bg-white rounded-lg shadow fixed ${
        (position === 'top-left' && 'top-5 left-5') ||
        (position === 'top-right' && 'top-5 right-5') ||
        (position === 'bottom-left' && 'bottom-5 left-5') ||
        (position === 'bottom-right' && 'bottom-5 right-5') ||
        'top-5 right-5'
      }`}
      role="alert">
      <div className="flex items-center">
        <span className="mb-1 text-base font-bold text-gray-900">{title}</span>

        {onClose && (
          <button
            onClick={onClose}
            type="button"
            className="ml-auto cursor-pointer -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
            data-dismiss-target="#toast-notification"
            aria-label="Close">
            <span className="sr-only">Close</span>
            <IconClose />
          </button>
        )}
      </div>

      <div className="flex items-center">
        {(success && <IconSuccess />) ||
          (error && <IconError />) ||
          (warning && <IconWarning />)}

        <div className="ml-3 text-sm font-normal">
          <div className="text-sm font-semibold text-gray-900">{info}</div>
        </div>
      </div>
    </div>
  )
}

function IconClose() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"></path>
    </svg>
  )
}

function IconSuccess() {
  return (
    <div className="relative inline-block shrink-0 bg-green-500 text-white font-medium p-1 rounded-lg">
      <span className="sr-only">Icon</span>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"></path>
      </svg>
    </div>
  )
}

function IconError() {
  return (
    <div className="relative inline-block shrink-0 bg-red-500 text-white font-medium p-1 rounded-lg">
      <span className="sr-only">Icon</span>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"></path>
      </svg>
    </div>
  )
}

function IconWarning() {
  return (
    <div className="relative inline-block shrink-0 bg-orange-500 text-white font-medium p-1 rounded-lg">
      <span className="sr-only">Icon</span>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"></path>
      </svg>
    </div>
  )
}
