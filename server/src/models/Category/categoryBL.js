import CategoryModel from "./categorySchema";

function addCategory(categoryToAdd) {
  const newCategory = new CategoryModel(categoryToAdd);
  return newCategory.save();
}

function addCategories(categoriesToAdd) {
  const newCategories = [];
  categoriesToAdd.forEach((categoryToAdd) => {
    const newCategory = new CategoryModel(categoryToAdd);
    newCategories.push(newCategory.save());
  });

  return newCategories;
}

function getCategory({ id }) {
  return CategoryModel.findOne({ _id: id });
}

function searchCategory({ name }) {
  return CategoryModel.findOne({ name: name });
}

export { addCategory, getCategory, searchCategory, addCategories };
