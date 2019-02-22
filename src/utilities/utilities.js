import { Toast } from "native-base";
import * as _ from "lodash";

const show = (message, type) => {
  Toast.show({
    text: message,
    duration: 2000,
    position: "bottom",
    textStyle: { textAlign: "center" },
    type: type
  });
};

const getSelectedValueList = (idList, objList) => {
  if (idList && objList) {
    let selectedList = Object.assign([], idList);
    let selectedObjectList = Object.assign([], objList);
    let selectedValueList = selectedList.map((item, index) => {
      let _comma = _.size(selectedList) !== index + 1 ? ", " : "";
      if (_.some(selectedObjectList, ["value", item]))
        return _.find(selectedObjectList, ["value", item]).label + _comma;
    });
    return selectedValueList;
  }
  return [];
};

export { show, getSelectedValueList };
