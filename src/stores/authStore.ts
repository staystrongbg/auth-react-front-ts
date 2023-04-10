import create from "zustand";

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

type DefaultValue = {
  refreshToken: string | null;
  accessToken: string | null;
  login: (tokens: Tokens) => void;
  isLoggedIn: () => boolean;
  logout: () => void;
};

function setTokensToLocalStorage({ accessToken, refreshToken }: Tokens) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
}

function removeTokensFromLocalStorage() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export const useAuthStore = create<DefaultValue>((set, get) => ({
  accessToken: localStorage.getItem("accessToken"),

  refreshToken: localStorage.getItem("refreshToken"),

  isLoggedIn: () => !!get().accessToken,

  login: (tokens) => {
    setTokensToLocalStorage(tokens);
    set((state) => ({
      ...state,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    }));
  },

  logout: () => {
    removeTokensFromLocalStorage();
    set((state) => ({
      ...state,
      accessToken: null,
      refreshToken: null,
    }));
  },
}));
