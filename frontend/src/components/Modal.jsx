import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useGlobalContext } from '../context/context.jsx';

const Modal = () => {
  const {
    setLocation,
    handleSubmitModal,
    closeModal,
    checked,
    handleCheckbox,
    modal,
  } = useGlobalContext();

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-327 h-217 bg-white dark:bg-very-dark-blue transform overflow-hidden rounded-2xl  text-left align-middle shadow-xl transition-all pl-6
                
                "
                >
                  <form onSubmit={closeModal}>
                    {/* INPUT AND LOCATION ICON */}
                    <div className="flex gap-x-4 items-center border-b border-opacity-10 h-72 border-5964E0">
                      {/* 1--------LOCATION ICON */}
                      <div className="">
                        <svg
                          width="17"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                            fill="#5964E0"
                            fillRule="nonzero"
                          />
                        </svg>
                      </div>

                      {/* 2--------INPUT  */}
                      <input
                        id="location"
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full focus:outline-none text-heading-4 caret-violet leading-none text-very-dark-blue dark:text-white bg-transparent placeholder-light-grey dark:placeholder-white"
                        placeholder="Filter by location..."
                      />
                    </div>

                    {/* CHECKBOX AND FULL_TIME TEXT */}
                    <div className="flex gap-x-4 mt-7">
                      {/* space */}

                      {/* 1------- CHECKBOX */}
                      <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={handleCheckbox}
                          className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                        />
                        <div className="check-icon hidden bg-violet text-white rounded-sm">
                          <svg
                            className="icon icon-tabler icon-tabler-check"
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M5 12l5 5l10 -10" />
                          </svg>
                        </div>
                      </div>

                      {/* 2------- TEXT */}
                      <p className="text-body text-very-dark-blue dark:text-white font-bold">
                        Full Time Only
                      </p>

                      <style>
                        {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
                      </style>
                    </div>

                    {/* BUTTON SEARCH  */}
                    <div className="mt-6 flex">
                      <button
                        disabled={checked}
                        type="button"
                        className="w-279 h-48 inline-flex items-center justify-center rounded-md border border-transparent disabled:bg-slate-600 bg-5964E0 px-4 py-2 text-body font-medium text-white focus:outline-none"
                        onClick={handleSubmitModal}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
