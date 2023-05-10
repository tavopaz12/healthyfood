const modalFixed = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  position: 'fixed',
  zIndex: '100',
  display: 'grid',
  placeItems: 'center',
  top: '0',
  width: '100%',
  height: '100vh',
  color: 'white'
}

export default function Modal ({ onClose, children, title }) {
  const handleClickOutModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  return (
    <section style={modalFixed} onClick={handleClickOutModal}>
      <div className="w-2/4 overflow-y-auto h-[95%] scrollbar-hide max-md:w-[90%] max-md:h-auto max-sm:mt-[-5rem] relative bg-[#f3f2f2] rounded-lg shadow">
        <button
          onClick={onClose}
          type="button"
          className="absolute cursor-pointer top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <IconCloseSvg />
        </button>

        <div className="px-6 py-6 lg:px-8">
          <h3 className="text-center mb-4 text-xl font-medium text-gray-900">
            {title}
          </h3>

          {children}
        </div>
      </div>
    </section>
  )
}

function IconCloseSvg () {
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
