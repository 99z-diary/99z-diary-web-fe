export const pageUtil = function () {
  const controller = {};

  controller.getPageItems = function (items, page) {
    const pageItems = items.slice((page - 1) * 6, page * 6);
    return pageItems;
  };

  return controller;
};
