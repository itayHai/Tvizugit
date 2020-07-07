import WinRateModel from "./winRateModel";

function getWinRate({ id }) {
  return WinRateModel.findOne({ _id: id });
}

function getWinRateByIdAI({ IdAI }) {
  return WinRateModel.findOne({ IdAI: IdAI });
}

function getWinRates() {
  return WinRateModel.find({});
}

function addWinRate({ winRate }) {
  const newWinRate = new WinRateModel(winRate);
  return newWinRate.save();
}

export { getWinRate, getWinRates, addWinRate, getWinRateByIdAI };
