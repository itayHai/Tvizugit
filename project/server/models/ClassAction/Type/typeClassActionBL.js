import typeClassActionModel from "./typeClassActionModel";

function getTypesOfClassAction() {
    return typeClassActionModel.find({});
}

export { getTypesOfClassAction };
