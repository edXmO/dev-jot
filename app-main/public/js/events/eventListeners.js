import {
  handleCloseLessonModal,
  handleClear,
  handleClearBtn,
  handleViewClick,
  handleTagVisibility,
  handleTagSelect,
} from "./eventHandlers.js";
import { addLesson } from "../lessons/index.js";
import registerSW from "./serviceWorker.js";

export default function setEventListeners() {
  // cache necessary elements
  const overlay = document.querySelector(".overlay");
  const modalLessonClose = document.querySelector(".modal-lesson-close");
  const formElement = document.querySelector("form");
  const clearBtn = document.querySelector(".create-lesson-clear");
  const addTagButton = document.querySelector(".add-tag");
  const tagSelectors = document.querySelector(".tag-selectors");

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    addLesson();
  });

  modalLessonClose.addEventListener("click", handleCloseLessonModal);

  clearBtn.addEventListener("click", handleClear);

  overlay.addEventListener("click", handleCloseLessonModal);

  formElement.addEventListener("keyup", handleClearBtn);

  addTagButton.addEventListener("click", handleTagVisibility);

  tagSelectors.addEventListener("click", handleTagSelect);

  window.addEventListener("load", () => {
    registerSW();
  });
}
