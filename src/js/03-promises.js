import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonRef = document.querySelector("[type='submit']");
const formRef = document.querySelector(".form");
const delayInputRef = formRef.querySelector("[name='delay']");
const stepInputRef = formRef.querySelector("[name='step']");
const amountInputRef = formRef.querySelector("[name='amount']");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = event.target;
  const delayValue = Number(formData.delay.value);
  const stepValue = Number(formData.step.value);
  const amountValue = Number(formData.amount.value);

  for (let position = 0; position < amountValue; position += 1) {
    const delay = delayValue + stepValue * position;
    createPromise({ position, delay })
      .then(({ position, delay } = {}) => {
        Notify.success(`Fulfilled promise ${position+1} in ${delay}ms`);
      })
      .catch(({ position, delay } = {}) => {
        Notify.failure(`Rejected promise ${position+1} in ${delay}ms`);
      });
  }
}

function createPromise({ position, delay }) {
  const shouldResolve = Math.random() > 0.3;
  const promiseResult = (resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  };

  const promise = new Promise(promiseResult);
  return promise;
}
