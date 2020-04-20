import CategoryModel from "./CategorySchema";

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
  return CategoryModel.find({ id: id });
}

function searchCategory({ name }) {
  return CategoryModel.find({ name: name });
}

export { addCategory, getCategory, searchCategory, addCategories };
