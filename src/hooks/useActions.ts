import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/action-creators";

/**
 * Хук с помощью которого можно к готовым Action Creators забиндить dispatch
 */
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActionCreators, dispatch);
};
