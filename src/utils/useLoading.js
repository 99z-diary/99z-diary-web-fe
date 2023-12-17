import { useRecoilState } from "recoil";
import { loadingSelector } from "recoil/loadingAtom";

export const useLoading = function () {
  const [loadingState, setLoadingState] = useRecoilState(loadingSelector);

  // controller
  const loading = {};

  // Loading 키고 끄기
  loading.onAndOff = (state) => setLoadingState(state);

  return loading;
};
