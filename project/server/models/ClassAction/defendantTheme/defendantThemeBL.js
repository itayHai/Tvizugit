import defendantThemeModel from "./defendantThemeModel";

function getDefendantThemes() {
    return defendantThemeModel.find({});
}

export { getDefendantThemes };
