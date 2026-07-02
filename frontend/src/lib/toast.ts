
export const toast = (message: string) => {
  const el = document.createElement("div");

  el.innerText = message;
  el.className =
    "fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-50";

  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 3000);
};
