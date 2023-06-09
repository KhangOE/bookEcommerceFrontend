import React from "react";
import { Link } from "react-router-dom";

export const NotificationComplete = (props) => {
  return (
    <div>
      {props.show && (
        <div
          id="popup-modal"
          tabindex=""
          class=" top-0 bottom-0 left-0 right-0 z-50 mx-auto  p-4 overflow-x-hidden overflow-y-auto md:inset-0 "
        >
          <div class="absolute m-auto top-[250px] left-0 right-0 w-full max-w-md max-h-full bg-black/30">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="p-6 text-center">
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  oder successfully !
                </h3>
                <Link to="/">
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Back to Home page
                  </button>
                </Link>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => {
                    props.setShow(false);
                  }}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
